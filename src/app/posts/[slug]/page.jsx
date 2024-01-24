import PostHeader from "@/app/components/posts/PostHeader";
import PostBody from "@/app/components/posts/PostBody";
import { client } from "@/app/lib/contentful/client";

const getPost = async (slug) => {
  const res = await client.getEntries({
    content_type: "post",
    "fields.slug": slug,
  });
  return res;
}

const Post = async ({ params }) => {
  const { slug } = params;
  const data = await getPost(slug);

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
