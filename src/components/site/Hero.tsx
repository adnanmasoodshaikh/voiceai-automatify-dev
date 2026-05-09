import heroBg from "@/assets/hero-bg.jpg";
import aiOrb from "@/assets/ai-orb.png";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-[1.2fr_1fr] gap-8 items-center min-h-[calc(100vh-5rem)]">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight">
            AI Phone Agent - Never Miss Calls Again.
            <br />
            <span className="text-foreground">Grow Your Business 24/7 with AI Receptionist.</span>
          </h1>
          <p className="mt-8 text-base lg:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Our AI virtual receptionist handles calls 24/7, books appointments automatically, and captures every lead.
            Transform your business phone system with intelligent call automation that works while you sleep.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">Book Your Free Strategy Call</a>
            <a href="#problem" className="btn-outline">See How It Works</a>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <TrustBadge icon="🔒" label="HIPAA Compliant" check />
            <TrustBadge icon="⭐" label="Customer Rating" value="4.9/5" />
            <TrustBadge icon="🚀" label="Setup Time" value="24hrs" />
            <TrustBadge icon="🏢" label="Businesses Served" value="10,000+" />
          </div>
        </div>

        <div className="relative hidden lg:flex items-center justify-center">
          <img src={aiOrb} alt="AI orb visualization" className="w-full max-w-lg animate-[spin_60s_linear_infinite]" />
        </div>
      </div>
    </section>
  );
}

function TrustBadge({ icon, label, value, check }: { icon: string; label: string; value?: string; check?: boolean }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card/60 border border-card-border backdrop-blur-sm">
      <span className="text-base">{icon}</span>
      <div className="text-xs leading-tight">
        <div className="text-muted-foreground">{label}</div>
        {value && <div className="text-cyan font-semibold">{value}</div>}
      </div>
      {check && <span className="text-cyan text-sm">✓</span>}
    </div>
  );
}
