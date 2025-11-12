"use client";

import { FormEvent, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import { useAnalytics } from "@/lib/analytics";
import { Mail, Linkedin } from "lucide-react";

export const dynamic = "force-static";

const projectTypes = ["Strategy", "Narrative", "Design", "Speaking"] as const;

type ProjectType = (typeof projectTypes)[number];

type FAQ = {
  question: string;
  answer: string;
};

const faqs: Record<ProjectType, FAQ[]> = {
  Strategy: [
    {
      question: "What’s included in a strategy engagement?",
      answer:
        "We run research interviews, market analysis, and leadership workshops. Deliverables include a positioning thesis, decision framework, and prioritized roadmap."
    },
    {
      question: "How soon can we begin?",
      answer:
        "We typically onboard within two weeks after a discovery call. Accelerated timelines are possible for critical launches."
    }
  ],
  Narrative: [
    {
      question: "Do you partner with internal content teams?",
      answer:
        "Yes. We co-create message architectures, editorial cadences, and enablement kits so in-house writers and comms leads stay in sync."
    },
    {
      question: "Can you support executive ghostwriting?",
      answer:
        "We maintain a small bench of narrative strategists who collaborate directly with founders and executives for high-stakes storytelling."
    }
  ],
  Design: [
    {
      question: "Do you deliver full design systems?",
      answer:
        "Our team builds visual and motion languages, component libraries, and documentation tailored to your design and product stack."
    },
    {
      question: "Will you ship the website?",
      answer:
        "We prototype in Figma and can execute builds in Next.js or Webflow. We also train your team for future iterations."
    }
  ],
  Speaking: [
    {
      question: "What topics do you cover?",
      answer:
        "Talks focus on narrative intelligence, brand systems for technical teams, and building creative motion into GTM."
    },
    {
      question: "Do you travel internationally?",
      answer:
        "Yes—we speak across Europe and North America with adequate lead time. Virtual keynotes are also available."
    }
  ]
};

export default function ContactPage() {
  const [type, setType] = useState<ProjectType>("Strategy");
  const { toast } = useToast();
  const analytics = useAnalytics();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (!formData.get("name") || !formData.get("email") || !formData.get("message")) {
      toast({
        title: "Missing information",
        description: "Please add your name, email, and a short project brief.",
        duration: 3500
      });
      return;
    }

    formData.append("projectType", type);

    try {
      setLoading(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData
      });

      analytics.track("contact-submit", Object.fromEntries(formData.entries()));

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      toast({
        title: "Submission received",
        description: "We’ll reply within one business day.",
        duration: 4000
      });
      event.currentTarget.reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please email hello@currentmarketlab.com while we look into it.",
        duration: 4000
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      <section className="pt-24">
        <div className="container max-w-3xl space-y-10">
          <div className="space-y-4">
            <span className="kicker">Contact</span>
            <h1 className="text-4xl font-semibold md:text-5xl">Let’s build something intelligent</h1>
            <p className="text-lg text-ink-muted">
              Share a snapshot of your initiative and the outcomes you’re chasing. We’ll map the right mix of research, narrative, and design support from our lab in Deurne, NL.
            </p>
          </div>

          <div className="surface space-y-6 p-8">
            <Tabs value={type} onValueChange={(value) => setType(value as ProjectType)}>
              <TabsList className="flex-wrap">
                {projectTypes.map((item) => (
                  <TabsTrigger key={item} value={item}>
                    {item}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-ink-muted">
                What to expect
              </h2>
              <Accordion type="single" collapsible className="mt-4 space-y-2">
                {faqs[type].map((faq) => (
                  <AccordionItem key={faq.question} value={faq.question} className="rounded-xl border border-card-border/70 bg-background/40">
                    <AccordionTrigger className="px-5 text-sm font-semibold text-ink">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-4 text-sm leading-relaxed text-ink-muted">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="you@company.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" name="company" placeholder="Optional" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Project details</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="What are you building? Where do you need clarity?"
                  rows={6}
                  required
                />
              </div>
              <Button type="submit" disabled={loading} className="w-full md:w-auto">
                {loading ? "Sending..." : "Submit"}
              </Button>
              <p className="text-xs text-ink-muted">
                This form connects to our /api/contact endpoint. We’ll follow up by email.
              </p>
            </form>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="surface p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-ink-muted">
                Prefer email?
              </h2>
              <p className="mt-3 text-sm text-ink-muted">
                Drop us a note and we’ll respond within one business day. Include timelines, team size, and any must-have deliverables.
              </p>
              <Link href="mailto:hello@currentmarketlab.com" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ink">
                <Mail className="h-4 w-4" />
                hello@currentmarketlab.com
              </Link>
            </div>
            <div className="surface p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-ink-muted">Connect</h2>
              <p className="mt-3 text-sm text-ink-muted">Join our network and follow along with lab experiments.</p>
              <TooltipProvider>
                <div className="mt-4 flex gap-3">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-card-border text-ink transition hover:border-accent-violet hover:text-accent-violet"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>LinkedIn</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="https://currentmarketlab.com"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-card-border text-ink transition hover:border-accent-violet hover:text-accent-violet"
                      >
                        <span className="text-sm font-semibold">CM</span>
                        <span className="sr-only">Website</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>Current Market</TooltipContent>
                  </Tooltip>
                </div>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
