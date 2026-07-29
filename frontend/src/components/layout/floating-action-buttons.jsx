import Image from "next/image";
import ConsultationForm from "../form/consultation-form";

export default function FloatingActionButtons({
  supportPhone,
  supportWhatsapp,
}) {
  return (
    <div className="fixed right-[2%] top-1/2 -translate-y-1/2 z-10 flex flex-col gap-[5.6px] 2xl:gap-[6.3px] 3xl:gap-[7.7px]">
      {/* Call Button */}
      {supportPhone && (
        <a
          href={`tel:${supportPhone.replace(/\s+/g, "")}`}
          className="size-[28px] xl:size-[32px] 2xl:size-[36px] 3xl:size-[44px] aspect-square bg-[#a14962] hover:-translate-x-0.5 transition-all duration-300 shadow-md"
          aria-label="Call us"
        >
          <Image
            src="/images/float-1.svg"
            alt="Call icon"
            width={24}
            height={24}
            className="w-full h-full object-contain block"
          />
        </a>
      )}

      {/* WhatsApp Button */}
      {supportWhatsapp && (
        <a
          href={`https://wa.me/${supportWhatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="size-[28px] xl:size-[32px] 2xl:size-[36px] 3xl:size-[44px] aspect-square bg-[#a14962] hover:-translate-x-0.5 transition-all duration-300 shadow-md"
          aria-label="Chat on WhatsApp"
        >
          <Image
            src="/images/float-2.svg"
            alt="WhatsApp icon"
            width={24}
            height={24}
            className="w-full h-full object-contain block"
          />
        </a>
      )}

      <ConsultationForm>
        <div
          style={{ writingMode: "sideways-lr" }}
          className="text-[12px] lg:text-[11.3px] xl:text-[14px] 2xl:text-[15.8px] 3xl:text-[19.2px] leading-none font-helvetica text-white w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[44px] h-[85px] xl:h-[105px] 2xl:h-[119px] 3xl:h-[145px] bg-[#a14962] hover:-translate-x-0.5 transition-all duration-300 shadow-md select-none whitespace-nowrap flex items-center justify-center"
        >
          Book Now
        </div>
      </ConsultationForm>
    </div>
  );
}
