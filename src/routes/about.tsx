import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Users, Building2, Globe, Trophy, Rocket } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About The Voice AI Agency — Leading the Revolution in Business Communication" },
      { name: "description", content: "Empowering businesses with next-generation AI communication technology that saves time, reduces costs, and boosts growth." },
    ],
  }),
  component: AboutPage,
});

const facts = [
  { Icon: Users, title: "Global Team", desc: "Our diverse team includes AI scientists, voice recognition experts, and business consultants from around the world." },
  { Icon: Building2, title: "Multiple Offices", desc: "With offices across three countries, we maintain a global perspective while delivering localized service." },
  { Icon: Globe, title: "International Reach", desc: "Our AI solutions are designed to work in multiple languages and adapt to regional business practices." },
  { Icon: Trophy, title: "Innovation Leaders", desc: "Recognized for pioneering advancements in conversational AI and business communication technology." },
];

const offices = [
  { flag: "🇺🇸", title: "United States", desc: "Our headquarters in Silicon Valley brings cutting-edge AI technology to businesses across North America." },
  { flag: "🇦🇺", title: "Australia", desc: "Our Melbourne office serves the growing Australian market with localized AI voice solutions." },
  { flag: "🇳🇿", title: "New Zealand", desc: "Expanding operations in New Zealand to bring AI receptionist technology to local businesses." },
];

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="ABOUT US"
        title="About The Voice AI Agency"
        subtitle="Leading the Revolution in Business Communication"
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-5">Our Mission</h2>
            <p className="text-cyan text-lg mb-6">Empowering businesses with next-generation AI communication technology that saves time, reduces costs, and boosts growth.</p>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>At The Voice AI Agency, we're on a mission to transform how businesses handle communications. We believe that small and medium businesses shouldn't need to choose between missing opportunities and spending thousands on staff. Our AI solutions bridge this gap, providing enterprise-level phone solutions at a fraction of the cost.</p>
              <p>Founded by a team of AI engineers and business efficiency experts, we've developed a system that doesn't just answer calls, but creates meaningful connections with customers, books appointments, and helps businesses grow while owners focus on what they do best.</p>
            </div>
          </div>
          <div>
            <div className="rounded-2xl overflow-hidden border border-card-border">
              <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&auto=format" alt="Cutting-edge AI technology workspace" className="w-full h-auto" loading="lazy" />
            </div>
            <div className="mt-5">
              <div className="font-semibold">Cutting-Edge AI Technology</div>
              <div className="text-sm text-muted-foreground">Leveraging the latest in voice AI to create exceptional experiences</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background border-t border-card-border">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Our Global Presence</h2>
            <p className="mt-4 text-muted-foreground">Serving businesses around the world with local expertise and global insights.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {offices.map((o) => (
              <div key={o.title} className="card-dark text-center">
                <div className="text-5xl mb-4">{o.flag}</div>
                <h3 className="text-xl font-semibold mb-3">{o.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Company Facts</h2>
            <p className="mt-4 text-muted-foreground">Learn more about who we are and what drives us forward.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facts.map(({ Icon, title, desc }) => (
              <div key={title} className="card-dark text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-cyan/10 border border-cyan/30 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-cyan" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background border-t border-card-border">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Strategic Partnerships for Cutting-Edge Tech</h2>
            <p className="mt-4 text-muted-foreground">We collaborate with industry leaders to deliver the best possible solutions.</p>
          </div>
          <div className="card-dark max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 rounded-lg bg-cyan/10 border border-cyan/30 flex items-center justify-center">
                <Rocket className="w-6 h-6 text-cyan" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Key Technology Partners</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our partnership with AIPhoneAgent.ai gives us access to the most advanced voice recognition technologies, while our integrations with Go HighLevel and Stripe ensure seamless operation and payment processing.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  These collaborations allow us to focus on what we do best: creating customized AI solutions that transform how businesses communicate with their customers, while maintaining enterprise-grade security and reliability.
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-cyan font-semibold">
              <span>AIPhoneAgent</span>
              <span>•</span>
              <span>Go HighLevel</span>
              <span>•</span>
              <span>Stripe</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold">Join the Voice AI Revolution</h2>
          <p className="mt-5 text-muted-foreground text-lg">Be part of the future of business communication. Let's transform your phone system into a powerful growth engine.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">Book Your Free Strategy Call</Link>
            <Link to="/features" className="btn-outline">Explore Features</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
