import { Kicker } from "@/components/Kicker";

export default function AboutPage() {
  return (
    <section className="pt-20">
      <div className="container max-w-3xl space-y-6">
        <Kicker>About</Kicker>
        <h1 className="text-3xl font-semibold text-ink md:text-4xl">From studio to lab</h1>
        <p className="text-ink-muted leading-relaxed">
          Current Market began as a boutique studio helping founders articulate their value. As our partners grew more complex, so did the stakes. We shifted into a lab mindset—combining research sprints, market intelligence, and rapid storytelling to meet executive expectations.
        </p>
        <p className="text-ink-muted leading-relaxed">
          Today we build measurable messaging systems, design intentional visual languages, and prototype adaptive brand experiences. Every engagement blends rigor with creativity so your market can feel the intelligence behind the work.
        </p>
      </div>
    </section>
  );
}
