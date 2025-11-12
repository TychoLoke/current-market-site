"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { Sparkles, Target, Workflow, Rocket } from "lucide-react";

import { fadeInUp, stagger } from "@/components/motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const capabilityTabs = [
  {
    value: "strategy",
    title: "Strategy",
    intro:
      "We embed with leadership to map the levers that truly move your market. Over a focused sprint we synthesize customer truth, revenue data, and product vision into a strategy narrative that your entire org can act on. The result is a decision framework that untangles positioning, pricing, and prioritization so your next phase of growth feels intentional, not reactive.",
    deliverables: [
      {
        title: "Leadership alignment workshop",
        copy: "Executive session aligning on ambition, differentiation, and decision criteria."
      },
      {
        title: "Narrative market model",
        copy: "Scenario planning across ICPs with proof points and counter-narratives documented."
      },
      {
        title: "Strategic scorecard",
        copy: "A dashboard of leading signals tying brand and revenue metrics together."
      }
    ],
    stages: [
      {
        title: "Listen & surface signals",
        description:
          "Interviews, product walkthroughs, and competitive reviews expose tensions between your promise and perception."
      },
      {
        title: "Frame the bet",
        description:
          "We model positioning territories and stress-test them with GTM data and leadership conviction."
      },
      {
        title: "Codify the system",
        description:
          "Strategy narratives, decision guardrails, and playbooks keep momentum across marketing, product, and success."
      }
    ],
    comparison: {
      before: [
        "Fragmented decision-making",
        "Reactive pricing shifts",
        "Teams guessing at narrative"
      ],
      after: [
        "Shared market thesis",
        "Purposeful monetization strategy",
        "Narrative everyone can sell"
      ]
    },
    result: "Outcome: a strategy people rally behind, with measurable confidence in every launch."
  },
  {
    value: "narrative",
    title: "Narrative",
    intro:
      "Narrative Intelligence engagements turn disparate content into a cohesive system. We uncover the core argument your product is making, then build message architectures, editorial cadences, and enablement kits that let every team speak the same language. Expect new rituals—weekly narrative standups, AI-augmented content ops, and measurement loops that show what stories are landing where.",
    deliverables: [
      {
        title: "Message operating system",
        copy: "Modular hierarchy covering vision, pillars, proof, and objection handling."
      },
      {
        title: "Editorial runway",
        copy: "Six to eight-week content calendar mapped to channels, voices, and assets."
      },
      {
        title: "Enablement kit",
        copy: "Workshop decks, Loom scripts, and AI prompts to activate teams quickly."
      }
    ],
    stages: [
      {
        title: "Audit every touchpoint",
        description:
          "We review decks, docs, support macros, and community posts to understand current narrative drift."
      },
      {
        title: "Engineer the arc",
        description:
          "Narrative pillars, proof libraries, and storytelling formats show how to ladder value across the funnel."
      },
      {
        title: "Activate & adapt",
        description:
          "Training, scorecards, and quarterly refreshes keep the story alive while capturing new signals."
      }
    ],
    comparison: {
      before: [
        "Content competing for attention",
        "Inconsistent founder voice",
        "Sales decks rewritten weekly"
      ],
      after: [
        "Narrative map for every team",
        "Consistent voice with room for nuance",
        "Reusable story blocks accelerating deals"
      ]
    },
    result: "Outcome: a narrative system that compounds reach while feeling unmistakably yours."
  },
  {
    value: "design",
    title: "Design",
    intro:
      "Design intelligence means your brand shows up with conviction everywhere—from landing pages to live product tours. We pair exploratory moodfields with motion studies, then build the systems that let internal teams ship fast without losing fidelity. Expect new interaction patterns, component libraries, and launch kits ready for marketing, product, and revenue teams alike.",
    deliverables: [
      {
        title: "Visual & motion language",
        copy: "Explorations defining typography, color, iconography, and motion cues."
      },
      {
        title: "Interface & site system",
        copy: "Figma + Next.js ready component library for marketing and product experiences."
      },
      {
        title: "Launch collateral",
        copy: "Campaign assets, keynote frameworks, and social toolkits built from the new system."
      }
    ],
    stages: [
      {
        title: "Discover the aesthetic gap",
        description:
          "Inspiration boards, competitive scans, and team interviews reveal the feelings the brand must evoke."
      },
      {
        title: "Prototype the system",
        description:
          "Motion tests, responsive layouts, and component inventories show how the brand flexes in real scenarios."
      },
      {
        title: "Ship & socialize",
        description:
          "Documentation, async walkthroughs, and tooling handoffs keep teams shipping with confidence."
      }
    ],
    comparison: {
      before: [
        "Static guidelines",
        "Teams rebuilding components",
        "Inconsistent launch visuals"
      ],
      after: [
        "Living design system",
        "Shared libraries across squads",
        "Motion-rich launches aligned to strategy"
      ]
    },
    result: "Outcome: a brand experience that feels orchestrated, not improvised."
  }
];

