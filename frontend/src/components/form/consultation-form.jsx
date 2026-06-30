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
  DialogClose,
} from "@/components/ui/dialog";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";

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

const inputStyle =
  "text-[#875849] placeholder:text-[#875849] border-black/15 focus:border-black bg-transparent font-helvetica";

const textareaBase =
  "text-[11px] lg:text-[11.3px] xl:text-[14px] 2xl:text-[15.8px] 3xl:text-[19.2px] leading-normal font-normal text-[#875849] placeholder:text-[#875849] w-full bg-transparent border-b border-black/15 focus:outline-none focus:ring-0 focus:border-black disabled:opacity-60 resize-none";

export default function ConsultationForm({
  triggerLabel = "Request a Consultation",
  className,
  children,
  childern,
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [open, setOpen] = useState(false);

  const activeTrigger = children || childern;

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
        {activeTrigger ? (
          activeTrigger
        ) : (
          <Button className={className}>{triggerLabel}</Button>
        )}
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="rounded-none sm:max-w-sm xl:max-w-[705px] 2xl:max-w-[798px] 3xl:max-w-[968px] p-[20px_30px] lg:p-[25px_40px] xl:p-[30px_60px] 2xl:p-[35px_67px] 3xl:p-[40px_80px]"
      >
        <DialogClose asChild>
          <Button
            variant="none"
            size="none"
            type="button"
            className="text-[12px] xl:[&_svg]:size-[25px] absolute top-[15px] xl:top-[24px] 2xl:top-[28px] 3xl:top-[34px] right-[20px] xl:right-[27px] 2xl:right-[31px] 3xl:right-[38px]"
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </Button>
        </DialogClose>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="text-[13px] md:text-[15px] lg:text-[19px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[33px] font-normal leading-normal font-helvetica-light text-[#a14962] mb-1 xl:mb-2.5">
              Form submitted successfully!
            </div>
            <div className="text_3 font-normal font-helvetica-light text-center text-[#515151] mb-2 sm:mb-3 2xl:mb-5 xl:max-w-[480px]">
              Thank you! The form has been submitted successfully. We will reply
              to you soon!
            </div>
            <Button
              className="min-w-[90px] xl:min-w-[100px] 3xl:min-w-[130px]"
              onClick={handleDialogClose}
            >
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-[30px] lg:text-[45px] xl:text-[56px] 2xl:text-[63px] 3xl:text-[77px] leading-tight font-normal font-things text-[#1f1f1f]">
                Request a Consultation
              </DialogTitle>
              <DialogDescription className="sr-only">
                Fill out the form below and we&apos;ll get back to you shortly.
              </DialogDescription>
            </DialogHeader>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                form.handleSubmit();
              }}
              className="flex flex-wrap -mx-2.5 xl:-mx-[10px] 2xl:-mx-[15px] 3xl:-mx-[20px] [&>*]:p-2.5 xl:[&>*]:p-[15px_10px] 2xl:[&>*]:p-[20px_15px] 3xl:[&>*]:p-[25px_20px]"
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
                        placeholder="Name*"
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

              <form.Field name="treatment">
                {(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field
                      data-invalid={isInvalid || undefined}
                      className="w-full sm:w-1/2"
                    >
                      <FieldLabel
                        className="sr-only"
                        htmlFor="treatment-select"
                      >
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
                          className={cn(
                            inputStyle,
                            "[&_svg]:text-black/80 flex items-center justify-between",
                          )}
                        >
                          <SelectValue placeholder="Treatment*" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hair-transplant">
                            Hair Transplant
                          </SelectItem>
                          <SelectItem value="skin-treatment">
                            Skin Treatment
                          </SelectItem>
                          <SelectItem value="dental-care">
                            Dental Care
                          </SelectItem>
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
                      placeholder="Brief Message (optional)"
                      rows={3}
                      disabled={isSubmitting}
                      className={cn(textareaBase)}
                    />
                  </Field>
                )}
              </form.Field>

              <div className="w-full sm:w-1/2 flex items-end">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? "Submitting..." : "Request Free Consultation"}
                </Button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
