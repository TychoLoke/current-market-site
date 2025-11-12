import Link from "next/link";
import { Kicker } from "@/components/Kicker";
import { PillarCard } from "@/components/PillarCard";

export default function HomePage() {
  return (
    <>
      <section className="pt-20">
        <div className="container flex flex-col gap-10 md:flex-row md:items-center">
          <div className="flex-1 space-y-6">
            <Kicker>Current Market</Kicker>
            <h1 className="text-4xl font-bold leading-tight text-ink md:text-5xl">
              The <span className="bg-gradient-to-r from-accent-violet to-accent-red bg-clip-text text-transparent">Brand Intelligence Lab</span>
            </h1>
            <p className="max-w-2xl text-lg text-ink-muted leading-relaxed">
              We help technology brands, MSPs, and thought leaders turn complex ideas into clear, high-performing narratives—combining strategy, story, and design.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/capabilities" className="button-primary">
                Explore capabilities
              </Link>
              <Link href="/contact" className="button-secondary">
                Start a project
              </Link>
            </div>
          </div>
          <div className="flex-1 space-y-4 text-ink-muted text-sm leading-relaxed">
            <p>
              Current Market pairs qualitative insight with creative execution. From market research to final design systems, we craft clarity that earns attention.
            </p>
            <p>
              Our lab model blends strategic rigor with iterative experimentation—delivering narratives and experiences that scale with your go-to-market goals.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container space-y-8">
          <div className="flex flex-col gap-2">
            <Kicker>Capabilities</Kicker>
            <h2 className="text-3xl font-semibold text-ink md:text-4xl">Strategy, narrative, and design working as one</h2>
            <p className="text-ink-muted max-w-2xl">
              Each engagement is anchored in research, infused with creative intelligence, and built for measurable impact.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <PillarCard title="Brand Strategy & Positioning">
              <ul className="space-y-2">
                <li>Identity systems</li>
                <li>Market &amp; competitor analysis</li>
                <li>Positioning statements</li>
                <li>Tone of voice</li>
              </ul>
            </PillarCard>
            <PillarCard title="Narrative Intelligence">
              <ul className="space-y-2">
                <li>Messaging blueprints</li>
                <li>AI content frameworks</li>
                <li>Thought-leadership ghostwriting</li>
                <li>Story architecture</li>
              </ul>
            </PillarCard>
            <PillarCard title="Design & Experience">
              <ul className="space-y-2">
                <li>Brand systems &amp; style guides</li>
                <li>Modern web design (Next.js/Webflow)</li>
                <li>Keynote &amp; campaign visuals</li>
                <li>Content dashboards</li>
              </ul>
            </PillarCard>
          </div>
        </div>
      </section>
    </>
  );
}
