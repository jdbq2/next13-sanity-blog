import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";
import BlogList from "@/components/BlogList";
import Head from "next/head";

const query = groq`
  *[_type=='post']{
    ...,
    author->,
    categories[]->
    } | order(_createdAt desc)
`;

const Home = async () => {
  const posts = await client.fetch(query);

  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between py-5  px-10">
      <BlogList posts={posts} />
    </main>
  );
};

export default Home;
