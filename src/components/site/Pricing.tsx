export function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-background">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Stop Losing Revenue. Start Saving Thousands.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Our AI Agent helps you capture missed opportunities and save on staffing costs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card label="THE PROBLEM" headline="Missed Revenue = $100+" desc="Each missed call can cost you $100+ in potential revenue, and that adds up quickly." tone="danger" />
          <Card label="THE SOLUTION" headline="AI Agent = $499/month" desc="For a fixed monthly fee, never miss another call or opportunity again." tone="primary" featured />
          <Card label="THE ALTERNATIVE" headline="Receptionist = $3,000+/month" desc="Hiring staff costs significantly more and comes with limitations." tone="muted" />
        </div>
      </div>
    </section>
  );
}

function Card({ label, headline, desc, tone, featured }: { label: string; headline: string; desc: string; tone: string; featured?: boolean }) {
  const labelColor = tone === "danger" ? "text-destructive" : tone === "primary" ? "text-cyan" : "text-muted-foreground";
  return (
    <div className={`card-dark ${featured ? "border-cyan shadow-[0_0_40px_-10px_oklch(0.78_0.18_225/0.4)]" : ""}`}>
      <div className={`text-xs font-bold tracking-widest mb-4 ${labelColor}`}>{label}</div>
      <h3 className="text-2xl font-bold mb-4">{headline}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
