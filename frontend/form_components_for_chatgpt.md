# Vitaarah Frontend Form Components

This document contains the source code for the form components in the Next.js frontend of the Vitaarah project (`src/components/form`). These components handle user input for appointments, consultations, and quotes.

## 1. appointment-form.jsx
```jsx
"use client";
import { useCallback, useState } from "react";
import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { z } from "zod";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

import { Field, FieldError, FieldLabel } from "./field";
import { Input, textareaBase } from "../ui/input";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

// Schema for Appointment form
const appointmentSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  phone: z
    .string()
    .min(10, "Phone number is too short")
    .max(15, "Phone number is too long"),
  date: z.string().min(1, "Preferred date is required"),
  time: z.string().min(1, "Preferred time is required"),
  message: z.string().optional(),
});

const inputStyle =
  "w-full h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[55px] border-b border-black/15 bg-transparent rounded-none px-0 focus-visible:ring-0 focus-visible:border-black transition-colors font-helvetica text-[11px] lg:text-[11.3px] xl:text-[14px] 2xl:text-[15.8px] 3xl:text-[19.2px] text-[#875849] placeholder:text-[#875849]";

export function AppointmentForm({ handleDialogClose }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      message: "",
    },
    validatorAdapter: zodValidator(),
    onSubmit: async ({ value }) => {
      setIsSubmitting(true);
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...value,
            formType: "Appointment",
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to submit");
        }

        setIsSuccess(true);
      } catch (error) {
        console.error("Appointment submission error:", error);
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <div className="w-full h-full bg-[#fff9eb] p-[20px_25px] sm:p-[32px_34px] xl:p-[42px_44px] 2xl:p-[45px_46px] 3xl:p-[55px_58px] flex flex-col justify-center">
      {isSuccess ? (
        <div className="flex flex-col items-center justify-center gap-4 py-8 text-center h-full">
          <div className="text-[18px] lg:text-[24px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[40px] leading-normal font-normal font-things text-[#1f1f1f]">
            Thank You!
          </div>
          <p className="text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-[#1f1f1f]/80 max-w-md">
            Your appointment request has been received. We will contact you
            shortly to confirm your booking.
          </p>
          <Button
            variant="outline"
            onClick={handleDialogClose}
            className="mt-4 border-[#1f1f1f] text-[#1f1f1f] hover:bg-[#1f1f1f] hover:text-white"
          >
            Close
          </Button>
        </div>
      ) : (
        <>
          <h2 className="text-[18px] sm:text-[24px] md:text-[28px] lg:text-[34px] xl:text-[43.5px] 2xl:text-[47.6px] 3xl:text-[57.8px] leading-tight font-normal font-things text-[#1f1f1f] mb-[5px] xl:mb-[8px] 2xl:mb-[10px] 3xl:mb-[15px]">
            Book an Appointment
          </h2>
          <p className="text_3 font-normal text-black mb-[20px] xl:mb-[30px] 2xl:mb-[35px] 3xl:mb-[45px]">
            Schedule your visit with our specialists.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
            className="flex flex-wrap gap-[20px] xl:gap-[30px] 2xl:gap-[35px] 3xl:gap-[40px]"
          >
            <form.Field name="name">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field
                    data-invalid={isInvalid || undefined}
                    className="w-full"
                  >
                    <FieldLabel className="sr-only" htmlFor={field.name}>
                      Name*
                    </FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid || undefined}
                      placeholder="Your Name*"
                      autoComplete="name"
                      disabled={isSubmitting}
                      className={cn(inputStyle)}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            </form.Field>

            <form.Field name="email">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field
                    data-invalid={isInvalid || undefined}
                    className="w-full sm:w-[calc(50%-10px)] xl:w-[calc(50%-15px)] 2xl:w-[calc(50%-17.5px)] 3xl:w-[calc(50%-20px)]"
                  >
                    <FieldLabel className="sr-only" htmlFor={field.name}>
                      Email
                    </FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      type="email"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid || undefined}
                      placeholder="Your Email"
                      autoComplete="email"
                      disabled={isSubmitting}
                      className={cn(inputStyle)}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            </form.Field>

            <form.Field name="phone">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field
                    data-invalid={isInvalid || undefined}
                    className="w-full sm:w-[calc(50%-10px)] xl:w-[calc(50%-15px)] 2xl:w-[calc(50%-17.5px)] 3xl:w-[calc(50%-20px)]"
                  >
                    <FieldLabel className="sr-only" htmlFor={field.name}>
                      Phone*
                    </FieldLabel>
                    <PhoneInput
                      value={field.state.value}
                      onChange={(phone) => field.handleChange(phone)}
                      defaultCountry="ae"
                      disabled={isSubmitting}
                      inputProps={{
                        id: field.name,
                        name: field.name,
                        onBlur: field.handleBlur,
                        "aria-invalid": isInvalid || undefined,
                        placeholder: "Phone*",
                        autoComplete: "tel",
                      }}
                      className={cn(
                        inputStyle,
                        "w-full h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[55px] flex items-center bg-transparent border-b border-black/15 focus-within:border-black pb-1",
                        "[&_.react-international-phone-input]:!border-0 [&_.react-international-phone-input]:!bg-transparent [&_.react-international-phone-input]:flex-1 [&_.react-international-phone-input]:!text-[#875849] [&_.react-international-phone-input]:placeholder:text-[#875849] [&_.react-international-phone-input]:h-[30px] xl:[&_.react-international-phone-input]:h-[35px] 2xl:[&_.react-international-phone-input]:h-[40px] 3xl:[&_.react-international-phone-input]:h-[50px] [&_.react-international-phone-input]:!font-helvetica [&_.react-international-phone-input]:!text-[11px] lg:[&_.react-international-phone-input]:!text-[11.3px] xl:[&_.react-international-phone-input]:!text-[14px] 2xl:[&_.react-international-phone-input]:!text-[15.8px] 3xl:[&_.react-international-phone-input]:!text-[19.2px]",
                        "[&_.react-international-phone-country-selector-button]:!bg-transparent [&_.react-international-phone-country-selector-button]:!border-0 [&_.react-international-phone-country-selector-button]:!p-0 [&_.react-international-phone-country-selector-button]:mr-3 [&_.react-international-phone-country-selector-button]:mb-0 [&_.react-international-phone-country-selector-button-active]:!bg-transparent",
                        "[&_.react-international-phone-country-selector-button\_\_dropdown-arrow]:!border-t-black/60 [&_.react-international-phone-country-selector-button\_\_dropdown-arrow]:border-t-4",
                      )}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            </form.Field>

            <form.Field name="date">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field
                    data-invalid={isInvalid || undefined}
                    className="w-full sm:w-[calc(50%-10px)] xl:w-[calc(50%-15px)] 2xl:w-[calc(50%-17.5px)] 3xl:w-[calc(50%-20px)]"
                  >
                    <FieldLabel className="sr-only" htmlFor={field.name}>
                      Preferred Date*
                    </FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      type="date"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid || undefined}
                      disabled={isSubmitting}
                      className={cn(inputStyle, "w-full")}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            </form.Field>

            <form.Field name="time">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field
                    data-invalid={isInvalid || undefined}
                    className="w-full sm:w-[calc(50%-10px)] xl:w-[calc(50%-15px)] 2xl:w-[calc(50%-17.5px)] 3xl:w-[calc(50%-20px)]"
                  >
                    <FieldLabel className="sr-only" htmlFor={field.name}>
                      Preferred Time*
                    </FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      type="time"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid || undefined}
                      disabled={isSubmitting}
                      className={cn(inputStyle, "w-full")}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            </form.Field>

            <form.Field name="message">
              {(field) => (
                <Field className="w-full">
                  <FieldLabel className="sr-only" htmlFor={field.name}>
                    Message (Optional)
                  </FieldLabel>
                  <textarea
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="Message / Details (Optional)"
                    rows={3}
                    disabled={isSubmitting}
                    className={cn(textareaBase, "w-full")}
                  />
                </Field>
              )}
            </form.Field>

            <div className="w-full">
              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? "Submitting..." : "Confirm Appointment"}
              </Button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
```

