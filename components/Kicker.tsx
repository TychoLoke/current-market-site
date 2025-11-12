import { ReactNode } from "react";

interface KickerProps {
  children: ReactNode;
}

export function Kicker({ children }: KickerProps) {
  return <span className="kicker">{children}</span>;
}
