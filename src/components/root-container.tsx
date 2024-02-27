"use client";

import { useEffect, useState } from "react";

import { cn, getRandomColor } from "@/utils";

interface RootContainerProps {
  children?: React.ReactNode;
}

export function RootContainer({ children }: RootContainerProps) {
  const [jsEnabled, setJsEnabled] = useState<boolean>(false);

  const setRandomColor = () => {
    const randomColor = getRandomColor();

    document.documentElement.style.setProperty(
      "--highlight-color",
      randomColor,
    );
  };

  useEffect(() => {
    setRandomColor();
  }, []);

  useEffect(() => {
    setJsEnabled(true);
  }, []);

  return (
    <div
      id="root-container"
      className={cn("px-8 md:px-16", jsEnabled ? "js-enabled" : "")}
    >
      {children}
    </div>
  );
}
