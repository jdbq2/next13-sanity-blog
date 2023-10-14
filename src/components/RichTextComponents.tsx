import Image from "next/image";
import Link from "next/link";
import urlFor from "@/utils/urlFor";

export const RichTextComponents = {
  h2: ({ children }: any) => (
    <h2 className="text-4xl py-10 font-bold underline decoration-[#F7AB0A]">
      {children}
    </h2>
  ),
  normal: ({ children }: any) => (
    <h2 className="text-md  text-gray-800">{children}</h2>
  ),
};
