export function Footer() {
  return (
    <footer className="border-t border-card-border">
      <div className="container flex flex-col gap-4 py-8 text-sm text-ink-muted md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} Current Market — The Brand Intelligence Lab
        </p>
        <p className="flex flex-wrap gap-x-4 gap-y-2">
          <span>Deurne, NL</span>
          <span>Built with Next.js</span>
          <span>Deployed on Vercel</span>
        </p>
      </div>
    </footer>
  );
}
