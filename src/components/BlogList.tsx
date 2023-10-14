import React, { FC } from "react";
import { Post } from "../../types";
import Image from "next/image";
import urlFor from "@/utils/urlFor";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

interface Props {
  posts: Post[];
}

const BlogList: FC<Props> = ({ posts }) => {
  return (
    <div className="w-full">
      <hr className="mb-10 border-[#F7AB0A]" />
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {posts.map((post) => {
          return (
            <Link href={`/${post.slug.current}`} key={post._id}>
              <div className="flex flex-col group cursor-pointer">
                <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration 200 ease-out">
                  <Image
                    src={urlFor(post.mainImage).width(600).height(400).url()}
                    className="object-cover object-left lg:object-center"
                    alt={post.author.name}
                    fill
                  />
                  <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                    <div>
                      <p className="font-bold">{post.title}</p>
                      <p>
                        {new Date(post._createdAt).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                      {post.categories.map((category) => {
                        return (
                          <div
                            key={category._id}
                            className="bg-[#F7AB0A] text-center text-black px-3 py-1 rounded-full text-sm font-semibold"
                          >
                            <p>{category.title}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex-1">
                  <p className="underline text-lg font-bold">{post.title}</p>
                </div>
                <p className="flex flex-row items-center">
                  Read Post
                  <ArrowUpRightIcon className="ml-2 h-4 w-4" />{" "}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;
