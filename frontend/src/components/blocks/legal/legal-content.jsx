import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";

export default function LegalContent({ data }) {
  const { title, shortDescription, description } = data;

  return (
    <section
      id="LegalContent"
      className="w-full block bg-white py-[15px_50px] lg:py-[20px_60px] xl:py-[25px_70px] 2xl:py-[30px_90px] 3xl:py-[35px_110px] overflow-hidden relative z-0"
    >
      <Image
        src="/images/home-about-elmt-1.svg"
        alt="home about element 1"
        width={300}
        height={300}
        className="w-[100px] sm:w-[140px] xl:w-[180px] 2xl:w-[220px] 3xl:w-[310px] translate-x-1/2 absolute -z-1 top-[4%] right-0"
      />
      <Image
        src="/images/home-about-elmt-2.svg"
        alt="home about element 2"
        width={60}
        height={60}
        className="w-[30px] sm:w-[40px] xl:w-[50px] 2xl:w-[60px] 3xl:w-[100px] absolute -z-1 bottom-[5%] left-0"
      />
      <div className="container">
        <div className="heading_2 text-[#1f1f1f] mb-[10px] 2xl:mb-[15px] 3xl:mb-[20px]">
          {title}
        </div>
        {shortDescription && (
          <p className="text_3 text-[#1f1f1f] mb-[25px] xl:mb-[30px] 2xl:mb-[40px] 3xl:mb-[50px]">
            {shortDescription}
          </p>
        )}
        {description && (
          // <div className="prose prose-sm sm:prose lg:prose-xl xl:prose-2xl 2xl:prose-3xl max-w-none text-[#875849]">
          <div className="prose prose-sm sm:prose lg:prose-xl xl:prose-2xl 2xl:prose-3xl max-w-none text-[#875849]">
            {Array.isArray(description) ? (
              <BlocksRenderer content={description} />
            ) : (
              <p>{description}</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
