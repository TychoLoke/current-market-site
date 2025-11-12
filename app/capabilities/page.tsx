import { Kicker } from "@/components/Kicker";
import { PillarCard } from "@/components/PillarCard";

export default function CapabilitiesPage() {
  return (
    <section className="pt-20">
      <div className="container space-y-10">
        <div className="max-w-3xl space-y-6">
          <Kicker>Capabilities</Kicker>
          <h1 className="text-3xl font-semibold text-ink md:text-4xl">Strategy · Narrative · Design</h1>
          <p className="text-ink-muted leading-relaxed">
            We organize our lab around three pillars that keep your message aligned from insight to execution. Each pillar is modular so we can integrate with your internal teams or operate as an external partner.
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
  );
}
