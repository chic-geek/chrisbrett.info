interface DescriptionProps {
  children: React.ReactNode;
}

export function Description({ children }: DescriptionProps) {
  return <p className="max-w-[65ch] text-lg text-gray-500">{children}</p>;
}
