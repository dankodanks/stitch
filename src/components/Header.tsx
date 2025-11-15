import { ReactNode } from "react";

type HeaderProps = {
  title: string;
  leftAction?: ReactNode;
  rightAction?: ReactNode;
};

export function Header({ title, leftAction, rightAction }: HeaderProps) {
  return (
    <header className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10">
      <div className="flex size-12 shrink-0 items-center justify-start">
        {leftAction}
      </div>
      <h1 className="text-lg font-bold leading-tight tracking-[-0.015em] text-gray-900 dark:text-white flex-1 text-center">
        {title}
      </h1>
      <div className="flex w-12 items-center justify-end">{rightAction}</div>
    </header>
  );
}
