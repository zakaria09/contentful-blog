import React from 'react';
import {client} from '@/app/lib/contentful/client';
import PostCard from '../components/posts/PostCard';

const getPosts = async () => {
  const res = await client.getEntries({content_type: 'post'});
  return res;
};

const Posts = async () => {
  const posts = await getPosts();
  console.log(posts);

  return (
    <section className='section'>
      <div className='container'>
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10'>
          {posts.items.map((post) => (
            <PostCard key={post.fields.slug} post={post} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Posts;
