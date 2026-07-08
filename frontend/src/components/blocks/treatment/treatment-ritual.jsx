import Link from "next/link";

export default function TreatmentRitual({ data }) {
  return (
    <section className="relative py-[10px_40px] xl:py-[15px_50px] 2xl:py-[20px_60px] 3xl:py-[25px_80px]">
      <div className="container">
        <div className="w-full h-full block bg-[#FFF9EB] p-[30px_15px] lg:p-[40px_20px] xl:p-[45px_30px] 2xl:p-[50px_30px] 3xl:p-[65px_45px]">
          <div className="flex items-center gap-[10px] xl:gap-[25px] max-lg:flex-wrap">
            <div className="w-full lg:w-5/12">
              <div className="w-full">
                <div className="heading_1 mb-[0px]">{data?.title}</div>
              </div>
            </div>

            <div className="w-full lg:w-4/12">
              <div className="text_3 font-helvetica-light mb-0 [&>p]:mb-[0px] lg:pl-[10px]">
                {data?.short_description}
              </div>
            </div>

            <div className="w-full lg:w-3/12 lg:flex lg:justify-end">
              <Link
                href="/enquiry"
                className="group relative overflow-hidden bg-gradient-to-r from-[#A14962] via-[#C16C84] to-[#E9CBA3]
                text-white font-medium inline-flex items-center justify-center
                px-[8px] min-w-[120px] xl:min-w-[150px] 2xl:min-w-[170px] 3xl:min-w-[205px]
                h-[32px] 2xl:h-[37px] 3xl:h-[45px]
                transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.03]
                hover:shadow-[0_15px_40px_rgba(161,73,98,0.35)]"
              >
                <span
                  className="absolute inset-0 -translate-x-full
                  bg-gradient-to-r from-transparent via-white/30 to-transparent
                  skew-x-12 transition-transform duration-700
                  group-hover:translate-x-[250%]"
                />

                <span className="text-[10px] lg:text-[11px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[20px] relative z-10">
                  {data?.button_label}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
