import { Users, BarChart3, Target, User, Lock, Zap, Shield } from "lucide-react";

const benefits = [
  {
    Icon: Users,
    title: "Enhanced Customer Experience",
    items: ["Never miss another call or opportunity", "Instant responses at any time of day", "Consistent, professional customer service"],
  },
  {
    Icon: BarChart3,
    title: "Cost Efficiency & Scalability",
    items: ["85% cost savings vs. traditional receptionist", "Handle unlimited concurrent calls", "No sick days, training, or turnover costs"],
  },
  {
    Icon: Target,
    title: "Advanced Data Insights",
    items: ["Analyze call patterns and customer needs", "Identify business improvement opportunities", "AI-powered reporting and analytics"],
  },
  {
    Icon: User,
    title: "Time Freedom For Business Owners",
    items: ["Focus on growth instead of administrative tasks", "Reduced stress from managing phone operations", "Better work-life balance without sacrificing service"],
  },
];

export function Benefits() {
  return (
    <section id="guide" className="py-20 lg:py-28 bg-background">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Why Voice AI Is Transforming Business
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Smart businesses are switching to AI-powered communications to stay competitive and efficient.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {benefits.map(({ Icon, title, items }) => (
            <div key={title} className="card-dark">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-lg bg-cyan/10 border border-cyan/30 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-cyan" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{title}</h3>
                  <ul className="space-y-2">
                    {items.map((it) => (
                      <li key={it} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-cyan mt-1">•</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Badge icon={<Lock className="w-4 h-4" />} label="HIPAA & SOC 2 Certified" />
          <Badge icon={<Zap className="w-4 h-4" />} label="99.9% Uptime SLA" />
          <Badge icon={<Shield className="w-4 h-4" />} label="End-to-End Encryption" />
        </div>
      </div>
    </section>
  );
}

function Badge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-card-border text-sm">
      <span className="text-cyan">{icon}</span>
      <span>{label}</span>
    </div>
  );
}
