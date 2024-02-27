import { CodeExampleItemType } from "@/types";

interface CodeExampleProps {
  data: CodeExampleItemType;
}

export function CodeExample({ data }: CodeExampleProps) {
  const { title, description, urls, tags, icon: Icon } = data;

  return (
    <div className="flex flex-col justify-between gap-y-6 rounded-3xl bg-[rgb(31,32,36)] p-8 focus-within:bg-[rgba(var(--highlight-color),0.15)] hover:bg-[rgba(var(--highlight-color),0.15)]">
      <div className="flex flex-col gap-y-4">
        <h3 className="items-basline flex gap-x-2 text-xl font-semibold leading-tight tracking-[-0.03rem] text-white">
          <Icon
            size={24}
            className="text-[rgb(16,185,129)] [.js-enabled_&]:text-[rgb(var(--highlight-color))]"
          />
          <span>{title}</span>
        </h3>
        <p className="text-[1.05rem] leading-relaxed text-[rgb(230,230,230)]">
          {description}
        </p>
        <ul className="flex flex-wrap gap-2">
          {tags?.map((tag, index) => (
            <li
              key={index}
              className="rounded-md bg-[rgba(75,85,99,0.4)] px-2 py-1 text-xs text-[rgb(230,230,230)]"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <ul className="flex items-center gap-4">
        {Object.entries(urls).map(([key, value], index) => (
          <li key={index}>
            <a
              href={value}
              className="flex items-center gap-x-1 text-lg font-semibold text-[rgb(16,185,129)] underline [.js-enabled_&]:text-[rgb(var(--highlight-color))]"
            >
              {key}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
