import { Headphones, Calendar, MessageSquare, Mic, CheckCircle, Bell } from "lucide-react";

const features = [
  { Icon: Headphones, title: "Virtual Receptionist", desc: "Our AI handles all incoming calls 24/7, routing urgent calls to your team and managing routine inquiries automatically." },
  { Icon: Calendar, title: "AI Appointment Booking", desc: "Let callers book appointments directly into your calendar, eliminating scheduling back-and-forth." },
  { Icon: MessageSquare, title: "AI SMS Texting", desc: "Automated follow-ups and reminders via text messaging keep your clients engaged and reduce no-shows." },
  { Icon: Mic, title: "Call Recording", desc: "Every call is recorded and transcribed, giving you valuable insights and training material." },
  { Icon: CheckCircle, title: "Automate Reviews", desc: "Generate more positive Google reviews automatically after successful appointments or calls." },
  { Icon: Bell, title: "Real-Time Notification", desc: "Get instant alerts about important calls, new bookings, or urgent matters that need your attention." },
];

export function Features() {
  return (
    <section id="features" className="py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Powerful Features That Drive Results
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Our AI Phone Agent comes fully equipped with everything you need to transform your business communications and boost your bottom line.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ Icon, title, desc }) => (
            <div key={title} className="card-dark">
              <div className="w-14 h-14 rounded-lg bg-cyan/10 border border-cyan/30 flex items-center justify-center mb-5">
                <Icon className="w-7 h-7 text-cyan" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
