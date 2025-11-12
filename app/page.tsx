"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Compass, Palette, Lightbulb, Quote, Sparkles, Target } from "lucide-react";

import { HeroBackdrop } from "@/components/HeroBackdrop";
import { fadeInUp, scaleIn, stagger } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useAnalytics } from "@/lib/analytics";

const heroStatements = [
  "We architect clarity from complexity.",
  "We choreograph narratives that feel inevitable.",
  "We prototype brand futures you can measure.",
  "We leave teams braver, sharper, more aligned."
];

const labStats = [
  { label: "Strategy Confidence", value: 93, accent: "from-accent-violet/80 to-accent-violet" },
  { label: "Narrative Adoption", value: 88, accent: "from-accent-red/80 to-accent-red" },
  { label: "Design Velocity", value: 95, accent: "from-accent-violet/70 to-accent-red/80" }
];

const whyCards = [
  {
    title: "Clarity over chaos",
    description:
      "We translate research into momentum with frameworks that unlock executive alignment and product resonance in weeks, not quarters.",
    icon: Compass
  },
  {
    title: "Intelligence over imitation",
    description:
      "Signals from customers, operators, and the market combine to expose whitespace. We build narratives from that insight, not trend decks.",
    icon: Lightbulb
  },
  {
    title: "Adaptability over aesthetics",
    description:
      "Systemized storytelling means every campaign, keynote, and release stays on-message even as your roadmap evolves.",
    icon: Palette
  }
];

const pillarTabs = [
  {
    value: "strategy",
    title: "Strategy",
    headline:
      "Rigorous immersion uncovers the real levers behind category fit, pricing power, and pipeline velocity.",
    benefits: [
      "Narrative-aligned market models",
      "Executive-ready positioning boards",
      "Decision frameworks for launches"
    ],
    accordion: [
      {
        title: "Investigate context",
        content:
          "Stakeholder interviews, product immersion, and competitive signal scans create a shared picture of where you win today."
      },
      {
        title: "Model future states",
        content:
          "We map strategic routes and stress-test them with your GTM, product, and leadership teams to surface the sharpest story." 
      },
      {
        title: "Codify direction",
        content:
          "A living brief articulates opportunity spaces, brand pillars, and proof narratives so internal teams can move with confidence."
      }
    ],
    microCase: "Scaled an MSP platform's win rate by 14% after repositioning around service reliability metrics."
  },
  {
    value: "narrative",
    title: "Narrative",
    headline:
      "We choreograph narratives that flex across channels—from analyst decks to AI-assisted content ops.",
    benefits: [
      "Message architectures tuned for humans + algorithms",
      "Thought-leadership cadences",
      "Story playbooks for sales, success, and recruiting"
    ],
    accordion: [
      {
        title: "Distill the arc",
        content:
          "We identify pivotal proof points, customer truths, and founder conviction, then braid them into an argument the market remembers."
      },
      {
        title: "Prototype distribution",
        content:
          "Editorial sprints map content formats, AI prompts, and enablement kits so every team can activate the story fast."
      },
      {
        title: "Operationalize feedback",
        content:
          "Listening loops and attribution dashboards show how narrative assets land across the funnel and where to amplify."
      }
    ],
    microCase: "Ghostwrote a quarterly manifesto series that lifted enterprise inbound conversations by 21%."
  },
  {
    value: "design",
    title: "Design",
    headline:
      "Design systems express the intelligence of your brand—showing teams and markets what you stand for in motion.",
    benefits: [
      "Signature visual + motion language",
      "Componentized web experiences",
      "Sales and investor storytelling kits"
    ],
    accordion: [
      {
        title: "Shape the aesthetic DNA",
        content:
          "Moodfield explorations and motion experiments push beyond the expected while staying grounded in your strategy."
      },
      {
        title: "Build adaptive systems",
        content:
          "Tokens, Figma libraries, and WebGL-ready patterns ensure design keeps pace with product without reinventing the wheel."
      },
      {
        title: "Enable teams",
        content:
          "Playbooks, templates, and async critiques empower internal teams to remix assets without diluting intent."
      }
    ],
    microCase: "Rebuilt an AI startup's design system, reducing time-to-launch for campaigns by 45%."
  }
];

