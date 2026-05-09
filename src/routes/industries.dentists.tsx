import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { AlertTriangle, Moon, Ghost, Phone } from "lucide-react";

export const Route = createFileRoute("/industries/dentists")({
  head: () => ({
    meta: [
      { title: "AI Phone Agent for Dental Practices — Stop Losing $30,000+ Monthly From Missed Calls" },
      { name: "description", content: "The only AI phone agent built specifically for dental practices. Capture emergency calls 24/7, eliminate no-shows, automate insurance verification." },
    ],
  }),
  component: DentistsPage,
});

const costs = [
  { Icon: AlertTriangle, cost: "$300-800 per call", title: "Emergency Calls During Procedures", desc: "You're performing a root canal when the phone rings — another dental emergency. Your staff is busy, the call goes to voicemail, and that patient books with your competitor across town. This happens 8-12 times per day in busy practices." },
  { Icon: Moon, cost: "$500-2,000 per patient", title: "After-Hours Revenue Bleeding", desc: "It's 7 PM on Thursday. A patient has severe tooth pain and calls your office — but gets voicemail. They're in pain, they need help NOW, so they call the 24/7 dental emergency line and become someone else's patient forever." },
  { Icon: Ghost, cost: "$200-600 per slot", title: "No-Show Appointment Disasters", desc: "Empty chairs cost you money every minute. Manual reminder calls eat staff time and still miss patients. Each no-show is revenue you can never recover." },
];

function DentistsPage() {
  return (
    <PageShell>
      <section className="relative pt-20 pb-16 lg:py-28 border-b border-card-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 via-background to-background pointer-events-none" />
        <div className="relative max-w-[1200px] mx-auto px-4 lg:px-8 text-center">
          <div className="inline-block text-cyan text-xs font-bold tracking-widest mb-5 px-4 py-1.5 rounded-full bg-cyan/10 border border-cyan/30">
            #1 AI PHONE AGENT FOR DENTAL
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
            Stop Losing $30,000+ Monthly<br />From Missed Dental Calls
          </h1>
          <h2 className="text-cyan text-xl lg:text-2xl font-semibold mt-6">Perfect Your Practice Revenue:</h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Your dental practice captures every call, books every appointment, and grows revenue by $15,000+ per month — all while you focus on providing exceptional patient care without phone interruptions.
          </p>
          <p className="mt-4 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The only AI phone agent built specifically for dental practices. Capture emergency calls 24/7, eliminate no-shows, automate insurance verification, and focus on what you do best — exceptional dentistry.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-6 mb-10">
            <Stat value="99.9%" label="Calls Captured" />
            <Stat value="24/7" label="Availability" />
            <Stat value="$499" label="Fixed Monthly" />
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">Book Free Strategy Call</Link>
            <a href="tel:+18773207259" className="btn-outline inline-flex items-center gap-2">
              <Phone className="w-4 h-4" /> Call: +1 877-320-7259
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">The Hidden Costs Destroying Your Dental Business</h2>
            <p className="mt-4 text-muted-foreground">Every missed call is money out of your pocket. Here's what it's really costing you:</p>
          </div>
          <div className="space-y-5">
            {costs.map(({ Icon, cost, title, desc }) => (
              <div key={title} className="card-dark grid md:grid-cols-[auto_1fr_auto] gap-5 items-center">
                <div className="w-14 h-14 rounded-lg bg-destructive/10 border border-destructive/30 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-destructive" />
                </div>
                <div>
                  <div className="text-destructive font-bold text-sm mb-1">Costs You: {cost}</div>
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest md:text-right">Lost Revenue Daily</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background border-t border-card-border">
        <div className="max-w-3xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold">The Solution: AI Built for Dental</h2>
          <p className="mt-5 text-muted-foreground text-lg">Capture every emergency call, book every new patient, automate insurance verification, and run reminder campaigns that drive no-shows toward zero.</p>
          <div className="mt-10">
            <Link to="/contact" className="btn-primary">Book Your Free Strategy Call</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl lg:text-4xl font-bold text-cyan">{value}</div>
      <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">{label}</div>
    </div>
  );
}
