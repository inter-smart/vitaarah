import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="w-full flex flex-col justify-center items-center min-h-[75vh] py-10">
      <div className="w-[180px] sm:w-[200px] xl:w-[260px] 2xl:w-[280px] 3xl:w-[340px] relative mx-auto select-none mb-[15px] xl:mb-[20px] 3xl:mb-[30px]">
        <Image
          src="/images/404-img-1.png"
          alt="Ayurvedic mortar and pestle illustration"
          width={340}
          height={272}
          className="w-full h-full object-contain"
        />
      </div>
      <h1 className="text-[26px] sm:text-[36px] lg:text-[44px] xl:text-[58px] 2xl:text-[63px] 3xl:text-[77px] leading-none font-normal text-center  font-things text-[#1f1f1f] mb-[2px] xl:mb-[2px] 2xl:mb-[2px]">
        404
      </h1>
      <div className="text-[13px] md:text-[15px] lg:text-[19px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[33px] font-normal leading-normal font-helvetica text-center text-[#a14962] mb-[15px] xl:mb-[20px] 2xl:mb-[25px]">
        Page Not Found
      </div>
      <Button
        className="w-full max-w-[115px] 2xl:max-w-[125px] 3xl:max-w-[150px] mx-auto"
        asChild
      >
        <Link href="/">Go Home</Link>
      </Button>
    </section>
  );
}
