import { ReactNode } from "react";

interface PillarCardProps {
  title: string;
  children: ReactNode;
}

export function PillarCard({ title, children }: PillarCardProps) {
  return (
    <div className="card h-full">
      <h3 className="text-xl font-semibold text-ink mb-4">{title}</h3>
      <div className="space-y-2 text-sm text-ink-muted leading-relaxed">{children}</div>
    </div>
  );
}
