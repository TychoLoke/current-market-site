export const dynamic = "force-static";

export default function ContactPage() {
  return (
    <section className="pt-20">
      <div className="container max-w-2xl space-y-6">
        <p className="kicker">Contact</p>
        <h1 className="text-3xl font-semibold text-ink md:text-4xl">Let’s build something intelligent</h1>
        <p className="text-ink-muted leading-relaxed">
          Share a snapshot of your brand challenge and we’ll coordinate the right mix of research, narrative, and design support.
        </p>
        <form action="/api/contact" method="POST" className="space-y-5">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-semibold text-ink">
              Name
            </label>
            <input id="name" name="name" type="text" required placeholder="Your name" className="w-full" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold text-ink">
              Email
            </label>
            <input id="email" name="email" type="email" required placeholder="you@company.com" className="w-full" />
          </div>
          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-semibold text-ink">
              Company
            </label>
            <input id="company" name="company" type="text" placeholder="Optional" className="w-full" />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-semibold text-ink">
              Project details
            </label>
            <textarea id="message" name="message" required rows={6} placeholder="What are you building?" className="w-full" />
          </div>
          <button type="submit" className="button-accent w-full sm:w-auto">
            Submit
          </button>
          <p className="text-xs text-ink-muted">
            This basic form posts to a demo API route. Wire up email later.
          </p>
        </form>
      </div>
    </section>
  );
}
