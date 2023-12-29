"use client";
import { usePathname } from "next/navigation";
import PostHeader from "@/app/components/posts/PostHeader";
import PostBody from "@/app/components/posts/PostBody";
import useSWR from 'swr'
import axios from "axios";

const fetcher = (url) => axios.get(url).then(res => {
  return res.data
})

const Post = () => {
  const pathname = usePathname();
  const paths = pathname.split("/");
  const slug = paths[paths.length - 1]
  const { data, error, isLoading } = useSWR(`/api?slug=${slug}`, fetcher);

  if (isLoading) return <p>Loading...</p>

  return (
    <section>
      <div className="container">
        <article className="prose mx-auto">
          {data.items.map((post) => (
            <div key={post.sys.id}>
              <PostHeader post={post} />
              <PostBody post={post} />
            </div>
          ))}
        </article>
      </div>
    </section>
  );
};

export default Post;
