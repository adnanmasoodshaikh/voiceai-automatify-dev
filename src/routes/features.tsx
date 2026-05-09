import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Link } from "@tanstack/react-router";
import { Headphones, Calendar, MessageSquare, Mic, Star, Bell, Database, Share2, Lock, Shield, Globe, KeyRound, BadgeCheck, CreditCard } from "lucide-react";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Comprehensive AI Features for Modern Business — AI Phone Agent" },
      { name: "description", content: "Transform your business with our complete suite of AI-powered communication, customer service, and automation features." },
    ],
  }),
  component: FeaturesPage,
});

const featureSections = [
  {
    Icon: Headphones,
    title: "Virtual Receptionist",
    summary: "Transform your business communications with our advanced AI virtual receptionist that never sleeps, never takes a sick day, and treats every caller with the professionalism your business deserves.",
    bullets: [
      "Customized greeting protocols tailored to your brand voice and industry requirements",
      "Comprehensive FAQ handling system trained on your specific business knowledge base",
      "Intelligent call routing and transfer capabilities based on real-time availability",
      "Detailed message capture with complete caller information and conversation context",
      "Quality assurance protocols with continuous learning capabilities",
      "Multilingual support options to serve diverse customer bases",
      "Integration capabilities with existing business systems and CRM platforms",
    ],
  },
  {
    Icon: Calendar,
    title: "AI Appointment Booking",
    summary: "Revolutionize your scheduling operations with our sophisticated AI appointment booking system that eliminates the back-and-forth confusion of traditional scheduling.",
    bullets: [
      "Advanced calendar synchronization with Google Calendar, Outlook, and industry-specific systems",
      "Automated confirmation and communication workflows via email and SMS",
      "Intelligent reminder systems delivered via SMS, email, and voice calls",
      "Flexible rescheduling and cancellation management",
      "Smart scheduling optimization considering type, duration, and travel time",
      "Customer preference learning that remembers individual scheduling patterns",
      "Comprehensive reporting and analytics on booking patterns and no-show trends",
    ],
  },
  {
    Icon: MessageSquare,
    title: "AI SMS Texting",
    summary: "Meet your customers where they are with our advanced AI SMS texting system that provides instant, intelligent text message responses while you focus on running your business.",
    bullets: [
      "Lightning-fast response capabilities within seconds of customer inquiries",
      "Sophisticated conversation handling with context awareness across multi-message exchanges",
      "Intelligent escalation protocols when conversations require human intervention",
      "Proactive follow-up messaging for satisfaction checks and lead nurturing",
      "Comprehensive multilingual support for diverse customer bases",
      "Text message analytics and insights into engagement patterns",
      "Integration capabilities with existing CRM and marketing platforms",
    ],
  },
  {
    Icon: Mic,
    title: "Call Recording & Transcription",
    summary: "Unlock valuable business insights with our comprehensive call recording and transcription system that transforms every customer conversation into actionable intelligence.",
    bullets: [
      "Advanced searchable transcript database with intelligent indexing",
      "Sophisticated sentiment analysis evaluating customer emotions and satisfaction",
      "Intelligent keyword alerting for terms relevant to your business",
      "Comprehensive quality assurance monitoring tools",
      "Robust compliance management for HIPAA, PCI DSS, and data protection regulations",
      "Advanced analytics identifying trends in inquiries and resolution patterns",
      "Secure cloud storage with encryption and granular access controls",
    ],
  },
  {
    Icon: Star,
    title: "Automated Review Management",
    summary: "Strengthen your online reputation with our intelligent automated review management system that proactively generates positive reviews while professionally addressing negative feedback.",
    bullets: [
      "Strategic review request timing after positive customer interactions",
      "Professional negative review response management across all major platforms",
      "Intelligent feedback routing alerting management to critical issues",
      "Comprehensive review analytics and trend analysis",
      "Multi-platform optimization across Google, Yelp, Facebook, and industry sites",
      "Review generation campaign automation through preferred channels",
      "Response template customization with platform compliance",
    ],
  },
  {
    Icon: Bell,
    title: "Real-Time Notifications",
    summary: "Stay connected to your business with our intelligent real-time notification system that keeps you informed about critical interactions without overwhelming you with alerts.",
    bullets: [
      "Fully customizable notification preferences across email, SMS, app, or dashboard",
      "Intelligent priority-based alerting for emergency calls and high-value leads",
      "Comprehensive daily and weekly summary reports",
      "Advanced performance analytics and business intelligence",
      "Seamless integration with existing CRM and project management tools",
      "Smart escalation protocols based on response time and severity",
      "Mobile-optimized delivery with offline synchronization",
    ],
  },
  {
    Icon: Database,
    title: "Business CRM System",
    summary: "Transform your customer relationship management with our comprehensive CRM system that centralizes interactions, automates follow-ups, and provides powerful analytics.",
    bullets: [
      "Comprehensive customer interaction history across every touchpoint",
      "Intelligent automated follow-up sequences triggered by behavior",
      "Advanced lead scoring and qualification systems",
      "Comprehensive sales pipeline management tools",
      "Detailed performance reporting on lifetime value and conversion rates",
      "Seamless integration with accounting, email marketing, and calendars",
      "Mobile accessibility and cloud-based architecture",
    ],
  },
  {
    Icon: Share2,
    title: "Social Media AI Bot",
    summary: "Amplify your social media presence with our intelligent AI bot that manages your Facebook and Instagram interactions while maintaining authentic, professional communication.",
    bullets: [
      "Strategic automated post scheduling based on audience activity patterns",
      "Intelligent comment response management with brand-appropriate replies",
      "Professional direct message handling with seamless escalation",
      "AI-powered content suggestion engine analyzing trending topics",
      "Comprehensive social media analytics and performance tracking",
      "Brand voice consistency management across platforms",
      "Multi-platform integration with CRM and email marketing",
    ],
  },
];

