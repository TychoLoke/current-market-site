"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fadeInUp, stagger } from "@/components/motion";
import { useAnalytics } from "@/lib/analytics";

const filters = ["All", "Narrative", "Brand Systems", "AI & Content", "MSP"] as const;

type FilterValue = (typeof filters)[number];

type Insight = {
  title: string;
  date: string;
  excerpt: string;
  category: FilterValue;
  body: string;
  pullquote: string;
};

const posts: Insight[] = [
  {
    title: "Narrative > Noise",
    date: "2025-10-01",
    excerpt: "Disciplined storytelling cuts through crowded markets and keeps your buyers engaged.",
    category: "Narrative",
    body:
      "Attention is the currency every team fights for, yet most messaging audits reveal dozens of conflicting promises. The antidote is a narrative spine: a hierarchy of truths, proof, and stories that all teams can reuse. When sales, product, and marketing teams rehearse the same argument, customers feel momentum instead of chaos. This isn’t theory—during a recent repositioning sprint we retired 17 conflicting value props and watched win rates climb within one quarter.",
    pullquote: "Narrative discipline turns every team into a compounding distribution channel."
  },
  {
    title: "Brand Systems for Technical Teams",
    date: "2025-08-12",
    excerpt: "Turn engineering insights into repeatable brand assets that teams actually use.",
    category: "Brand Systems",
    body:
      "Technical founders often underestimate how design systems accelerate credibility. The trick is to translate engineering rigor into a visual and verbal language that feels inevitable. We document components like we document APIs, with changelogs, tokens, and examples that answer the ‘why’ for every choice. The result: product releases feel cohesive, onboarding speeds up, and the brand earns trust inside and out.",
    pullquote: "Design systems behave like internal tooling—they should reduce cognitive load, not add it."
  },
  {
    title: "AI Content that Thinks",
    date: "2025-06-20",
    excerpt: "Design intelligent content frameworks that adapt with every customer interaction.",
    category: "AI & Content",
    body:
      "AI writers are everywhere, yet most outputs still feel generic. The solution is teaching models the same strategic context you expect from a senior writer. We build prompt libraries anchored in narrative pillars, include feedback loops that collect real responses, and train teams to treat AI as a collaborator. When telemetry shows which stories resonate, we update prompts just like product teams update features.",
    pullquote: "AI content becomes valuable when it’s fed the same intelligence your best strategists use."
  },
  {
    title: "MSPs Need Brand Roadmaps Too",
    date: "2025-05-01",
    excerpt: "Service providers win when their positioning evolves alongside their service catalog.",
    category: "MSP",
    body:
      "Managed service providers are experts at operational excellence yet often ignore the brand narrative supporting it. During recent lab engagements we mapped every service ticket, sales deck, and onboarding doc against the promise being made. The insight: customers bought reliability, not features. Rewriting the story around resilience unlocked higher retainers and upsell paths. MSPs that treat brand like an ongoing roadmap, not a one-time refresh, outpace competitors in both NPS and margin.",
    pullquote: "Great MSP brands sell confidence—every process, person, and pixel should reinforce that story."
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
  const [filter, setFilter] = useState<FilterValue>("All");
  const [expanded, setExpanded] = useState<string | null>(null);
  const analytics = useAnalytics();

  const filteredPosts = useMemo(() => {
    if (filter === "All") return posts;
    return posts.filter((post) => post.category === filter);
  }, [filter]);

  const handleSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    analytics.track("subscribe-lab-notes", payload as Record<string, unknown>);
    console.log("Subscribed to Lab Notes", payload);
    event.currentTarget.reset();
  };

  return (
    <div className="relative">
      <section className="pt-24">
        <div className="container space-y-12">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-4xl space-y-6">
            <motion.span variants={fadeInUp} className="kicker">
              Insights
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-4xl font-semibold md:text-5xl">
              Ideas from the lab floor
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-ink-muted">
              Field notes, frameworks, and experiments that shape how we build smarter brands. Filter by focus area or dive into mini essays below.
            </motion.p>
          </motion.div>

          <div className="flex flex-wrap gap-3">
            {filters.map((item) => {
              const active = item === filter;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFilter(item)}
                  className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.3em] transition ${
                    active
                      ? "border-accent-violet bg-accent-violet/20 text-ink"
                      : "border-card-border text-ink-muted hover:text-ink"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>

          <div className="grid gap-6">
            {filteredPosts.map((post) => {
              const isOpen = expanded === post.title;
              return (
                <div
                  key={post.title}
                  className="rounded-2xl border border-card-border bg-card-bg/70 p-6 shadow-soft backdrop-blur"
                >
                  <button
                    type="button"
                    className="flex w-full flex-col gap-4 text-left"
                    onClick={() => setExpanded(isOpen ? null : post.title)}
                  >
                    <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
                      <div className="space-y-2">
                        <div className="text-xs uppercase tracking-[0.3em] text-ink-muted">
                          {formatDate(post.date)} · {post.category}
                        </div>
                        <h2 className="text-2xl font-semibold text-ink">{post.title}</h2>
                        <p className="text-sm text-ink-muted">{post.excerpt}</p>
                      </div>
                      <div className={`self-start text-xs font-semibold uppercase tracking-[0.3em] transition ${isOpen ? "text-accent-violet" : "text-ink-muted"}`}>
                        {isOpen ? "Close" : "Expand"}
                      </div>
                    </div>
                  </button>
                  {isOpen && (
                    <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-muted">
                      <p>{post.body}</p>
                      <blockquote className="border-l-2 border-accent-violet/60 pl-4 italic text-ink">
                        {post.pullquote}
                      </blockquote>
                      <p>
                        If you’d like the full framework or templates mentioned above, reach out to the lab and we’ll share a preview.
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="rounded-2xl border border-card-border bg-gradient-to-br from-accent-violet/15 to-accent-red/15 p-6 md:flex md:items-center md:justify-between">
            <div className="max-w-xl space-y-2">
              <span className="kicker">Subscribe to Lab Notes</span>
              <h2 className="text-2xl font-semibold text-ink">Monthly intelligence, zero fluff</h2>
              <p className="text-sm text-ink-muted">
                Essays, templates, and motion experiments delivered straight from the lab to your inbox.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="mt-4 flex w-full max-w-sm flex-col gap-3 md:mt-0">
              <Input name="email" type="email" placeholder="you@company.com" required />
              <Button type="submit">Get the briefing</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
