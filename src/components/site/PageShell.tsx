import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Header />
      <div className="pt-20">{children}</div>
      <Footer />
    </main>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative py-20 lg:py-28 border-b border-card-border overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 via-background to-background pointer-events-none" />
      <div className="relative max-w-[1200px] mx-auto px-4 lg:px-8 text-center">
        {eyebrow && <div className="text-cyan text-sm font-bold tracking-widest mb-4">{eyebrow}</div>}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">{title}</h1>
        {subtitle && <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  );
}
