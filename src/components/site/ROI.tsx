import { useState, useMemo } from "react";
import { Zap, DollarSign, Rocket, Phone } from "lucide-react";

export function ROI() {
  const [calls, setCalls] = useState(20);
  const [value, setValue] = useState(150);
  const [conv, setConv] = useState(40);

  const { lost, gain, annual } = useMemo(() => {
    const monthlyCalls = calls * 4;
    const lost = Math.round(monthlyCalls * (conv / 100) * value);
    const gain = lost - 499;
    return { lost, gain, annual: gain * 12 };
  }, [calls, value, conv]);

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Calculate Your Return on Investment
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            See how much revenue you could be generating with our AI Phone Agent.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="card-dark space-y-8">
            <Slider label="Missed Calls Per Week" sub="Average number of calls you miss weekly" value={calls} min={0} max={100} onChange={setCalls} />
            <Slider label="Average Customer Value ($)" sub="Average transaction or service value" value={value} min={0} max={2000} step={10} onChange={setValue} prefix="$" />
            <Slider label="Conversion Rate (%)" sub="Percentage of calls that become customers" value={conv} min={0} max={100} onChange={setConv} suffix="%" />
          </div>

          <div className="card-dark border-cyan">
            <h3 className="text-xl font-semibold mb-6">Your Potential Monthly Revenue Recovery</h3>
            <Row label="Lost Revenue (Current)" value={`$${lost.toLocaleString()}`} color="text-destructive" />
            <Row label="AI Agent Cost" value="$499" color="text-muted-foreground" />
            <div className="border-t border-card-border my-4" />
            <Row label="Net Revenue Gain" value={`$${gain.toLocaleString()}`} color="text-cyan" big />
            <Row label="Annual Impact" value={`$${annual.toLocaleString()}`} color="text-cyan" big />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Backed by Industry-Leading Guarantees</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <Guarantee Icon={Zap} value="99.9%" label="99.9% Uptime Guarantee" />
            <Guarantee Icon={DollarSign} value="30 Days" label="30-Day Money Back" />
            <Guarantee Icon={Rocket} value="24 Hours" label="Setup in 24 Hours" />
            <Guarantee Icon={Phone} value="24/7" label="24/7 Expert Support" />
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-10">Trusted by Thousands of Businesses</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Stat value="10,000+" title="Businesses Served" desc="Successfully deployed AI phone agents" />
            <Stat value="2M+" title="Calls Handled" desc="Monthly call volume processed" />
            <Stat value="4.9/5" title="Customer Rating" desc="Average satisfaction score" />
            <Stat value="5+" title="Years Experience" desc="Serving businesses since 2019" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Slider({ label, sub, value, min, max, step = 1, onChange, prefix = "", suffix = "" }: any) {
  return (
    <div>
      <div className="flex justify-between items-baseline mb-1">
        <label className="font-semibold text-sm">{label}</label>
        <span className="text-cyan font-bold text-lg">{prefix}{value}{suffix}</span>
      </div>
      <p className="text-xs text-muted-foreground mb-3">{sub}</p>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 rounded-full appearance-none bg-secondary accent-cyan"
        style={{ accentColor: "oklch(0.78 0.18 225)" }}
      />
    </div>
  );
}

function Row({ label, value, color, big }: { label: string; value: string; color: string; big?: boolean }) {
  return (
    <div className="flex justify-between items-center py-2">
      <span className="text-muted-foreground text-sm">{label}</span>
      <span className={`font-bold ${color} ${big ? "text-2xl" : "text-lg"}`}>{value}</span>
    </div>
  );
}

function Guarantee({ Icon, value, label }: { Icon: any; value: string; label: string }) {
  return (
    <div className="card-dark text-center">
      <div className="w-12 h-12 mx-auto rounded-full bg-cyan/10 border border-cyan/30 flex items-center justify-center mb-3">
        <Icon className="w-6 h-6 text-cyan" />
      </div>
      <div className="text-2xl font-bold text-cyan">{value}</div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

function Stat({ value, title, desc }: { value: string; title: string; desc: string }) {
  return (
    <div className="card-dark text-center">
      <div className="text-4xl lg:text-5xl font-bold text-cyan mb-2">{value}</div>
      <div className="font-semibold mb-1">{title}</div>
      <div className="text-xs text-muted-foreground">{desc}</div>
    </div>
  );
}
