"use client";

import { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { z } from "zod";
import { useSubmitForm } from "@/hooks/useSubmitForm";
import { submitContact } from "@/lib/forms/form-api";
import { sharedNameSchema, sharedPhoneSchema, sharedEmailSchema, sharedMessageSchemaRequired } from "@/lib/forms/validation-schemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FieldGroup,
  Field,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: sharedNameSchema,
  phone: sharedPhoneSchema,
  email: sharedEmailSchema,
  message: sharedMessageSchemaRequired,
});

const inputStyle =
  "text-[#875849] placeholder:text-[#875849] border-black/15 focus:border-black bg-transparent font-helvetica";

const textareaBase =
  "text-[11px] lg:text-[11.3px] xl:text-[14px] 2xl:text-[15.8px] 3xl:text-[19.2px] leading-normal font-normal text-[#875849] placeholder:text-[#875849] w-full bg-transparent border-b border-black/15 focus:outline-none focus:ring-0 focus:border-black disabled:opacity-60 resize-none";

export default function RequestQuoteForm() {
  const form = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      await submit(value);
    },
  });

  const { submit, isSubmitting, isSuccess, error, reset } = useSubmitForm(submitContact, {
    onSuccess: () => {
      form.reset();
    }
  });

  return (
    <div className="w-full bg-[#fff9eb] p-[20px_25px] sm:p-[32px_34px] xl:p-[42px_44px] 2xl:p-[45px_46px] 3xl:p-[55px_58px]">
      {isSuccess ? (
        <div className="flex flex-col items-center justify-center gap-0.1 py-4 text-center">
          <div className="text-[18px] lg:text-[24px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[40px] leading-normal font-normal font-things text-black">
            Thank You!
          </div>
          <p className="text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-black/80">
            Your consultation request has been received. We will contact you
            shortly.
          </p>
          <Button
            variant="outline"
            onClick={reset}
            className="border-white bg-[#a14962] text-white hover:bg-[#7a273f] mt-4"
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
                  (field.state.meta.isTouched || field.form.state.submittedCount > 0) && !field.state.meta.isValid;
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

            <form.Field name="phone">
              {(field) => {
                const isInvalid =
                  (field.state.meta.isTouched || field.form.state.submittedCount > 0) && !field.state.meta.isValid;
                return (
                  <Field
                    data-invalid={isInvalid || undefined}
                    className="w-full"
                  >
                    <FieldLabel className="sr-only" htmlFor={field.name}>
                      Phone*
                    </FieldLabel>
                    <PhoneInput
                      value={field.state.value ?? ""}
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

            <form.Field name="email">
              {(field) => {
                const isInvalid =
                  (field.state.meta.isTouched || field.form.state.submittedCount > 0) && !field.state.meta.isValid;
                return (
                  <Field
                    data-invalid={isInvalid || undefined}
                    className="w-full"
                  >
                    <FieldLabel className="sr-only" htmlFor={field.name}>
                      Email*
                    </FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      type="email"
                      value={field.state.value ?? ""}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid || undefined}
                      placeholder="Your Email*"
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
                    placeholder="Message / Treatment Interest"
                    rows={3}
                    disabled={isSubmitting}
                    className={cn(textareaBase)}
                  />
                </Field>
              )}
            </form.Field>

            <div className="w-full flex flex-col items-end">
              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? "Submitting..." : "Send Inquiry"}
              </Button>
              {error && <div className="text-red-500 text-xs mt-2 w-full text-center">{error}</div>}
            </div>
          </form>
        </>
      )}
    </div>
  );
}
