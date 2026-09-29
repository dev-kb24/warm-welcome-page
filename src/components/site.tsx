import type { ReactNode } from "react";

export function Brackets({ children }: { children: ReactNode }) {
  return (
    <div className="relative px-5 pb-5">
      <span className="pointer-events-none absolute left-[-5px] top-[-20px] h-8 w-8 border-l-5 border-t-5 border-sand" />
      <span className="pointer-events-none absolute right-[-5px]  top-[-20px] h-8 w-8 border-r-5 border-t-5 border-clay" />
      <span className="pointer-events-none absolute bottom-[-5px] left-[-5px] h-8 w-8 border-b-5 border-l-5 border-sand" />
      <span className="pointer-events-none absolute bottom-[-5px] right-[-5px] h-8 w-8 border-b-5 border-r-5 border-clay" />
      {children}
    </div>
  );
}

