import React from "react";
import { client } from "@/app/lib/contentful/client";
import PostCard from "../components/posts/PostCard";
import sectionImage from "../components/ui/sectionImage";
import image2 from "../../../public/IMG_7529.JPG";

const getPosts = async () => {
  return await client.getEntries({ content_type: "post" });
};

const Posts = async () => {
  const posts = await getPosts();

  return (
    <section className="section">
      <div className="container">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10">
          {posts.items.map((post) => (
            <PostCard key={post.fields.slug} post={post} />
          ))}
        </ul>
      </div>
      <sectionImage img={image2} reverse={false} bgColor="" />
    </section>
  );
};

export default Posts;
