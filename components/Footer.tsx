export function Footer() {
  return (
    <footer className="border-t border-card-border bg-background/80">
      <div className="container flex flex-col gap-6 py-10 text-sm text-ink-muted md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em]">Current Market</p>
          <p className="text-base text-ink">Where creativity meets intelligence.</p>
          <p>© {new Date().getFullYear()} Current Market — Deurne, NL</p>
        </div>
        <div className="flex flex-col items-start gap-2 text-xs uppercase tracking-[0.25em] md:items-end">
          <span>Built with Next.js · Hosted on Vercel</span>
          <span>hello@currentmarketlab.com</span>
        </div>
      </div>
    </footer>
  );
}
