import Link from 'next/link';
import Image from 'next/image';

const PostCard = ({post}: any) => {
  const {title, slug, excerpt, coverImage, author, date} = post.fields;

  console.log(post.fields.author.fields.avatar.fields.file.url);

  return (
    <li className='rounded-md overflow-hidden shadow-md'>
      <Link href={`/posts/${slug}`} aria-label={title}>
        <div className='mb-2'>
          <Image
            alt={`Cover Image for ${title}`}
            src={`https:${coverImage.fields.file.url}`}
            width={coverImage.fields.file.details.image.width}
            height={coverImage.fields.file.details.image.height}
          />
        </div>
        <div className='p-4'>
          <h3 className='text-xl mb-1 leading-snug'>{title}</h3>
          <div className='text-sm mb-4 text-gray-400'>
            <time dateTime={date}>{date}</time>
          </div>
          <p className='text-base mb-4'>{excerpt}</p>
          <div className='flex items-center'>
            <div className='relative w-10 h-10 mr-4'>
              <Image
                src={`https:${author.fields.avatar.fields.file.url}`}
                layout='fill'
                className='rounded-full m-0'
                alt={author.fields.name}
              />
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default PostCard;
