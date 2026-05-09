import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Building2, DollarSign, Users, Clock, Phone } from "lucide-react";

export const Route = createFileRoute("/locations/usa")({
  head: () => ({
    meta: [
      { title: "AI Phone Agents United States — 24/7 Voice AI Reception for American Businesses" },
      { name: "description", content: "Professional 24/7 voice AI reception services designed for American businesses from Silicon Valley to Wall Street." },
    ],
  }),
  component: USAPage,
});

const challenges = [
  { Icon: Clock, title: "Continental Scale Operations", desc: "Businesses operating across multiple time zones (EST, CST, MST, PST) need consistent 24/7 availability." },
  { Icon: DollarSign, title: "High Labor Costs", desc: "Minimum wages ranging from $7.25 to $17+ per hour, plus benefits, make traditional reception staff expensive." },
  { Icon: Users, title: "Competitive Talent Market", desc: "Low unemployment rates make finding and retaining quality reception staff challenging and costly." },
  { Icon: Building2, title: "Diverse Industry Standards", desc: "From healthcare to manufacturing, every industry has unique compliance and service requirements." },
];

const cities = [
  { city: "New York", region: "Northeast", desc: "Financial services and Wall Street precision." },
  { city: "Los Angeles", region: "West Coast", desc: "Entertainment industry and creative services." },
  { city: "Chicago", region: "Midwest", desc: "Business hub powering manufacturing and logistics." },
  { city: "Houston", region: "South", desc: "Energy sector and medical center expertise." },
  { city: "Miami", region: "Southeast", desc: "International trade and bilingual customer base." },
  { city: "Silicon Valley", region: "West Coast", desc: "Tech-forward startups and venture-backed scaleups." },
];

function USAPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="UNITED STATES"
        title="AI Phone Agents United States"
        subtitle="Professional 24/7 voice AI reception services designed for American businesses from Silicon Valley to Wall Street"
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-[1100px] mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">AI Phone Agents Revolutionizing American Business Communications</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>From Manhattan's financial district to Silicon Valley's tech campuses, Miami's international trade hub to Chicago's business center, AI phone agents are transforming how American companies handle customer communications.</p>
            <p><strong className="text-foreground">American businesses operate in the world's most competitive marketplace</strong> — from Fortune 500 corporations in downtown Manhattan to innovative startups in Austin's tech corridor. In this environment, every customer interaction matters, and AI phone agents provide the competitive edge that separates market leaders from followers.</p>
            <p>Whether your business operates from the iconic skyscrapers of Chicago's Loop, the entertainment industry hub of Los Angeles, or the financial powerhouses of Charlotte's banking district, our AI phone agents integrate seamlessly with American business culture and deliver the professional service standards your customers expect.</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background border-t border-card-border">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">The American Business Advantage</h2>
            <p className="mt-4 text-muted-foreground">Addressing America's unique business challenges.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {challenges.map(({ Icon, title, desc }) => (
              <div key={title} className="card-dark">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-lg bg-cyan/10 border border-cyan/30 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-cyan" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Serving Businesses Coast to Coast</h2>
            <p className="mt-4 text-muted-foreground">Local expertise in every major American market.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cities.map((c) => (
              <div key={c.city} className="card-dark">
                <div className="text-xs text-cyan font-bold tracking-widest mb-2">{c.region.toUpperCase()}</div>
                <div className="text-xl font-semibold mb-2">{c.city}</div>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background border-t border-card-border">
        <div className="max-w-3xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold">Ready to Transform Your American Business?</h2>
          <p className="mt-5 text-muted-foreground text-lg">Join thousands of US businesses already winning with AI phone agents.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">Book Your Free Strategy Call</Link>
            <a href="tel:+18773207259" className="btn-outline inline-flex items-center gap-2">
              <Phone className="w-4 h-4" /> Call: +1 877-320-7259
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
