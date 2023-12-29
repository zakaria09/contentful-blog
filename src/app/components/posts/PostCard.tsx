"use client";
import Link from "next/link";
import Image from "next/image";
import Avatar from "../ui/avatar";

const PostCard = ({ post }: any) => {
  const { title, slug, excerpt, coverImage, author, date } = post.fields;

  console.log(author.fields.avatar);

  return (
    <li className="rounded-md overflow-hidden shadow-md">
      <Link href={`/posts/${slug}`} aria-label={title}>
        <div className="mb-2">
          <Image
            style={{ objectFit: "cover", height: "16rem" }}
            alt={`Cover Image for ${title}`}
            src={`https:${coverImage.fields.file.url}`}
            width={coverImage.fields.file.details.image.width}
            height={coverImage.fields.file.details.image.height}
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl mb-1 leading-snug">{title}</h3>
          <div className="text-sm mb-4 text-gray-400">
            <time dateTime={date}>{date}</time>
          </div>
          <p className="text-base mb-4">{excerpt}</p>
          <div className="flex items-center">
            <Avatar
              name={author.fields.name}
              picture={author.fields.avatar}
            />
          </div>
        </div>
      </Link>
    </li>
  );
};

export default PostCard;
