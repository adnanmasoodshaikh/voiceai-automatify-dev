import problemImg from "@/assets/problem-missed-calls.jpg";
import { Phone, PhoneOff, User, Clock } from "lucide-react";

const problems = [
  { Icon: Phone, title: "Missed Calls", desc: "Every missed call is a potential customer lost to your competition." },
  { Icon: PhoneOff, title: "Repetitive Questions", desc: "Answering the same basic questions drains your time and energy." },
  { Icon: User, title: "Low Google Reviews", desc: "Poor phone experiences lead to fewer positive reviews and damaged reputation." },
  { Icon: Clock, title: "Lost Time & Money", desc: "Your phone system should be making you money, not draining your resources." },
];

export function Problem() {
  return (
    <section id="problem" className="py-20 lg:py-28 bg-background">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            You're Losing Money And Don't Even Know!
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Your current phone system is likely costing you thousands in lost leads and wasted time.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {problems.map(({ Icon, title, desc }) => (
            <div key={title} className="card-dark text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-cyan/10 border border-cyan/30 flex items-center justify-center mb-5">
                <Icon className="w-7 h-7 text-cyan" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold leading-tight">
              What if your phone system worked like your best employee—but better?
            </h3>
            <p className="mt-5 text-muted-foreground text-base lg:text-lg leading-relaxed">
              Transform your business communications with our AI Phone Agent. It handles calls 24/7, books appointments,
              answers FAQs, and helps you never miss another opportunity again.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-card-border">
            <img
              src={problemImg}
              alt="Business professional frustrated by missed calls and lost opportunities"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
