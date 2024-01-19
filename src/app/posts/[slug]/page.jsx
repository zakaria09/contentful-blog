import PostHeader from "@/app/components/posts/PostHeader";
import PostBody from "@/app/components/posts/PostBody";

const getPost = async (slug) => {
  const res = await fetch(`${process.env.API_PATH}/api?slug=${slug}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
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
