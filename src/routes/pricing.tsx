import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Check } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Simple, Powerful Pricing — AI Phone Agent" },
      { name: "description", content: "Get a complete AI Phone Agent suite for $499/month. All-in-one voice AI solution with everything included." },
    ],
  }),
  component: PricingPage,
});

const includedFeatures = [
  { name: "Virtual Phone Receptionist", desc: "24/7 call handling and routing", price: "$599/mo" },
  { name: "Automated Review Management", desc: "Actively collect and manage reviews", price: "$299/mo" },
  { name: "AI SMS Texting", desc: "Two-way text communication", price: "$499/mo" },
  { name: "Appointment Scheduling", desc: "AI-powered calendar booking", price: "$399/mo" },
  { name: "Call Recording & Analysis", desc: "Record and analyze all calls", price: "$299/mo" },
  { name: "Custom Voice Training", desc: "Personalized AI voice training", price: "$499/mo" },
];

const bonusTools = [
  { name: "Customer Relationship Management (CRM)", desc: "Full-featured CRM system", price: "$499/mo" },
  { name: "SMS Marketing Tools", desc: "Mass texting capabilities", price: "$299/mo" },
  { name: "Social Media Bot", desc: "AI responses on social platforms", price: "$399/mo" },
  { name: "Mobile App Access", desc: "Manage on the go", price: "$199/mo" },
];

const faqs = [
  { q: "Is there a contract?", a: "No long-term contracts required. We offer month-to-month service, though many clients choose our annual plan for additional savings." },
  { q: "What's the setup fee?", a: "The one-time setup fee ranges from $499-$999 depending on customization needs. This covers AI voice training, system integration, and custom setup for your business." },
  { q: "Can I upgrade my plan?", a: "Absolutely! As your business grows, you can easily upgrade to handle more call volume or add additional features like multi-location support." },
  { q: "What's included in the price?", a: "Everything listed above! Your monthly fee includes the AI Phone Agent, all integrations, unlimited calls (within fair usage policy), all software updates, and technical support." },
];

function PricingPage() {
  return (
    <PageShell>
      <PageHero eyebrow="PRICING" title="Simple, Powerful Pricing" subtitle="Incredible Value for Your Business" />

      <section className="py-16 lg:py-24">
        <div className="max-w-[1100px] mx-auto px-4 lg:px-8">
          <div className="card-dark border-cyan shadow-[0_0_60px_-15px_oklch(0.78_0.18_225/0.4)]">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-2">All-In-One Voice AI Solution</h2>
            <p className="text-center text-muted-foreground mb-10">Everything your business needs in one fixed-price package.</p>

            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-semibold text-cyan mb-5">Included Features</h3>
                <ul className="space-y-4">
                  {includedFeatures.map((f) => (
                    <FeatureRow key={f.name} {...f} />
                  ))}
                </ul>

                <h3 className="text-xl font-semibold text-cyan mt-10 mb-5">Bonus Tools</h3>
                <ul className="space-y-4">
                  {bonusTools.map((f) => (
                    <FeatureRow key={f.name} {...f} />
                  ))}
                </ul>
              </div>

              <div className="lg:sticky lg:top-28 lg:self-start">
                <div className="bg-secondary border border-card-border rounded-2xl p-8 text-center">
                  <div className="text-sm text-muted-foreground line-through">Total Value</div>
                  <div className="text-3xl font-bold text-muted-foreground line-through mb-6">$4,389 / Month</div>

                  <div className="text-sm text-cyan font-semibold tracking-widest mb-2">YOUR PRICE</div>
                  <div className="text-6xl lg:text-7xl font-bold text-cyan mb-2">$499</div>
                  <div className="text-muted-foreground mb-1">/ Month</div>
                  <div className="text-xs text-muted-foreground mb-8">+ One-time setup fee</div>

                  <div className="text-left bg-background/50 rounded-lg p-5 mb-6">
                    <div className="text-sm font-semibold text-cyan mb-3">Why This is Great Value:</div>
                    <ul className="space-y-2 text-sm text-foreground/90">
                      <li className="flex gap-2"><Check className="w-4 h-4 text-cyan shrink-0 mt-0.5" /> Costs less than 1/6th of a human receptionist</li>
                      <li className="flex gap-2"><Check className="w-4 h-4 text-cyan shrink-0 mt-0.5" /> Works 24/7/365 with no days off</li>
                      <li className="flex gap-2"><Check className="w-4 h-4 text-cyan shrink-0 mt-0.5" /> Pays for itself by capturing just one missed opportunity</li>
                    </ul>
                  </div>

                  <Link to="/contact" className="btn-primary w-full">Get Started Now</Link>
                  <div className="text-xs text-muted-foreground mt-3">Book Your Free Strategy Call</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background border-t border-card-border">
        <div className="max-w-3xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="mt-4 text-muted-foreground">Everything you need to know about our pricing and service.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="card-dark group">
                <summary className="cursor-pointer font-semibold flex justify-between items-center">
                  <span>{f.q}</span>
                  <span className="text-cyan text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold">Stop losing leads. Start saving money.</h2>
          <p className="mt-5 text-muted-foreground text-lg">For less than the cost of a part-time employee, get a 24/7 solution that never calls in sick or takes vacation.</p>
          <div className="mt-8">
            <Link to="/contact" className="btn-primary">Book Your Free Strategy Call</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function FeatureRow({ name, desc, price }: { name: string; desc: string; price: string }) {
  return (
    <li className="flex items-start gap-3">
      <Check className="w-5 h-5 text-cyan shrink-0 mt-0.5" />
      <div className="flex-1 flex justify-between items-start gap-3">
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-xs text-muted-foreground">{desc}</div>
        </div>
        <div className="text-sm text-muted-foreground line-through shrink-0">{price}</div>
      </div>
    </li>
  );
}