const certifications = [
  { Icon: Shield, title: "HIPAA Compliant", note: "Protected Health Information secure handling and storage" },
  { Icon: BadgeCheck, title: "SOC 2 Type II", note: "Annual third-party audits verify security controls" },
  { Icon: Globe, title: "GDPR Compliant", note: "Data subject rights and consent management" },
  { Icon: KeyRound, title: "End-to-End Encryption", note: "AES-256 encryption for data at rest and in transit" },
  { Icon: Lock, title: "ISO 27001", note: "Comprehensive information security framework" },
  { Icon: CreditCard, title: "PCI DSS Level 1", note: "Secure handling of credit card information" },
];

const faqs = [
  { q: "How does the AI phone agent integrate with existing business phone systems?", a: "Our AI phone agent seamlessly integrates with all major phone systems including VoIP, traditional landlines, and cloud-based systems. Integration typically takes 24 hours and works with providers like RingCentral, Twilio, 8x8, and traditional carriers. No hardware changes are required." },
  { q: "Can the AI phone agent handle multiple calls simultaneously?", a: "Yes, our AI phone agent can handle unlimited concurrent calls without any degradation in service quality. Unlike human receptionists who can only handle one call at a time, the AI system scales automatically." },
  { q: "How accurate is the appointment booking feature?", a: "Our appointment booking system maintains 99.8% accuracy by integrating directly with your calendar system and following your specific business rules." },
  { q: "What happens if the AI phone agent doesn't understand a customer request?", a: "The AI phone agent is trained to recognize when it encounters questions beyond its scope and will seamlessly transfer the call to appropriate staff members with full context." },
  { q: "How customizable is the AI phone agent's personality and responses?", a: "Highly customizable. You can adjust the AI's personality, tone, greetings, and responses to match your brand voice across any industry." },
  { q: "Does the AI phone agent work during holidays and weekends?", a: "Yes, the AI phone agent operates 24/7/365 including all holidays and weekends with configurable after-hours protocols." },
  { q: "How does the AI phone agent handle sensitive or confidential information?", a: "Our AI follows strict security protocols including HIPAA, PCI DSS, and SOC 2 Type II standards, with encrypted communication and configurable transfer rules." },
  { q: "What kind of reporting and analytics does the AI phone agent provide?", a: "Comprehensive analytics including call volume, peak times, conversion rates, appointment booking success, common questions, satisfaction scores, and ROI metrics in dashboards with exportable reports." },
];

function FeaturesPage() {
  return (
    <PageShell>
      <PageHero
        title="Comprehensive AI Features for Modern Business"
        subtitle="Transform your business operations with our complete suite of AI-powered communication, customer service, and automation features. From virtual receptionist services to advanced CRM integration, discover how intelligent technology can streamline your operations, improve customer satisfaction, and drive sustainable business growth."
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-8 space-y-16">
          {featureSections.map(({ Icon, title, summary, bullets }, i) => (
            <div key={title} className={`grid lg:grid-cols-2 gap-10 items-start ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
              <div>
                <div className="w-14 h-14 rounded-lg bg-cyan/10 border border-cyan/30 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-cyan" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">{title}</h2>
                <p className="text-muted-foreground leading-relaxed">{summary}</p>
              </div>
              <ul className="card-dark space-y-3">
                {bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm leading-relaxed">
                    <span className="text-cyan mt-1 shrink-0">•</span>
                    <span className="text-foreground/90">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-background border-t border-card-border">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Enterprise Security & Compliance</h2>
            <p className="mt-4 text-muted-foreground">Your business data and customer information protected by industry-leading security standards.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map(({ Icon, title, note }) => (
              <div key={title} className="card-dark">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-cyan/10 border border-cyan/30 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-cyan" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">{title}</div>
                    <div className="text-cyan text-xs font-bold mb-2">✓ Certified</div>
                    <div className="text-xs text-muted-foreground">{note}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[900px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="mt-4 text-muted-foreground">Get detailed answers about our AI phone agent features and capabilities.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="card-dark group">
                <summary className="cursor-pointer font-semibold flex justify-between items-center">
                  <span>{f.q}</span>
                  <span className="text-cyan text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/contact" className="btn-primary">Book Your Free Strategy Call</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
