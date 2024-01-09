import { CodeExampleItemType } from ".";

type CodeExampleListItemProps = {
  example: CodeExampleItemType;
};

export default function CodeExampleListItem({ example }: CodeExampleListItemProps) {
  const { title, description, urls, } = example;
  
  return (
    <div className="code-examples-item">
      <div>
        <h3 className="code-examples-item-title">{title}</h3>
        <p className="code-examples-item-desc">{description}</p>
      </div>
      <ul className="naked-list flex gap-md code-examples-item-links">
        {Object.entries(urls).map(([key, value], index) => (
          <li key={index}>
            <a className="flex alignItems-center gap-xs" href={value}>
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