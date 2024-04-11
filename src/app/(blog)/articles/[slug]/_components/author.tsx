import Image from "next/image";

interface AuthorProps {
  author: string;
}

export function Author({ author }: AuthorProps) {
  return (
    <div className="flex items-center gap-x-3">
      <Image
        alt={`${author as string}'s avatar image`}
        src={`/images/avatar-${(author as string).toLocaleLowerCase().split(" ").join("-")}.png`}
        className="inline-block h-8 w-8 rounded-full"
        width={32}
        height={32}
      />
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-gray-300">
          {author as string}
        </span>
      </div>
    </div>
  );
}
