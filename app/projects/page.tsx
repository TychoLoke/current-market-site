"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useAnalytics } from "@/lib/analytics";
import { fadeInUp, stagger } from "@/components/motion";
import { ArrowUpRight } from "lucide-react";

const filters = ["all", "community", "platform", "enterprise"] as const;

type FilterValue = (typeof filters)[number];

const projects = [
  {
    title: "MSP Research Collective (confidential)",
    category: "community" as FilterValue,
    summary:
      "Composite of the ongoing research and editorial platform I co-steward with MSP founders—turning interviews and telemetry into a living intelligence hub.",
    problem:
      "Our circle needed to move beyond ad-hoc webinars and offer members a dependable source of narrative and market proof.",
    approach:
      "I facilitated founder dialogues, synthesized qualitative insights, and prototyped a modular publishing system that made data stories easy to ship.",
    outcome:
      "The community now anchors monthly sessions on the shared narrative library, with sponsors referencing the insights as their reason to stay involved.",
    kpis: ["Living research library", "Modular publishing stack", "Sponsor retention trending up"]
  },
  {
    title: "Channel Platform Advisory (ongoing)",
    category: "platform" as FilterValue,
    summary:
      "Embedded advisory partnership translating a complex channel operations product into a clear platform promise for sales and product teams alike.",
    problem:
      "The teams needed a cohesive story connecting workflows so operators and buyers could see the complete value arc.",
    approach:
      "I mapped user journeys, rebuilt the value narrative, and designed interactive demo flows alongside a component-based marketing system.",
    outcome:
      "With the shared story in place, enablement sessions run faster and the team tracks shorter decision cycles from demo to commit.",
    kpis: ["Unified platform narrative", "Interactive demo system", "Faster deal decisions"]
  },
  {
    title: "Enterprise Story Lab (retainer)",
    category: "enterprise" as FilterValue,
    summary:
      "Executive communications lab where I translate product innovation into narrative assets, keynotes, and enablement kits for global teams.",
    problem:
      "Rapid product changes were overwhelming internal comms, creating misalignment between regions and leadership.",
    approach:
      "I instituted a recurring story lab with research synthesis, message blueprints, and keynote design support paired with enablement workshops.",
    outcome:
      "Field teams report faster access to aligned messaging and analyst briefings cite the clarity of the new narrative structure.",
    kpis: ["Recurring executive labs", "Message blueprint library", "Analyst feedback: clarity"]
  }
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<FilterValue>("all");
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null);
  const analytics = useAnalytics();

  const filteredProjects = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((project) => project.category === filter);
  }, [filter]);

  const handleSubmitCase = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload = Object.fromEntries(data.entries());
    analytics.track("propose-case-study", payload as Record<string, unknown>);
    console.log("Proposed case study", payload);
    event.currentTarget.reset();
  };

  return (
    <div className="relative">
      <section className="pt-24">
        <div className="container space-y-12">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-6">
            <motion.span variants={fadeInUp} className="kicker">
              Projects
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-4xl font-semibold md:text-5xl">
              Case studies from the lab
            </motion.h1>
            <motion.p variants={fadeInUp} className="max-w-3xl text-lg text-ink-muted">
              Every engagement is designed as an experiment with measurable outcomes. The cases below are anonymized composites of programs I personally lead across community, platform, and enterprise environments.
            </motion.p>
          </motion.div>

          <Tabs value={filter} onValueChange={(value) => setFilter(value as FilterValue)}>
            <TabsList>
              {filters.map((option) => (
                <TabsTrigger key={option} value={option} className="capitalize">
                  {option}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="grid gap-6 md:grid-cols-3">
            {filteredProjects.map((project) => (
              <motion.button
                key={project.title}
                type="button"
                onClick={() => {
                  setActiveProject(project);
                  analytics.track("open-project", { project: project.title });
                }}
                whileHover={{ rotateX: 3, rotateY: -3, translateY: -8 }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
                className="group surface relative flex h-full flex-col overflow-hidden p-6 text-left"
              >
                <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100" aria-hidden>
                  <div className="h-full w-full bg-gradient-to-br from-accent-violet/40 via-transparent to-accent-red/30" />
                </div>
                <div className="relative flex flex-1 flex-col justify-between gap-8">
                  <div className="space-y-3">
                    <div className="text-xs uppercase tracking-[0.3em] text-ink-muted">{project.category}</div>
                    <h2 className="text-xl font-semibold text-ink">{project.title}</h2>
                    <p className="text-sm leading-relaxed text-ink-muted">{project.summary}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-accent-violet">
                    {project.kpis.map((kpi) => (
                      <span key={kpi} className="rounded-full border border-accent-violet/40 bg-accent-violet/10 px-3 py-1">
                        {kpi}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-ink">
                    View case
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="secondary" className="self-start">
                Propose a case study
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Propose a case study</SheetTitle>
                <SheetDescription>
                  Share the headline of the work we should feature next. We’ll be in touch within two business days.
                </SheetDescription>
              </SheetHeader>
              <form className="mt-6 space-y-4" onSubmit={handleSubmitCase}>
                <div className="space-y-2">
                  <Label htmlFor="project">Project name</Label>
                  <Input id="project" name="project" placeholder="Launch codename" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="impact">Impact</Label>
                  <Textarea id="impact" name="impact" placeholder="Key results, audience reached, metrics..." rows={4} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact">Contact email</Label>
                  <Input id="contact" name="contact" type="email" placeholder="you@currentmarketlab.com" required />
                </div>
                <div className="flex items-center justify-end gap-3">
                  <SheetClose asChild>
                    <Button type="button" variant="ghost">
                      Cancel
                    </Button>
                  </SheetClose>
                  <Button type="submit">Submit</Button>
                </div>
              </form>
            </SheetContent>
          </Sheet>
        </div>
      </section>

      <Dialog open={Boolean(activeProject)} onOpenChange={(open) => !open && setActiveProject(null)}>
        <DialogContent className="max-w-3xl">
          {activeProject && (
            <>
              <DialogHeader className="space-y-2 text-left">
                <DialogTitle>{activeProject.title}</DialogTitle>
                <DialogDescription className="text-ink-muted">
                  {activeProject.summary}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6 text-sm leading-relaxed text-ink-muted">
                <div>
                  <h3 className="text-base font-semibold text-ink">Problem</h3>
                  <p className="mt-2">{activeProject.problem}</p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-ink">Approach</h3>
                  <p className="mt-2">{activeProject.approach}</p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-ink">Outcome</h3>
                  <p className="mt-2">{activeProject.outcome}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeProject.kpis.map((kpi) => (
                    <span key={kpi} className="rounded-full border border-accent-violet/60 bg-accent-violet/10 px-3 py-1 text-xs text-accent-violet">
                      {kpi}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