const engagementModels = [
  {
    title: "Sprint",
    timeline: "2–3 weeks",
    scope: "Focused immersion tackling a single priority—positioning reset, message operating system, or launch design.",
    outcomes: [
      "Dedicated lab pod",
      "Clear roadmap + deliverables",
      "Executive playback session"
    ],
    investment: "Investment: €18k–€28k",
    cta: "Start a sprint"
  },
  {
    title: "Quarter Program",
    timeline: "12 weeks",
    scope: "End-to-end partnership layering strategy, narrative, and design with ongoing measurement loops.",
    outcomes: [
      "Monthly leadership forums",
      "Narrative + design system delivery",
      "Performance instrumentation"
    ],
    investment: "Investment: €65k–€90k",
    cta: "Design a program"
  },
  {
    title: "Fractional Brand Lead",
    timeline: "6+ months",
    scope: "Hands-on senior partner leading cross-functional brand initiatives alongside your internal team.",
    outcomes: [
      "Embedded leadership",
      "Team enablement + hiring support",
      "Quarterly board-ready reporting"
    ],
    investment: "Investment: custom",
    cta: "Explore fractional"
  }
];

export default function CapabilitiesPage() {
  const tabs = useMemo(() => capabilityTabs, []);

  return (
    <div className="relative">
      <section className="pt-24">
        <div className="container space-y-6">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-4xl space-y-6">
            <motion.span variants={fadeInUp} className="kicker">
              Capabilities
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-4xl font-semibold md:text-5xl">
              Strategy, narrative, and design operating in sync
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-ink-muted">
              Choose the mode you need today; each one is built to integrate with the others when you’re ready. Every engagement mixes research, experimentation, and enablement so your team ships work that performs.
            </motion.p>
          </motion.div>

          <Tabs defaultValue="strategy">
            <TabsList>
              {tabs.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value}>
                  {tab.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabs.map((tab) => (
              <TabsContent key={tab.value} value={tab.value}>
                <div className="space-y-8 rounded-2xl border border-card-border bg-card-bg/70 p-8 backdrop-blur">
                  <p className="text-base leading-relaxed text-ink-muted">{tab.intro}</p>
                  <div>
                    <h3 className="text-lg font-semibold text-ink">What you get</h3>
                    <div className="mt-4 grid gap-4 md:grid-cols-3">
                      {tab.deliverables.map((deliverable) => (
                        <div key={deliverable.title} className="rounded-2xl border border-card-border/70 bg-background/40 p-5">
                          <h4 className="text-sm font-semibold text-ink">{deliverable.title}</h4>
                          <p className="mt-2 text-xs leading-relaxed text-ink-muted">{deliverable.copy}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-ink">How it works</h3>
                      <Workflow className="h-5 w-5 text-accent-violet" />
                    </div>
                    <Accordion type="single" collapsible className="mt-4 space-y-2">
                      {tab.stages.map((stage) => (
                        <AccordionItem key={stage.title} value={stage.title} className="rounded-xl border border-card-border/70 bg-background/40">
                          <AccordionTrigger className="px-5 text-sm font-semibold text-ink">
                            {stage.title}
                          </AccordionTrigger>
                          <AccordionContent className="px-5 pb-4 text-sm leading-relaxed text-ink-muted">
                            {stage.description}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink">Before & After</h3>
                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      <div className="rounded-xl border border-card-border/70 bg-background/30 p-5">
                        <span className="text-xs uppercase tracking-[0.25em] text-ink-muted">Before</span>
                        <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                          {tab.comparison.before.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <Target className="mt-1 h-4 w-4 text-accent-red" aria-hidden />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-xl border border-accent-violet/60 bg-accent-violet/10 p-5">
                        <span className="text-xs uppercase tracking-[0.25em] text-ink">After</span>
                        <ul className="mt-3 space-y-2 text-sm text-ink">
                          {tab.comparison.after.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <Sparkles className="mt-1 h-4 w-4 text-accent-violet" aria-hidden />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm italic text-ink-muted">{tab.result}</p>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section>
        <div className="container space-y-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="kicker">Engagement models</span>
              <h2 className="text-3xl font-semibold md:text-4xl">Choose how we collaborate</h2>
            </div>
            <p className="max-w-xl text-sm text-ink-muted">
              Each model starts with a diagnostics call so we can scope the right lab pod and success metrics for your team.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {engagementModels.map((model) => (
              <div key={model.title} className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-card-border bg-card-bg/70 p-6 shadow-soft">
                <div className="noise-overlay" />
                <div className="relative flex-1 space-y-4">
                  <div className="space-y-1">
                    <div className="text-xs uppercase tracking-[0.25em] text-ink-muted">{model.timeline}</div>
                    <h3 className="text-xl font-semibold text-ink">{model.title}</h3>
                  </div>
                  <p className="text-sm text-ink-muted">{model.scope}</p>
                  <ul className="space-y-2 text-sm text-ink">
                    {model.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2">
                        <Rocket className="mt-1 h-4 w-4 text-accent-violet" aria-hidden />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative mt-6 space-y-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-ink-muted">{model.investment}</p>
                  <Button asChild variant="secondary">
                    <Link href={`/contact?intent=${encodeURIComponent(model.title.toLowerCase())}`}>{model.cta}</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
