import { Phone } from "lucide-react";

export function Demo() {
  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Try Our Voice AI Agent Now</h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Call our demo line to experience the future of business communications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <DemoCard flag="🇺🇸" title="USA Demo Line" tel="+1877-320-7259" display="+1 877-320-7259" />
          <DemoCard flag="🇦🇺" title="Australia/Pacific Demo" tel="+61238213526" display="+61 2 3821 3526" />
        </div>
      </div>
    </section>
  );
}

function DemoCard({ flag, title, tel, display }: { flag: string; title: string; tel: string; display: string }) {
  return (
    <div className="card-dark text-center">
      <div className="flex justify-center items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-cyan/10 border border-cyan/30 flex items-center justify-center">
          <Phone className="w-6 h-6 text-cyan" />
        </div>
        <span className="text-3xl">{flag}</span>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <a href={`tel:${tel}`} className="text-2xl font-bold text-cyan hover:text-cyan-glow transition-colors block mb-2">
        {display}
      </a>
      <p className="text-sm text-muted-foreground">Call anytime, 24/7</p>
    </div>
  );
}