## 2. consultation-form.jsx
```jsx
"use client";
import { useCallback, useState } from "react";
import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { z } from "zod";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

import { Field, FieldError, FieldLabel } from "./field";
import { Input, textareaBase } from "../ui/input";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

// Schema for Consultation form
const consultationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  phone: z
    .string()
    .min(10, "Phone number is too short")
    .max(15, "Phone number is too long"),
  message: z.string().optional(),
});

const inputStyle =
  "w-full h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[55px] border-b border-white/40 bg-transparent rounded-none px-0 focus-visible:ring-0 focus-visible:border-white transition-colors font-helvetica text-[11px] lg:text-[11.3px] xl:text-[14px] 2xl:text-[15.8px] 3xl:text-[19.2px] text-white placeholder:text-white/60";

export function ConsultationForm({ handleDialogClose }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validatorAdapter: zodValidator(),
    onSubmit: async ({ value }) => {
      setIsSubmitting(true);
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...value,
            formType: "Consultation",
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to submit");
        }

        setIsSuccess(true);
      } catch (error) {
        console.error("Consultation submission error:", error);
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <div className="w-full bg-[#a14962] p-[20px_25px] sm:p-[32px_34px] xl:p-[42px_44px] 2xl:p-[45px_46px] 3xl:p-[55px_58px]">
      {isSuccess ? (
        <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
          <div className="text-[18px] lg:text-[24px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[40px] leading-normal font-normal font-things text-white">
            Thank You!
          </div>
          <p className="text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-white/80">
            Your consultation request has been received. We will contact you
            shortly.
          </p>
          <Button
            variant="outline"
            onClick={handleDialogClose}
            className="border-white bg-[#a14962] text-white hover:bg-[#7a273f]"
          >
            Close
          </Button>
        </div>
      ) : (
        <>
          <h2 className="text-[18px] sm:text-[24px] md:text-[28px] lg:text-[34px] xl:text-[43.5px] 2xl:text-[47.6px] 3xl:text-[57.8px] leading-tight font-normal font-things text-white mb-[10px] xl:mb-[14px] 2xl:mb-[18px] 3xl:mb-[20px]">
            Book a Free Consultation
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
            className="flex flex-wrap gap-[20px] xl:gap-[40px] 2xl:gap-[43px] 3xl:gap-[53px]"
          >
            <form.Field name="name">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field
                    data-invalid={isInvalid || undefined}
                    className="w-full"
                  >
                    <FieldLabel className="sr-only" htmlFor={field.name}>
                      Name*
                    </FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid || undefined}
                      placeholder="Your Name"
                      autoComplete="name"
                      disabled={isSubmitting}
                      className={cn(inputStyle)}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            </form.Field>

            <form.Field name="email">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field
                    data-invalid={isInvalid || undefined}
                    className="w-full"
                  >
                    <FieldLabel className="sr-only" htmlFor={field.name}>
                      Email
                    </FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      type="email"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid || undefined}
                      placeholder="Your Email"
                      autoComplete="email"
                      disabled={isSubmitting}
                      className={cn(inputStyle)}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            </form.Field>

            <form.Field name="phone">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field
                    data-invalid={isInvalid || undefined}
                    className="w-full"
                  >
                    <FieldLabel className="sr-only" htmlFor={field.name}>
                      Phone*
                    </FieldLabel>
                    <PhoneInput
                      value={field.state.value}
                      onChange={(phone) => field.handleChange(phone)}
                      defaultCountry="ae"
                      disabled={isSubmitting}
                      inputProps={{
                        id: field.name,
                        name: field.name,
                        onBlur: field.handleBlur,
                        "aria-invalid": isInvalid || undefined,
                        placeholder: "Phone*",
                        autoComplete: "tel",
                      }}
                      className={cn(
                        inputStyle,
                        "w-full h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[55px] flex items-center bg-transparent border-b border-white/40 focus-within:border-white pb-1",
                        "[&_.react-international-phone-input]:!border-0 [&_.react-international-phone-input]:!bg-transparent [&_.react-international-phone-input]:flex-1 [&_.react-international-phone-input]:!text-white [&_.react-international-phone-input]:placeholder:text-white/60 [&_.react-international-phone-input]:h-[30px] xl:[&_.react-international-phone-input]:h-[35px] 2xl:[&_.react-international-phone-input]:h-[40px] 3xl:[&_.react-international-phone-input]:h-[50px] [&_.react-international-phone-input]:!font-helvetica [&_.react-international-phone-input]:!text-[11px] lg:[&_.react-international-phone-input]:!text-[11.3px] xl:[&_.react-international-phone-input]:!text-[14px] 2xl:[&_.react-international-phone-input]:!text-[15.8px] 3xl:[&_.react-international-phone-input]:!text-[19.2px]",
                        "[&_.react-international-phone-country-selector-button]:!bg-transparent [&_.react-international-phone-country-selector-button]:!border-0 [&_.react-international-phone-country-selector-button]:!p-0 [&_.react-international-phone-country-selector-button]:mr-3 [&_.react-international-phone-country-selector-button]:mb-0 [&_.react-international-phone-country-selector-button-active]:!bg-transparent",
                        "[&_.react-international-phone-country-selector-button\_\_dropdown-arrow]:!border-t-white/60 [&_.react-international-phone-country-selector-button\_\_dropdown-arrow]:border-t-4",
                      )}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            </form.Field>

            <form.Field name="message">
              {(field) => (
                <Field className="w-full">
                  <FieldLabel className="sr-only" htmlFor={field.name}>
                    Message
                  </FieldLabel>
                  <textarea
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="Message / Treatment Interest*"
                    rows={3}
                    disabled={isSubmitting}
                    className={cn(
                      textareaBase,
                      "border-b border-white/40 focus-visible:border-white text-white placeholder:text-white/60",
                    )}
                  />
                </Field>
              )}
            </form.Field>

            <div className="w-full flex justify-end">
              <Button
                type="submit"
                variant="outline"
                disabled={isSubmitting}
                className="w-full bg-[#fff9eb] text-black border-[#fff9eb] hover:bg-transparent hover:text-white"
              >
                {isSubmitting ? "Submitting..." : "Send Request"}
              </Button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
```

