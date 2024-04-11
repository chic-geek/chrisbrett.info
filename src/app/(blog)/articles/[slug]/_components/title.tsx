interface TitleProps {
  children: React.ReactNode;
}

export function Title({ children }: TitleProps) {
  return (
    <div className="max-w-4xl text-balance text-4xl font-bold leading-tight tracking-[-0.06rem] text-white md:text-wrap md:text-5xl md:leading-tight">
      {children}
    </div>
  );
}
