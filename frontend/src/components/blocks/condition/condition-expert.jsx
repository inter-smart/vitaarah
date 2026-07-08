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
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
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
  concern: z.string().min(1, "Please select a concern"),
  message: z.string().optional(),
});

const inputStyle =
  "text-[#875849] placeholder:text-[#875849] border-black/20 focus:border-black";

const textareaBase =
  "text-[11px] lg:text-[11.3px] xl:text-[14px] 2xl:text-[15.8px] 3xl:text-[19.2px] leading-normal font-normal text-[#875849] placeholder:text-[#875849] w-full bg-none border-b border-black/20 focus:outline-none focus:ring-0 focus:border-black disabled:opacity-60 resize-none";

export default function ConditionExpert({ data }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [open, setOpen] = useState(false);

  const form = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      concern: "",
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
            concern: value.concern,
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
    <section className="relative py-[40px] lg:py-[50px] xl:py-[70px] 2xl:py-[85px] 3xl:py-[120px]">
      <div className="container">
        <div className="flex flex-wrap max-lg:gap-[20px]">
          <div className="lg:w-4/12">
            <div className="w-full">
              <div className="heading_1 mb-[15px] xl:mb-[25px] 2xl:mb-[30px] 3xl:mb-[35px]">
                {data.title}
              </div>
              <div className="text_3 font-helvetica-light mb-[25px] xl:mb-[35px] 2xl:mb-[45px] 3xl:mb-[55px]">
                {data?.short_description}
              </div>
              {data?.whatsappUrl && (
                <a
                  href={data?.whatsappUrl || "/"}
                  className="group relative overflow-hidden  bg-gradient-to-r from-[#A14962] via-[#C16C84] to-[#E9CBA3]
                                text-white font-medium flex items-center justify-start gap-[5px] 3xl:gap-[10px] w-fit
                               px-[4px_8px] 3xl:px-[8px] min-w-[120px] xl:min-w-[150px] 2xl:min-w-[170px] 3xl:min-w-[215px] h-[32px] 2xl:h-[37px]
                                3xl:h-[47px]   transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.03] 
                                hover:shadow-[0_15px_40px_rgba(161,73,98,0.35)]"
                >
                  <div
                    className="w-[25px] 2xl:w-[27px] 3xl:w-[35px] h-[25px] 2xl:h-[27px]
                                3xl:h-[35px] flex items-center justify-center bg-[#00A85A] transition-all duration-500 ease-out 
                                "
                    aria-label="Whatsapp"
                  >
                    <div className="w-[15px] 3xl:w-[18px] h-[15px] 3xl:h-[18px] flex">
                      <svg
                        className="w-full h-full"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_2178_7860)">
                          <path
                            d="M12.003 0H11.997C5.3805 0 0 5.382 0 12C0 14.625 0.846 17.058 2.2845 19.0335L0.789 23.4915L5.4015 22.017C7.299 23.274 9.5625 24 12.003 24C18.6195 24 24 18.6165 24 12C24 5.3835 18.6195 0 12.003 0Z"
                            fill="white"
                          />
                          <path
                            d="M18.9848 16.9453C18.6953 17.7628 17.5463 18.4408 16.6298 18.6388C16.0028 18.7723 15.1838 18.8788 12.4268 17.7358C8.90034 16.2748 6.62934 12.6913 6.45234 12.4588C6.28284 12.2263 5.02734 10.5613 5.02734 8.83928C5.02734 7.11728 5.90184 6.27878 6.25434 5.91878C6.54384 5.62328 7.02234 5.48828 7.48134 5.48828C7.62984 5.48828 7.76334 5.49578 7.88334 5.50178C8.23584 5.51678 8.41284 5.53778 8.64534 6.09428C8.93484 6.79178 9.63984 8.51378 9.72384 8.69078C9.80934 8.86778 9.89484 9.10778 9.77484 9.34028C9.66234 9.58028 9.56334 9.68678 9.38634 9.89078C9.20934 10.0948 9.04134 10.2508 8.86434 10.4698C8.70234 10.6603 8.51934 10.8643 8.72334 11.2168C8.92734 11.5618 9.63234 12.7123 10.6703 13.6363C12.0098 14.8288 13.0958 15.2098 13.4843 15.3718C13.7738 15.4918 14.1188 15.4633 14.3303 15.2383C14.5988 14.9488 14.9303 14.4688 15.2678 13.9963C15.5078 13.6573 15.8108 13.6153 16.1288 13.7353C16.4528 13.8478 18.1673 14.6953 18.5198 14.8708C18.8723 15.0478 19.1048 15.1318 19.1903 15.2803C19.2743 15.4288 19.2743 16.1263 18.9848 16.9453Z"
                            fill="#00A85A"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2178_7860">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <span
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r  from-transparent  via-white/30 to-transparent
                                        skew-x-12  transition-transform  duration-700   group-hover:translate-x-[250%] "
                  />
                  <span className="text_3  relative z-10">Whatsapp Now</span>
                </a>
              )}
            </div>
          </div>
          <div className="lg:w-8/12">
            <div className="bg-[#FFF4DE] p-[35px] lg:p-[40px_45px_45px_50px] xl:p-[45px_55px_60px_70px] 2xl:p-[50px_60px_80px_70px] 3xl:p-[65px_75px_100px_85px] lg:max-w-[90%] ml-auto">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
                  <div className="text-[18px] lg:text-[24px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[40px] leading-normal font-normal font-things text-white">
                    Thank You!
                  </div>
                  <p className="text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-white/80">
                    Your consultation request has been received. We will contact
                    you shortly.
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
                          className="w-full sm:w-1/2 flex  "
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
                          className="w-full sm:w-1/2 flex "
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

                  <form.Field name="phone">
                    {(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid;
                      return (
                        <Field
                          data-invalid={isInvalid || undefined}
                          className="w-full sm:w-1/2 flex  justify-end"
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
                              placeholder: "Your Phone Number*",
                              autoComplete: "",
                            }}
                            className="text-[11px] lg:text-[11.3px] xl:text-[14px] 2xl:!text-[15.8px] 3xl:!text-[19.2px] leading-normal !bg-transparent phone-input font-normal text-black placeholder:text-black w-full bg-none border-b border-black/20 focus:outline-none focus:ring-0 focus:border-black disabled:opacity-60 resize-none"
                          />
                          {isInvalid && (
                            <FieldError errors={field.state.meta.errors} />
                          )}
                        </Field>
                      );
                    }}
                  </form.Field>

                  <form.Field name="concern">
                    {(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid;
                      return (
                        <Field
                          data-invalid={isInvalid || undefined}
                          className="w-full sm:w-1/2 flex  "
                        >
                          <FieldLabel
                            className="sr-only"
                            htmlFor="Primary-Concern"
                          >
                            Primary Concern*
                          </FieldLabel>
                          <Select
                            name={field.name}
                            value={field.state.value}
                            onValueChange={field.handleChange}
                            disabled={isSubmitting}
                          >
                            <SelectTrigger
                              id="concern-select"
                              aria-invalid={isInvalid || undefined}
                              className={cn(inputStyle)}
                            >
                              <SelectValue placeholder="Your Primary concern*" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="hair-transplant">
                                Hair Transplant
                              </SelectItem>
                              <SelectItem value="skin-concern">
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
                      <Field className="w-full sm:w-4/7 flex  ">
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

                  <div className="w-full sm:w-3/7 flex items-end">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Request"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
