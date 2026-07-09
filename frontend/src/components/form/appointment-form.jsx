"use client";

import { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { z } from "zod";
import { useSubmitForm } from "@/hooks/useSubmitForm";
import { submitAppointment } from "@/lib/forms/form-api";
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

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^[+]?[\d\s()-]{7,20}$/, "Please enter a valid phone number"),
  treatment: z.string().min(1, "Please select a treatment"),
});

// const inputStyle = cn("w-full bg-none border-");

export default function AppointmentForm() {
  const form = useForm({
    defaultValues: {
      name: "",
      phone: "",
      treatment: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      await submit(value);
    },
  });

  const { submit, isSubmitting, isSuccess, error, reset } = useSubmitForm(
    submitAppointment,
    {
      onSuccess: () => {
        form.reset();
      },
    },
  );

  if (isSuccess) {
    return (
      <div className="w-full bg-[#a14962] p-[15px] sm:p-[23px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[40px]">
        <div className="flex flex-col items-center justify-center gap-4 text-center py-8">
          <div className="text-[18px] lg:text-[24px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[40px] leading-normal font-normal font-things text-white">
            Thank You!
          </div>
          <div className="text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-white/80">
            Your consultation request has been received. We will contact you
            shortly.
          </div>
          <button
            type="button"
            onClick={reset}
            className="text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-white underline mt-4"
          >
            Book Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#a14962] p-[15px_20px] sm:p-[20px_32px] xl:p-[25px_40px] 2xl:p-[28px_48px] 3xl:p-[34px_54px]">
      <div className="flex flex-col sm:flex-row flex-wrap sm:items-center gap-y-2.5 gap-x-[20px] sm:gap-x-[40px] xl:gap-x-[80px] 2xl:gap-x-[91px] 3xl:gap-x-[110px]">
        <div className="flex-none text-[20px] lg:text-[28.3px] xl:text-[35px] 2xl:text-[39.7px] 3xl:text-[48.1px] leading-normal font-normal font-things text-white">
          Appointment
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
          className="flex-auto"
        >
          <FieldGroup className="flex-col sm:flex-row sm:items-center gap-x-[15px] sm:gap-x-[20px] xl:gap-x-[24px] 2xl:gap-x-[27px] 3xl:gap-x-[32px]">
            <form.Field name="name">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field
                    data-invalid={isInvalid || undefined}
                    className="flex-1 sm:flex-1"
                  >
                    <FieldLabel htmlFor={field.name} className="sr-only">
                      Name*
                    </FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid || undefined}
                      placeholder="Name*"
                      autoComplete="name"
                      disabled={isSubmitting}
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
                    className="flex-1 sm:flex-1"
                  >
                    <FieldLabel htmlFor={field.name} className="sr-only">
                      Phone*
                    </FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      type="tel"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid || undefined}
                      placeholder="Phone*"
                      autoComplete="tel"
                      disabled={isSubmitting}
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
                    className="flex-1 sm:flex-1"
                  >
                    <FieldLabel htmlFor="treatment-select" className="sr-only">
                      Email*
                    </FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      type="email"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid || undefined}
                      placeholder="Email*"
                      autoComplete="email"
                      disabled={isSubmitting}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            </form.Field>

            <div className="w-auto shrink-0 flex-col min-w-[120px] sm:min-w-[140px] 2xl:min-w-[160px] 3xl:w-[194px]">
              <Button
                type="submit"
                variant="outline"
                disabled={isSubmitting}
                className="w-full border-white bg-[#a14962] text-white hover:bg-[#7a273f]"
              >
                {isSubmitting ? "Submitting..." : "Book Consultation"}
              </Button>
              {error && (
                <div className="text-white text-xs mt-2 text-center">
                  {error}
                </div>
              )}
            </div>
          </FieldGroup>
        </form>
      </div>
    </div>
  );
}
