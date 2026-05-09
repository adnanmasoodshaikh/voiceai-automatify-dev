const cards = [
  { icon: "🏢", title: "Industry-Specific Solutions", desc: "Tailored AI phone solutions for dental practices, medical clinics, contractors, and more industries.", href: "#industries" },
  { icon: "🇺🇸", title: "United States Services", desc: "Professional AI phone agents serving American businesses nationwide with local expertise.", href: "#locations" },
  { icon: "🚨", title: "Emergency Call Handling", desc: "Master emergency call management with AI protocols and best practices for critical situations.", href: "#blog" },
  { icon: "📞", title: "Business Phone Automation", desc: "Complete implementation guide for transforming your communications with AI automation.", href: "#blog" },
  { icon: "⚖️", title: "AI vs Human Receptionist", desc: "Comprehensive cost analysis and decision guide for choosing AI or human reception staff.", href: "#blog" },
  { icon: "📚", title: "Complete AI Phone Guide", desc: "Everything you need to know about AI phone agents, implementation, and business benefits.", href: "#guide" },
];

export function Resources() {
  return (
    <section id="industries" className="py-20 lg:py-28 bg-background">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Explore AI Phone Agent Solutions
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Discover industry-specific guides, location information, and comprehensive resources to maximize your business potential
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => (
            <a key={c.title} href={c.href} className="card-dark block group">
              <div className="text-4xl mb-4">{c.icon}</div>
              <h3 className="text-lg font-semibold mb-3 group-hover:text-cyan transition-colors">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
