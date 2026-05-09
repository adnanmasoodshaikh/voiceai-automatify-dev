import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Mail, Phone, MapPin, Calendar, MessageSquare } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — AI Phone Agent" },
      { name: "description", content: "Have questions? Get in touch with our Voice AI team. Email, call, or schedule a free strategy demo." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageShell>
      <PageHero
        title="Have Questions? Let's Talk"
        subtitle="We're here to help with any questions about our Voice AI solutions"
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            <div className="space-y-6">
              <ContactRow Icon={Mail} title="Email Us">
                <a href="mailto:alt@altcutman.com" className="text-cyan hover:text-cyan-glow">alt@altcutman.com</a>
              </ContactRow>
              <ContactRow Icon={Phone} title="Call Us">
                <a href="tel:+19037760587" className="block text-cyan hover:text-cyan-glow">US: +1 (903) 776-0587</a>
                <a href="tel:+61341602423" className="block text-cyan hover:text-cyan-glow">AUS: +61 3 4160 2423</a>
              </ContactRow>
              <ContactRow Icon={MapPin} title="Our Location">
                <div className="text-muted-foreground">Silicon Valley, CA 94025, USA</div>
              </ContactRow>
            </div>

            <div className="card-dark mt-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-lg bg-cyan/10 border border-cyan/30 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-cyan" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Schedule a Strategy Call</h3>
                  <p className="text-sm text-muted-foreground mb-5">Want to see a personalized demo of our AI Phone Agent and discuss your specific needs? Schedule a free strategy call with our team.</p>
                  <a href="#booking" className="btn-primary">Book Your Free Strategy Call</a>
                </div>
              </div>
            </div>
          </div>

          <div className="card-dark">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-cyan/10 border border-cyan/30 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-cyan" />
              </div>
              <h3 className="text-xl font-semibold">Send Us a Message</h3>
            </div>

            {submitted ? (
              <div className="text-center py-12">
                <div className="text-cyan text-5xl mb-4">✓</div>
                <h4 className="text-xl font-semibold mb-2">Thanks — message received!</h4>
                <p className="text-muted-foreground">We'll be in touch within one business day.</p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <Field label="Name"><input required className="form-input" placeholder="Your full name" /></Field>
                <Field label="Email"><input type="email" required className="form-input" placeholder="you@example.com" /></Field>
                <Field label="Phone"><input type="tel" className="form-input" placeholder="+1 555 555 5555" /></Field>
                <Field label="Message"><textarea required rows={4} className="form-input" placeholder="Tell us about your business..." /></Field>
                <button type="submit" className="btn-primary w-full">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section id="booking" className="py-16 bg-background border-t border-card-border">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
          <div className="card-dark text-center">
            <div className="text-muted-foreground mb-4">Interactive Map Would Be Displayed Here</div>
            <h3 className="text-2xl font-bold mb-2">Voice AI Agency Headquarters</h3>
            <p className="text-muted-foreground">Silicon Valley, CA 94025, USA</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold">Experience AI Phone Agent Today</h2>
          <p className="mt-5 text-muted-foreground text-lg">Transform your business communications with our cutting-edge Voice AI technology.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/pricing" className="btn-outline">View Pricing</Link>
            <a href="#booking" className="btn-primary">Book Your Free Strategy Call</a>
          </div>
        </div>
      </section>

      <style>{`
        .form-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          background: var(--secondary);
          border: 1px solid var(--card-border);
          color: var(--foreground);
          font-size: 0.875rem;
        }
        .form-input:focus { outline: none; border-color: var(--cyan); }
      `}</style>
    </PageShell>
  );
}

function ContactRow({ Icon, title, children }: { Icon: any; title: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-11 h-11 shrink-0 rounded-lg bg-cyan/10 border border-cyan/30 flex items-center justify-center">
        <Icon className="w-5 h-5 text-cyan" />
      </div>
      <div>
        <div className="font-semibold mb-1">{title}</div>
        {children}
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium mb-2">{label}</span>
      {children}
    </label>
  );
}