const clients = ["Intercom", "Notion", "MessageBird", "Miro", "GitLab", "Fathom", "Arc", "Linear"];

const testimonials = [
  {
    quote:
      "Current Market unlocked a strategy narrative our entire leadership team can sell. Every roadmap decision now ladders into that story.",
    name: "Elena Vos",
    title: "Chief Strategy Officer, HelioStack"
  },
  {
    quote:
      "They transformed our founder vision into a message platform that performs in enterprise rooms without losing soul.",
    name: "Marcus Reid",
    title: "Co-founder, Northwind Cloud"
  },
  {
    quote:
      "Design reviews with the lab feel like working with an in-house motion team—sharp instincts, fast iteration, measurable impact.",
    name: "Priya Chand",
    title: "Head of Brand, LumenOps"
  }
];

function AnimatedNumber({ value }: { value: number }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let frame: number;
    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(Math.floor(progress * value));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return <span>{display}</span>;
}

function DiscoveryDialog() {
  const analytics = useAnalytics();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    setLoading(true);
    setTimeout(() => {
      analytics.track("discovery-session", payload as Record<string, unknown>);
      console.log("Discovery session inquiry", payload);
      setLoading(false);
      setOpen(false);
    }, 500);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg">Book a discovery session</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="space-y-3 text-left">
          <DialogTitle>Schedule a lab conversation</DialogTitle>
          <DialogDescription>
            Share a few signals about your initiative. We’ll respond within 24 hours with next steps.
          </DialogDescription>
        </DialogHeader>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Your name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="you@company.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="topic">Focus</Label>
            <Textarea id="topic" name="topic" placeholder="Strategy reset, narrative system, product launch..." rows={4} />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-card-border bg-card-bg/70 p-8 md:p-12">
      <div className="noise-overlay" />
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative space-y-6"
      >
        <Quote className="h-8 w-8 text-accent-violet" />
        <p className="text-xl leading-relaxed text-ink md:text-2xl">
          {testimonials[index].quote}
        </p>
        <div className="flex items-center gap-3 text-sm text-ink-muted">
          <span className="font-semibold text-ink">{testimonials[index].name}</span>
          <span aria-hidden className="h-1 w-1 rounded-full bg-ink-muted/60" />
          <span>{testimonials[index].title}</span>
        </div>
      </motion.div>
      <div className="mt-8 flex items-center gap-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setIndex(idx)}
            className={`h-2.5 flex-1 rounded-full transition ${
              index === idx ? "bg-gradient-to-r from-accent-violet to-accent-red" : "bg-card-border"
            }`}
            aria-label={`Show testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  const manifesto = useMemo(() => heroStatements, []);

  return (
    <div className="relative">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <HeroBackdrop />
        </div>
        <div className="container relative z-10 flex flex-col gap-12 pt-24 md:flex-row md:items-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex-1 space-y-6"
          >
            <motion.span variants={fadeInUp} className="kicker">
              Current Market — The Brand Intelligence Lab
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl font-semibold leading-tight text-ink md:text-5xl"
            >
              Where creativity meets <span className="bg-gradient-to-r from-accent-violet to-accent-red bg-clip-text text-transparent">intelligence</span>.
            </motion.h1>
            <motion.div variants={fadeInUp} className="space-y-2 text-base text-ink-muted md:text-lg">
              {manifesto.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/capabilities">Explore the lab stack</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/projects">See projects</Link>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="relative flex-1"
          >
            <div className="relative overflow-hidden rounded-2xl border border-card-border bg-gradient-to-br from-white/5 to-white/0 p-8 shadow-soft">
              <div className="absolute inset-0 opacity-20">
                <div className="hero-gradient" />
              </div>
              <div className="relative space-y-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm uppercase tracking-[0.3em] text-ink-muted">
                    Lab Stats
                  </div>
                  <Sparkles className="h-5 w-5 text-accent-violet" />
                </div>
                <div className="grid gap-5">
                  {labStats.map((stat) => (
                    <div key={stat.label} className="space-y-2">
                      <div className="flex items-center justify-between text-sm text-ink-muted">
                        <span>{stat.label}</span>
                        <span className="font-semibold text-ink">
                          <AnimatedNumber value={stat.value} />%
                        </span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-card-border">
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{ width: `${stat.value}%` }}
                          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                          className={`h-full rounded-full bg-gradient-to-r ${stat.accent}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs uppercase tracking-[0.3em] text-ink-muted">
                  Signals sampled from recent partner engagements
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section>
        <div className="container space-y-12">
          <div className="grid gap-8 md:grid-cols-3">
            {whyCards.map(({ title, description, icon: Icon }) => (
              <motion.div
                key={title}
                whileHover={{ translateY: -6 }}
                transition={{ type: "spring", stiffness: 120, damping: 14 }}
                className="relative overflow-hidden rounded-2xl border border-card-border bg-card-bg/70 p-8 backdrop-blur"
              >
                <div className="absolute inset-0 opacity-[0.06]">
                  <div className="hero-gradient" />
                </div>
                <div className="relative space-y-4">
                  <Icon className="h-8 w-8 text-accent-violet" aria-hidden />
                  <h3 className="text-xl font-semibold text-ink">{title}</h3>
                  <p className="text-sm leading-relaxed text-ink-muted">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container space-y-10">
          <div className="max-w-3xl space-y-4">
            <span className="kicker">The Lab Stack</span>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Strategy, narrative, and design that compound together
            </h2>
            <p className="text-lg text-ink-muted">
              Slide through how we build intelligence across your brand. Each mode has a clear operating system and moments of proof.
            </p>
          </div>
          <Tabs defaultValue="strategy">
            <TabsList>
              {pillarTabs.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value}>
                  {tab.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {pillarTabs.map((tab) => (
              <TabsContent key={tab.value} value={tab.value}>
                <div className="grid gap-8 rounded-2xl border border-card-border bg-card-bg/70 p-8 backdrop-blur">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-ink">{tab.headline}</h3>
                    <ul className="grid gap-3 text-sm text-ink-muted md:grid-cols-3">
                      {tab.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2">
                          <Target className="mt-1 h-4 w-4 text-accent-violet" aria-hidden />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Accordion type="single" collapsible>
                    {tab.accordion.map((item) => (
                      <AccordionItem value={item.title} key={item.title}>
                        <AccordionTrigger>{item.title}</AccordionTrigger>
                        <AccordionContent>{item.content}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                  <div className="rounded-xl border border-dashed border-accent-violet/40 bg-accent-violet/10 p-4 text-sm text-ink">
                    {tab.microCase}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="container space-y-6">
          <div className="flex flex-col gap-2">
            <span className="kicker">Clients & Ecosystem</span>
            <h2 className="text-3xl font-semibold md:text-4xl">Trusted across product, platform, and community brands</h2>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-card-border bg-card-bg/70 p-6">
            <div className="marquee-track">
              {[...clients, ...clients].map((client, index) => (
                <div key={`${client}-${index}`} className="text-lg font-semibold tracking-widest text-ink/80">
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="container relative overflow-hidden rounded-2xl border border-accent-violet/40 bg-gradient-to-r from-accent-violet/20 via-transparent to-accent-red/20 p-10 md:flex md:items-center md:justify-between">
          <div className="noise-overlay" />
          <div className="relative max-w-xl space-y-3">
            <span className="kicker">Partner with the lab</span>
            <h2 className="text-3xl font-semibold text-ink md:text-4xl">
              Let’s map the intelligence your brand needs next
            </h2>
            <p className="text-base text-ink-muted md:text-lg">
              We co-design engagements with founders, CMOs, and product leaders to unlock clarity, adoption, and design velocity.
            </p>
          </div>
          <div className="relative mt-6 md:mt-0">
            <DiscoveryDialog />
          </div>
        </div>
      </section>

      <section>
        <div className="container space-y-10">
          <div className="max-w-2xl space-y-4">
            <span className="kicker">Signals from partners</span>
            <h2 className="text-3xl font-semibold md:text-4xl">Stories from the Current Market network</h2>
            <p className="text-base text-ink-muted">
              Feedback loops keep our lab honest. We gather qualitative and quantitative signals after every sprint and long-term program.
            </p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>
    </div>
  );
}
