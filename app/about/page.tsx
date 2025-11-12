"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Compass, Layers, Brain, Users2, LineChart, Sparkles } from "lucide-react";

import { fadeInUp, stagger } from "@/components/motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const methodSteps = [
  {
    value: "diagnose",
    title: "Diagnose",
    description:
      "We host artifact walkthroughs, stakeholder conversations, and market scans. The output is a clarity map—what’s resonating, what’s missing, and which signals matter most to your buyers and team."
  },
  {
    value: "design",
    title: "Design the narrative system",
    description:
      "Together we craft message architectures, voice principles, and design directions. We prototype real assets early—from sales decks to landing pages—so the story proves itself fast."
  },
  {
    value: "deploy",
    title: "Deploy + measure",
    description:
      "Launch kits, enablement rituals, and analytics dashboards keep momentum alive. We review adoption, iterate on motion, and document learnings so your team can scale the work."
  }
];

const principles = [
  {
    title: "Bias for clarity",
    copy:
      "We translate strategic complexity into language and visuals that executive teams and end users instantly understand.",
    icon: Compass
  },
  {
    title: "Design with data",
    copy:
      "Our creative direction is informed by qualitative interviews, live telemetry, and market proxies—not mood boards alone.",
    icon: LineChart
  },
  {
    title: "Ritualize collaboration",
    copy:
      "Workshops, async critiques, and loom-first reviews keep distributed teams aligned without sacrificing craft.",
    icon: Users2
  },
  {
    title: "Prototype in public",
    copy:
      "We test narratives with your internal champions and trusted customers to gather signal before the big release.",
    icon: Layers
  },
  {
    title: "Capture intelligence",
    copy:
      "Every deliverable comes with reusable templates, AI prompts, and documentation so knowledge compounds over time.",
    icon: Brain
  },
  {
    title: "Deliver resonance",
    copy:
      "Success is when your brand feels unmistakable—from a keynote motion loop to the way support teams explain new features.",
    icon: Sparkles
  }
];

const metrics = [
  {
    label: "Average time-to-clarity",
    unit: "days",
    value: 18
  },
  {
    label: "Adoption uplift",
    unit: "%",
    value: 27
  },
  {
    label: "Content reuse rate",
    unit: "x",
    value: 4
  }
];

function AnimatedNumber({ value }: { value: number }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let frame: number;
    const duration = 1100;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(Math.round(progress * value));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return <span>{display}</span>;
}

export default function AboutPage() {
  return (
    <div className="relative">
      <section className="pt-24">
        <div className="container max-w-4xl space-y-10">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-6">
            <motion.span variants={fadeInUp} className="kicker">
              From studio to lab
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-4xl font-semibold md:text-5xl">
              A practice built for modern brand intelligence
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg leading-relaxed text-ink-muted">
              Current Market began as a small studio translating complex founder stories into launch-ready messaging. Early partners were category-creating MSPs and AI platforms needing narratives that bridged technical depth with human benefit. As stakes grew—boardrooms, analyst briefings, enterprise sales cycles—we realized brands needed more than polished assets. They needed a lab that could digest data, facilitate alignment, and turn insight into motion. We evolved into that lab: a multidisciplinary crew experimenting with research, narrative design, and motion systems so every touchpoint works harder.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section>
        <div className="container max-w-4xl space-y-6">
          <h2 className="text-3xl font-semibold md:text-4xl">The shift</h2>
          <p className="text-lg leading-relaxed text-ink-muted">
            Today’s buyers experience your brand long before they ever meet your team. Algorithms surface your content, communities remix your narrative, and product screenshots travel faster than campaign budgets. That reality demands a different operating system: one where research shapes the story, where narrative frameworks power every touchpoint, and where design expresses measurable intelligence. Current Market builds that system. We connect leadership vision with operator needs, blending qualitative insight and quantitative signal to design stories that scale from investor updates to onboarding flows.
          </p>
        </div>
      </section>

      <section>
        <div className="container space-y-10">
          <div className="max-w-3xl space-y-4">
            <span className="kicker">The Method</span>
            <h2 className="text-3xl font-semibold md:text-4xl">Three movements, one feedback loop</h2>
            <p className="text-base text-ink-muted">
              Each engagement follows a rhythm that keeps strategy, narrative, and experience intertwined. Select a step to see how we move from insight to deployment.
            </p>
          </div>
          <div className="relative grid gap-6 md:grid-cols-[280px_1fr]">
            <div className="relative hidden md:block">
              <div className="absolute left-3 top-2 h-full w-px bg-gradient-to-b from-accent-violet via-accent-red/80 to-accent-violet/40" aria-hidden />
              <ul className="space-y-12 pl-12 text-sm uppercase tracking-[0.3em] text-ink-muted">
                {methodSteps.map((step) => (
                  <li key={step.value}>{step.title}</li>
                ))}
              </ul>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {methodSteps.map((step) => (
                <AccordionItem
                  key={step.value}
                  value={step.value}
                  className="overflow-hidden rounded-2xl border border-card-border bg-card-bg/70"
                >
                  <AccordionTrigger className="px-6 text-lg font-semibold text-ink">
                    {step.title}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-base leading-relaxed text-ink-muted">
                    {step.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section>
        <div className="container space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="kicker">Principles we work by</span>
            <h2 className="text-3xl font-semibold md:text-4xl">Values that anchor every engagement</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {principles.map(({ title, copy, icon: Icon }) => (
              <div
                key={title}
                className="relative overflow-hidden rounded-2xl border border-card-border bg-card-bg/70 p-8 shadow-soft backdrop-blur"
              >
                <div className="absolute inset-0 opacity-[0.05]">
                  <div className="hero-gradient" />
                </div>
                <div className="relative space-y-4">
                  <Icon className="h-7 w-7 text-accent-violet" aria-hidden />
                  <h3 className="text-xl font-semibold text-ink">{title}</h3>
                  <p className="text-sm leading-relaxed text-ink-muted">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container space-y-8">
          <div className="max-w-3xl space-y-4">
            <span className="kicker">The lab in practice</span>
            <h2 className="text-3xl font-semibold md:text-4xl">Momentum you can quantify</h2>
            <p className="text-base text-ink-muted">
              Metrics shift with every engagement, but the trajectory stays consistent: faster clarity, deeper adoption, richer stories.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-card-border bg-card-bg/60 p-6 text-center">
                <div className="text-4xl font-semibold text-ink">
                  <AnimatedNumber value={metric.value} />
                  <span className="ml-1 text-2xl text-ink-muted">{metric.unit}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container space-y-4 rounded-2xl border border-card-border bg-card-bg/70 p-8 md:flex md:items-center md:justify-between">
          <div className="space-y-2">
            <span className="kicker">Press & Speaking</span>
            <p className="text-sm text-ink-muted">
              Recent appearances include Brand Builders Summit, SaaS Motion, and Amsterdam Design Club.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-ink/80">
            <span>Request a keynote</span>
            <span>·</span>
            <span>Download media kit</span>
            <span>·</span>
            <span>press@currentmarketlab.com</span>
          </div>
        </div>
      </section>
    </div>
  );
}
