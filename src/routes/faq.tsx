import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions — AI Phone Agent" },
      { name: "description", content: "Everything you need to know about AI phone agents and our service." },
    ],
  }),
  component: FAQPage,
});

const faqs = [
  { q: "What is an AI phone agent?", a: "An AI phone agent is an artificial intelligence system that answers your business phone calls 24/7. Our AI receptionist handles calls professionally, answers common questions, books appointments, and routes urgent calls to the right person. It works like a human receptionist but never takes breaks, sick days, or vacations." },
  { q: "How much does an AI phone agent cost?", a: "Our AI phone agent service starts at $499 per month, which is significantly less than hiring a full-time receptionist (typically $3,000-$4,500 monthly). You get 24/7 coverage, unlimited concurrent calls, and no additional costs for training, benefits, or sick days." },
  { q: "Can AI really answer business phone calls effectively?", a: "Yes! Our AI phone agent is trained specifically for business communications. It can handle appointment booking, answer FAQs, take detailed messages, and route calls intelligently. The AI understands context and can have natural conversations while maintaining professionalism." },
  { q: "How does AI appointment booking work?", a: "Our AI appointment booking system integrates with your calendar and can schedule appointments in real-time during phone calls. Callers can choose available time slots, receive confirmation messages, and get automated reminders. The AI handles rescheduling and cancellations too." },
  { q: "Is an AI phone agent better than a human receptionist?", a: "AI phone agents offer several advantages: 24/7 availability, consistent professional service, no sick days or vacations, lower cost, and ability to handle unlimited concurrent calls. However, they work best alongside humans for complex issues that require empathy and nuanced judgment." },
  { q: "What businesses need AI phone agents?", a: "Any business that receives phone calls can benefit from AI phone agents. They're especially valuable for dentists, plumbers, contractors, real estate agents, medical clinics, salons, spas, and service businesses that get calls outside business hours or during busy periods." },
  { q: "How do I set up an AI phone answering system?", a: "Setting up our AI phone agent is simple: 1) Contact us for a free consultation, 2) We customize the AI for your business needs, 3) Forward your calls to our system, 4) The AI starts handling calls immediately. Setup typically takes 1-2 business days with full support from our team." },
  { q: "Will an AI phone agent work for my industry?", a: "Our AI phone agents work across many industries including healthcare, home services, professional services, retail, and more. We customize the AI's responses and capabilities for your specific business type, ensuring industry-appropriate communication and compliance with relevant regulations." },
  { q: "What happens to calls the AI can't handle?", a: "When the AI encounters complex issues or urgent situations, it seamlessly transfers calls to designated team members. You can set custom rules for what should be escalated. The AI also takes detailed messages and sends real-time notifications for important calls." },
  { q: "Can the AI phone agent integrate with my existing systems?", a: "Yes! Our AI phone agent integrates with popular CRM systems, calendars (Google Calendar, Outlook), and business tools. We also provide APIs for custom integrations and can sync with your existing workflows and databases." },
  { q: "How accurate is AI call recording and transcription?", a: "Our AI provides highly accurate call recording and transcription (95%+ accuracy). Every call is automatically recorded, transcribed, and searchable. You can review conversations, analyze customer needs, and use the data for training and quality improvement." },
  { q: "Does the AI phone agent support multiple languages?", a: "Yes, our AI phone agent can be configured to handle multiple languages based on your customer base. This is particularly valuable for businesses serving diverse communities or operating in multilingual markets." },
  { q: "What's the difference between AI phone agents and traditional voicemail?", a: "Traditional voicemail just records messages, while AI phone agents have interactive conversations, answer questions in real-time, book appointments, and provide immediate assistance. Customers get instant help instead of waiting for callbacks, resulting in higher satisfaction and conversion rates." },
  { q: "How quickly can an AI phone agent start working for my business?", a: "Most businesses can have their AI phone agent operational within 1-2 business days. This includes customizing the AI for your business, setting up call routing, integrating with your calendar, and training the system on your specific FAQs and procedures." },
  { q: "Is my customer data secure with an AI phone agent?", a: "Absolutely. We use enterprise-grade security measures including encrypted data transmission, secure cloud storage, and compliance with privacy regulations like HIPAA (for healthcare) and GDPR. Your customer data is protected with the same standards used by major corporations." },
];

function FAQPage() {
  return (
    <PageShell>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about AI phone agents and our service"
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="mt-3 text-muted-foreground">Get answers to common questions about AI phone agents and our service</p>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="card-dark group">
                <summary className="cursor-pointer font-semibold flex justify-between items-center gap-4">
                  <span>{f.q}</span>
                  <span className="text-cyan text-2xl group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background border-t border-card-border">
        <div className="max-w-3xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-muted-foreground mb-8">Our team is here to help! Book a free consultation to learn how our AI phone agent can transform your business communications.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">Book Your Free Strategy Call</Link>
            <Link to="/features" className="btn-outline">Explore Features</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