## 3. request-quote-form.jsx
```jsx
"use client";
import { useCallback, useState } from "react";
import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { z } from "zod";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

import { Field, FieldError, FieldLabel } from "./field";
import { Input, textareaBase } from "../ui/input";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

// Schema for Quote form
const quoteSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  phone: z
    .string()
    .min(10, "Phone number is too short")
    .max(15, "Phone number is too long"),
  message: z.string().optional(),
});

const inputStyle =
  "w-full h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[55px] border-b border-black/15 bg-transparent rounded-none px-0 focus-visible:ring-0 focus-visible:border-black transition-colors font-helvetica text-[11px] lg:text-[11.3px] xl:text-[14px] 2xl:text-[15.8px] 3xl:text-[19.2px] text-[#875849] placeholder:text-[#875849]";

export function RequestQuoteForm({ handleDialogClose }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validatorAdapter: zodValidator(),
    onSubmit: async ({ value }) => {
      setIsSubmitting(true);
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...value,
            formType: "Quote Request",
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to submit");
        }

        setIsSuccess(true);
      } catch (error) {
        console.error("Quote request submission error:", error);
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <div className="w-full bg-[#fff9eb] p-[20px_25px] sm:p-[32px_34px] xl:p-[42px_44px] 2xl:p-[45px_46px] 3xl:p-[55px_58px]">
      {isSuccess ? (
        <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
          <div className="text-[18px] lg:text-[24px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[40px] leading-normal font-normal font-things text-[#1f1f1f]">
            Thank You!
          </div>
          <p className="text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-[#1f1f1f]/80 max-w-md">
            Your quote request has been received. We will send you the details shortly.
          </p>
          <Button
            variant="outline"
            onClick={handleDialogClose}
            className="mt-4 border-[#1f1f1f] text-[#1f1f1f] hover:bg-[#1f1f1f] hover:text-white"
          >
            Close
          </Button>
        </div>
      ) : (
        <>
          <h2 className="text-[18px] sm:text-[24px] md:text-[28px] lg:text-[34px] xl:text-[43.5px] 2xl:text-[47.6px] 3xl:text-[57.8px] leading-tight font-normal font-things text-[#1f1f1f] mb-[10px] xl:mb-[14px] 2xl:mb-[18px] 3xl:mb-[20px]">
            Request A Quote
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
            className="flex flex-wrap gap-[20px] xl:gap-[40px] 2xl:gap-[43px] 3xl:gap-[53px]"
          >
            <form.Field name="name">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field
                    data-invalid={isInvalid || undefined}
                    className="w-full"
                  >
                    <FieldLabel className="sr-only" htmlFor={field.name}>
                      Name*
                    </FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid || undefined}
                      placeholder="Your Name"
                      autoComplete="name"
                      disabled={isSubmitting}
                      className={cn(inputStyle)}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            </form.Field>

            <form.Field name="email">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field
                    data-invalid={isInvalid || undefined}
                    className="w-full"
                  >
                    <FieldLabel className="sr-only" htmlFor={field.name}>
                      Email
                    </FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      type="email"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid || undefined}
                      placeholder="Your Email"
                      autoComplete="email"
                      disabled={isSubmitting}
                      className={cn(inputStyle)}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            </form.Field>

            <form.Field name="phone">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field
                    data-invalid={isInvalid || undefined}
                    className="w-full"
                  >
                    <FieldLabel className="sr-only" htmlFor={field.name}>
                      Phone*
                    </FieldLabel>
                    <PhoneInput
                      value={field.state.value}
                      onChange={(phone) => field.handleChange(phone)}
                      defaultCountry="ae"
                      disabled={isSubmitting}
                      inputProps={{
                        id: field.name,
                        name: field.name,
                        onBlur: field.handleBlur,
                        "aria-invalid": isInvalid || undefined,
                        placeholder: "Phone*",
                        autoComplete: "tel",
                      }}
                      className={cn(
                        inputStyle,
                        "w-full h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[55px] flex items-center bg-transparent border-b border-black/15 focus-within:border-black pb-1",
                        "[&_.react-international-phone-input]:!border-0 [&_.react-international-phone-input]:!bg-transparent [&_.react-international-phone-input]:flex-1 [&_.react-international-phone-input]:!text-[#875849] [&_.react-international-phone-input]:placeholder:text-[#875849] [&_.react-international-phone-input]:h-[30px] xl:[&_.react-international-phone-input]:h-[35px] 2xl:[&_.react-international-phone-input]:h-[40px] 3xl:[&_.react-international-phone-input]:h-[50px] [&_.react-international-phone-input]:!font-helvetica [&_.react-international-phone-input]:!text-[11px] lg:[&_.react-international-phone-input]:!text-[11.3px] xl:[&_.react-international-phone-input]:!text-[14px] 2xl:[&_.react-international-phone-input]:!text-[15.8px] 3xl:[&_.react-international-phone-input]:!text-[19.2px]",
                        "[&_.react-international-phone-country-selector-button]:!bg-transparent [&_.react-international-phone-country-selector-button]:!border-0 [&_.react-international-phone-country-selector-button]:!p-0 [&_.react-international-phone-country-selector-button]:mr-3 [&_.react-international-phone-country-selector-button]:mb-0 [&_.react-international-phone-country-selector-button-active]:!bg-transparent",
                        "[&_.react-international-phone-country-selector-button\_\_dropdown-arrow]:!border-t-black/60 [&_.react-international-phone-country-selector-button\_\_dropdown-arrow]:border-t-4",
                      )}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            </form.Field>

            <form.Field name="message">
              {(field) => (
                <Field className="w-full">
                  <FieldLabel className="sr-only" htmlFor={field.name}>
                    Message
                  </FieldLabel>
                  <textarea
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="Message / Treatment Interest*"
                    rows={3}
                    disabled={isSubmitting}
                    className={cn(textareaBase)}
                  />
                </Field>
              )}
            </form.Field>

            <div className="w-full flex items-end">
              <Button type="submit" disabled={isSubmitting} className="w-full bg-[#1f1f1f] text-white hover:bg-[#a14962]">
                {isSubmitting ? "Submitting..." : "Send Inquiry"}
              </Button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
```
