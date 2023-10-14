import { Metadata, NextPage, ResolvingMetadata } from "next";
import { groq } from "next-sanity";
import React, { cache } from "react";
import { Post } from "../../../types";
import { client } from "../../../sanity/lib/client";
import Image from "next/image";
import urlFor from "@/utils/urlFor";
import PortableText from "react-portable-text";
import { RichTextComponents } from "@/components/RichTextComponents";

interface Props {
  params: {
    postSlug: string;
  };
}

export async function generateMetadata(
  { params: { postSlug } }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const query = groq`
*[_type=='post' && slug.current ==$slug][0]{
    title
  }
`;
  const post: Post = await client.fetch(query, { slug: postSlug });
  return {
    title: post.title,
  };
}

export async function generateStaticParams() {
  const query = groq`
    *[_type=='post']{
      slug
    }
  `;
  const slugs = await client.fetch(query);
  const slugRoutes = slugs.map((slug: any) => slug.slug.current);
  return slugRoutes.map((slug: any) => ({
    postSlug: slug,
  }));
}

const page: NextPage<Props> = async ({ params: { postSlug } }) => {
  const query = groq`
*[_type=='post' && slug.current ==$slug][0]{
  ...,
  author->,
  categories[]->
}
`;
  const post: Post = await client.fetch(query, { slug: postSlug });

  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between py-5 px-10">
      <div className="w-full">
        <hr className="mb-10 border-[#F7AB0A]" />
        <article className="px-10 pb-28">
          <section className="space-y-2 border border-[#F7AB0A] text-white">
            <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
              <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
                <Image
                  className="object-cover object-center mx-auto"
                  src={urlFor(post.mainImage).url()}
                  fill
                  alt={post.author.name}
                />
              </div>
              <section className="p-5 bg-[#F7AB0A] w-full">
                <div className="flex flex-col md:flex-row justify-between gap-y-5">
                  <h1 className="text-4xl font-extrabold">{post.title}</h1>
                  <p>
                    {new Date(post._createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </section>
            </div>
          </section>
          <PortableText content={post.body} serializers={RichTextComponents} />
        </article>
      </div>
    </main>
  );
};

export default page;
