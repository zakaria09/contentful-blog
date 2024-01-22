import React from "react";
import { client } from "@/app/lib/contentful/client";
import PostCard from "../components/posts/PostCard";

const getPosts = async () => {
  return await client.getEntries({ content_type: "post" });
};

const Posts = async () => {
  const posts = await getPosts();

  return (
    <section className="section py-12">
      <div className="container">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.items.map((post) => (
            <PostCard key={post.fields.slug} post={post} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Posts;
