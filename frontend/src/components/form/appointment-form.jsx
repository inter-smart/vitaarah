"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

const inputBase =
  "text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] leading-none font-normal text-white placeholder:text-white/60 w-full h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[55px] bg-white/10 border border-white/20 rounded-[6px] 3xl:rounded-[9px] px-4 focus:outline-none focus:ring-0 focus:border-white";

const errorClass =
  "text-[10px] xl:text-[11px] 3xl:text-[12px] leading-normal font-normal text-red-300 mt-1";

export default function AppointmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      treatment: "",
    },
  });

  async function onSubmit(data) {
    setIsSubmitting(true);
    try {
      const payload = {
        data: {
          name: data.name,
          phone: data.phone,
          treatment: data.treatment,
        },
      };
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/appointments`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error("Appointment submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

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
            onClick={() => setIsSuccess(false)}
            className="text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-white underline mt-4"
          >
            Book Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#a14962] p-[15px] sm:p-[23px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[40px]">
      <div className="mb-5 xl:mb-6 2xl:mb-7 3xl:mb-9">
        <div className="text-[20px] lg:text-[28.3px] xl:text-[35px] 2xl:text-[39.7px] 3xl:text-[48.1px] leading-normal font-normal font-things text-white">
          Appointment
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 xl:gap-5 2xl:gap-6 3xl:gap-8">
        <div>
          <input
            {...register("name", { required: "Name is required" })}
            placeholder="Name*"
            className={inputBase}
            disabled={isSubmitting}
          />
          {errors.name && <div className={errorClass}>{errors.name.message}</div>}
        </div>

        <div>
          <input
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[+]?[\d\s()-]{7,20}$/,
                message: "Please enter a valid phone number",
              },
            })}
            placeholder="Phone*"
            type="tel"
            className={inputBase}
            disabled={isSubmitting}
          />
          {errors.phone && <div className={errorClass}>{errors.phone.message}</div>}
        </div>

        <div>
          <select
            {...register("treatment", { required: "Please select a treatment" })}
            className={inputBase}
            disabled={isSubmitting}
          >
            <option value="" disabled className="text-black">
              Treatment Interest*
            </option>
            <option value="hair-transplant" className="text-black">
              Hair Transplant
            </option>
            <option value="skin-treatment" className="text-black">
              Skin Treatment
            </option>
            <option value="dental-care" className="text-black">
              Dental Care
            </option>
            <option value="laser-therapy" className="text-black">
              Laser Therapy
            </option>
            <option value="other" className="text-black">
              Other
            </option>
          </select>
          {errors.treatment && (
            <div className={errorClass}>{errors.treatment.message}</div>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] leading-none font-helvetica font-normal text-center text-white bg-linear-to-l from-[#e9cba3] to-[#623628] h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[55px] px-4 rounded-[6px] 3xl:rounded-[9px] mt-2 transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {isSubmitting ? "Submitting..." : "Book Consultation"}
        </button>
      </form>
    </div>
  );
}
