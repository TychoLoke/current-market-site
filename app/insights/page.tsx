import Link from "next/link";
import { Kicker } from "@/components/Kicker";

const posts = [
  {
    title: "Narrative > Noise",
    date: "2025-10-01",
    excerpt: "How disciplined storytelling cuts through crowded markets and keeps your buyers engaged.",
    href: "#"
  },
  {
    title: "Brand Systems for Technical Teams",
    date: "2025-08-12",
    excerpt: "Turning engineering insights into repeatable brand assets that teams actually use.",
    href: "#"
  },
  {
    title: "AI Content that Thinks",
    date: "2025-06-20",
    excerpt: "Designing intelligent content frameworks that adapt with every customer interaction.",
    href: "#"
  }
];

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

export default function InsightsPage() {
  return (
    <section className="pt-20">
      <div className="container space-y-10">
        <div className="max-w-3xl space-y-6">
          <Kicker>Insights</Kicker>
          <h1 className="text-3xl font-semibold text-ink md:text-4xl">Ideas from the Lab</h1>
          <p className="text-ink-muted leading-relaxed">
            Field notes, frameworks, and experiments that shape how we build smarter brands. MDX support is on deck—this layout is ready for it.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.title} href={post.href} className="card flex h-full flex-col justify-between">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
                  {formatDate(post.date)}
                </p>
                <h2 className="text-xl font-semibold text-ink">{post.title}</h2>
                <p className="text-sm text-ink-muted leading-relaxed">{post.excerpt}</p>
              </div>
              <span className="mt-6 text-sm font-semibold text-accent-violet">Read insight →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
