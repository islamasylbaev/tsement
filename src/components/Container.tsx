import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
      <div className="max-w-[1536px] mx-auto px-4">
        {children}
      </div>
  );
};

