import Image from "next/image";
import Avatar from "@/app/components/ui/avatar";
import DateComponent from "@/app/components/ui/DateComponent";

const PostHeader = ({ post }) => {
  const { title, coverImage, author, date } = post.fields;

  return (
    <>
      <h2 className='leading-10 text-4xl tracking-wider	capitalize font-black	'>{title}</h2>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <Image
          alt={`Cover Image for ${title}`}
          src={`https://${coverImage.fields.file.url}`}
          width={coverImage.fields.file.details.image.width}
          height={coverImage.fields.file.details.image.height}
          style={{ objectFit: "cover", maxHeight: "28rem" }}
        />
      </div>
      <div className="hidden md:flex md:justify-between md:items-center md:mb-10">
        <Avatar name={author.fields.name} picture={author.fields.avatar} />
        <p>{date}</p>
      </div>
      <div className="flex justify-between items-center md:hidden mb-6">
        <Avatar name={author.fields.name} picture={author.fields.avatar} />
        <DateComponent dateString={date} className="text-sm text-gray-400" />
      </div>
    </>
  );
};

export default PostHeader;
