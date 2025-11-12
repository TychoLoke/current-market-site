import Link from "next/link";
import { Kicker } from "@/components/Kicker";

const projects = [
  {
    title: "Above The Stack",
    description: "Vendor-neutral research & education platform for MSPs.",
    href: "#"
  },
  {
    title: "ChannelOS",
    description: "Operating system concept for channel workflows and communities.",
    href: "#"
  },
  {
    title: "AvePoint Storytelling",
    description: "Executive narratives and visuals to simplify complexity.",
    href: "#"
  }
];

export default function ProjectsPage() {
  return (
    <section className="pt-20">
      <div className="container space-y-10">
        <div className="max-w-3xl space-y-6">
          <Kicker>Projects</Kicker>
          <h1 className="text-3xl font-semibold text-ink md:text-4xl">Selected work</h1>
          <p className="text-ink-muted leading-relaxed">
            A sampling of the research, narrative, and design engagements we craft with technology leaders. Each tile is structured to expand as new case stories are published.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="card flex h-full flex-col justify-between transition-transform duration-200 ease-out hover:-translate-y-1"
            >
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-ink">{project.title}</h2>
                <p className="text-sm text-ink-muted leading-relaxed">{project.description}</p>
              </div>
              <span className="mt-6 text-sm font-semibold text-accent-violet">View case →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
