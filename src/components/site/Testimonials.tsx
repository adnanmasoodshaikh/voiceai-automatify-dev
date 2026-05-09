const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Dental Office Manager",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=faces&auto=format&q=80",
    quote: "We were missing 5-6 calls daily during busy periods. The Voice AI Agent has captured those calls, scheduled appointments, and increased our revenue by over $10,000 per month!",
  },
  {
    name: "Michael Rodriguez",
    role: "Plumbing Company Owner",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces&auto=format&q=80",
    quote: "As a service business, calls are everything. This AI system has been a game-changer - it's like having a perfect receptionist that works 24/7 and never complains. Our Google reviews have doubled since implementing it.",
  },
  {
    name: "Jennifer Lewis",
    role: "Spa Director",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces&auto=format&q=80",
    quote: "The Voice AI Agency delivered exactly what they promised. Our calls are handled professionally, appointments are booked accurately, and I've reclaimed hours of my week. Worth every penny!",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">What Our Clients Say</h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Join hundreds of businesses already transforming their communications with our AI Phone Agent.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="card-dark">
              <img src={t.img} alt={`${t.name} - ${t.role}`} className="w-20 h-20 rounded-full object-cover mb-5" loading="lazy" />
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <div className="text-cyan text-sm mb-3">{t.role}</div>
              <div className="text-yellow-400 mb-4">★★★★★</div>
              <p className="text-sm text-muted-foreground leading-relaxed italic">"{t.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
