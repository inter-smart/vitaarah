"use client";

import { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  FieldGroup,
  Field,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^[+]?[\d\s()-]{7,20}$/, "Please enter a valid phone number"),
  email: z
    .string()
    .email("Please enter a valid email")
    .optional()
    .or(z.literal("")),
  treatment: z.string().min(1, "Please select a treatment"),
  message: z.string().optional(),
});

const inputStyle = "text-black placeholder:text-black border-black/20 focus:border-black";

const textareaBase =
  "text-[11px] lg:text-[11.3px] xl:text-[14px] 2xl:text-[15.8px] 3xl:text-[19.2px] leading-normal font-normal text-black placeholder:text-black w-full bg-none border-b border-black/20 focus:outline-none focus:ring-0 focus:border-black disabled:opacity-60 resize-none";

export default function ConsultationForm({
  triggerLabel = "Request a Consultation",
  className,
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [open, setOpen] = useState(false);

  const form = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      treatment: "",
      message: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      setIsSubmitting(true);
      try {
        const payload = {
          data: {
            name: value.name,
            phone: value.phone,
            email: value.email || undefined,
            treatment: value.treatment,
            message: value.message || undefined,
          },
        };
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/consultations`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          },
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        setIsSuccess(true);
        form.reset();
      } catch (error) {
        console.error("Consultation submission error:", error);
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  const handleDialogClose = () => {
    setOpen(false);
    setTimeout(() => {
      setIsSuccess(false);
      form.reset();
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={className}>{triggerLabel}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm xl:max-w-[705px] 2xl:max-w-[798px] 3xl:max-w-[968px] p-[20px_30px] lg:p-[25px_40px] xl:p-[30px_60px] 2xl:p-[35px_67] 3xl:p-[40px_80px]">
        <DialogHeader>
          <DialogTitle className="text-[32px] lg:text-[56.7px] xl:text-[56px] 2xl:text-[65.5px] 3xl:text-[77px] leading-tight font-normal font-things text-[#1f1f1f]">
            Request a Consultation
          </DialogTitle>
          <DialogDescription className="sr-only">
            Fill out the form below and we&apos;ll get back to you shortly.
          </DialogDescription>
        </DialogHeader>

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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
            className="flex flex-wrap -mx-4 xl:-mx-5 2xl:-mx-6 3xl:-mx-8 [&>*]:p-4 xl:[&>*]:p-5 2xl:[&>*]:p-6 3xl:[&>*]:p-8"
          >
            <form.Field name="name">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field
                    data-invalid={isInvalid || undefined}
                    className="w-full sm:w-1/2"
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
                    className="w-full sm:w-1/2"
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
                    className="w-full sm:w-1/2"
                  >
                    <FieldLabel className="sr-only" htmlFor={field.name}>
                      Phone*
                    </FieldLabel>
                    <PhoneInput
                      value={field.state.value}
                      onChange={(phone) => field.handleChange(phone)}
                      defaultCountry="us"
                      disabled={isSubmitting}
                      inputProps={{
                        id: field.name,
                        name: field.name,
                        onBlur: field.handleBlur,
                        "aria-invalid": isInvalid || undefined,
                        placeholder: "Your Phone Number",
                        autoComplete: "tel",
                      }}
                      className={cn(inputStyle)}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            </form.Field>

            <form.Field name="treatment">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field
                    data-invalid={isInvalid || undefined}
                    className="w-full sm:w-1/2"
                  >
                    <FieldLabel className="sr-only" htmlFor="treatment-select">
                      Treatment Interest*
                    </FieldLabel>
                    <Select
                      name={field.name}
                      value={field.state.value}
                      onValueChange={field.handleChange}
                      disabled={isSubmitting}
                    >
                      <SelectTrigger
                        id="treatment-select"
                        aria-invalid={isInvalid || undefined}
                        className={cn(inputStyle)}
                      >
                        <SelectValue placeholder="Select a treatment" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hair-transplant">
                          Hair Transplant
                        </SelectItem>
                        <SelectItem value="skin-treatment">
                          Skin Treatment
                        </SelectItem>
                        <SelectItem value="dental-care">Dental Care</SelectItem>
                        <SelectItem value="laser-therapy">
                          Laser Therapy
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            </form.Field>

            <form.Field name="message">
              {(field) => (
                <Field className="w-full sm:w-1/2">
                  <FieldLabel className="sr-only" htmlFor={field.name}>
                    Message
                  </FieldLabel>
                  <textarea
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="Any specific concerns or questions..."
                    rows={3}
                    disabled={isSubmitting}
                    className={cn(textareaBase)}
                  />
                </Field>
              )}
            </form.Field>

            <div className="w-full sm:w-1/2 flex items-end">
              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
