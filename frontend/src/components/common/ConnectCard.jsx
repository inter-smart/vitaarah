import Image from "next/image";
import Link from "next/link";

export default function ConnectCard({
  url,
  alternativeText,
  label,
  linkUrl,
  content,
}) {
  return (
    <div className="flex gap-2">
      <div className="w-[30px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
        <Image
          src={url}
          alt={alternativeText}
          width={48}
          height={48}
          className="w-full h-full block"
        />
      </div>
      <div>
        <div className="text_3">{label}</div>
        <Link href={linkUrl} className="text_3">
          {content}
        </Link>
      </div>
    </div>
  );
}
