import {useRouter} from 'next/router';
import PostHeader from '@/app/components/posts/PostHeader';
import PostBody from '@/app/components/posts/PostBody';
import { client } from '../lib/contentful/client';

const getPosts = async (slug) => {
  const res = await client.getEntries({content_type: 'post', 'fields.slug': slug});
  return res;
};

const Post = () => {
  const router = useRouter();
  console.log(router)

  return (
    <section className='section'>
      <div className='container'>
        <article className='prose mx-auto'>
          <h1>Post</h1>
          {/* <PostHeader post={post} />
          <PostBody post={post} /> */}
        </article>
      </div>
    </section>
  );
};

export default Post;
