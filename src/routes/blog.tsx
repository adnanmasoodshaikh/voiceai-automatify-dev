import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "AI Phone Agent Blog — Insights & Implementation Guides" },
      { name: "description", content: "Expert insights, implementation guides, and best practices for transforming your business communication with AI phone agents." },
    ],
  }),
  component: BlogPage,
});

const featured = [
  { category: "Emergency Response", read: "12 min read", date: "Dec 15, 2024", title: "Emergency Call Handling with AI: Complete Business Guide", desc: "Master emergency call management with AI phone agents. Learn protocols, implementation strategies, and best practices for critical business communications.", tags: ["Emergency Response", "AI Phone Agent", "Business Continuity"] },
  { category: "Business Automation", read: "15 min read", date: "Dec 14, 2024", title: "Business Phone Automation: Complete Implementation Guide", desc: "Transform your business communications with AI phone automation. Step-by-step guide to implementation, benefits, and ROI optimization.", tags: ["Phone Automation", "Business Efficiency", "AI Implementation"] },
];

const all = [
  { category: "Emergency Response", date: "Dec 15", read: "12 min read", title: "Emergency Call Handling with AI: Complete Business Guide", desc: "Master emergency call management with AI phone agents. Learn protocols, implementation strategies, and best practices for critical business communications." },
  { category: "Business Automation", date: "Dec 14", read: "15 min read", title: "Business Phone Automation: Complete Implementation Guide", desc: "Transform your business communications with AI phone automation. Step-by-step guide to implementation, benefits, and ROI optimization." },
  { category: "Cost Analysis", date: "Dec 13", read: "10 min read", title: "AI Receptionist vs Human: Cost Analysis & Decision Guide", desc: "Comprehensive comparison of AI receptionists versus human staff. Includes cost analysis, ROI calculations, and implementation strategies." },
];

const categories = ["All", "Emergency Response", "Business Automation", "Cost Analysis", "AI Implementation", "Customer Service"];

function BlogPage() {
  return (
    <PageShell>
      <PageHero
        title="AI Phone Agent Blog"
        subtitle="Expert insights, implementation guides, and best practices for transforming your business communication with AI phone agents."
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {featured.map((p) => (
              <article key={p.title} className="card-dark">
                <div className="flex items-center gap-3 text-xs mb-4">
                  <span className="px-3 py-1 rounded-full bg-cyan/10 text-cyan font-semibold">{p.category}</span>
                  <span className="text-muted-foreground">{p.read}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 hover:text-cyan transition-colors cursor-pointer">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">{t}</span>
                  ))}
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">{p.date}</span>
                  <span className="text-cyan font-semibold">Read Article →</span>
                </div>
              </article>
            ))}
          </div>

          <h2 className="text-2xl lg:text-3xl font-bold mb-4">All Articles</h2>
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="text-sm text-muted-foreground self-center mr-2">Filter by category:</span>
            {categories.map((c, i) => (
              <button key={c} className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${i === 0 ? "bg-cyan text-primary-foreground border-cyan" : "border-card-border text-muted-foreground hover:text-cyan hover:border-cyan"}`}>{c}</button>
            ))}
          </div>

          <div className="space-y-4">
            {all.map((p) => (
              <article key={p.title} className="card-dark flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 text-xs mb-2">
                    <span className="text-cyan font-semibold">{p.category}</span>
                    <span className="text-muted-foreground">{p.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 hover:text-cyan transition-colors cursor-pointer">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                  <span className="text-xs text-muted-foreground">{p.read}</span>
                  <span className="text-cyan text-sm font-semibold">Read More →</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background border-t border-card-border">
        <div className="max-w-2xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with AI Phone Agent Insights</h2>
          <p className="text-muted-foreground mb-8">Get the latest insights, implementation guides, and industry best practices delivered to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg bg-card border border-card-border text-foreground focus:outline-none focus:border-cyan" />
            <button type="submit" className="btn-primary">Subscribe</button>
          </form>
          <div className="mt-10">
            <Link to="/contact" className="btn-outline">Book Your Free Strategy Call</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
