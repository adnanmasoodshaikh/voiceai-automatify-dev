import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-card-border bg-background">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-[1.2fr_3fr] gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded border-2 border-cyan flex items-center justify-center text-cyan text-[8px] font-bold leading-tight text-center">
                AI<br />PHONE<br />AGENTS
              </div>
              <span className="text-cyan font-bold text-xl">AI Phone Agent</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Transform your business communications with our AI Phone Agent. Never miss a call, book appointments 24/7, and grow your business without adding stress.
            </p>
            <div className="space-y-2 text-sm">
              <div><span className="text-muted-foreground">USA: </span><a href="tel:+18773207259" className="text-cyan hover:text-cyan-glow">+1 877-320-7259</a></div>
              <div><span className="text-muted-foreground">Australia: </span><a href="tel:+61238213526" className="text-cyan hover:text-cyan-glow">+61 2 3821 3526</a></div>
              <div><span className="text-muted-foreground">Email: </span><a href="mailto:hello@aiphoneagent.ai" className="text-cyan hover:text-cyan-glow">hello@aiphoneagent.ai</a></div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            <Col title="Company">
              <FLink to="/">Home</FLink>
              <FLink to="/about">About Us</FLink>
              <FLink to="/features">Features</FLink>
              <FLink to="/pricing">Pricing</FLink>
              <FLink to="/contact">Contact</FLink>
              <FLink to="/faq">FAQ</FLink>
            </Col>
            <Col title="AI Solutions">
              <FLink to="/features">AI Phone Agent</FLink>
              <FLink to="/features">Virtual Receptionist</FLink>
              <FLink to="/features">Appointment Booking</FLink>
              <FLink to="/features">Call Recording</FLink>
              <FLink to="/features">SMS Automation</FLink>
              <FLink to="/features">Review Management</FLink>
            </Col>
            <Col title="Industries">
              <FLink to="/industries/dentists">Dentists</FLink>
              <FLink to="/industries/dentists">Medical Clinics</FLink>
              <FLink to="/industries/dentists">Legal Offices</FLink>
              <FLink to="/industries/dentists">Plumbers</FLink>
              <FLink to="/industries/dentists">HVAC Contractors</FLink>
              <FLink to="/industries/dentists">All Industries</FLink>
            </Col>
            <Col title="Locations & Support">
              <FLink to="/locations/usa">United States</FLink>
              <FLink to="/locations/usa">Australia</FLink>
              <FLink to="/locations/usa">New Zealand</FLink>
              <FLink to="/blog">Blog</FLink>
              <FLink to="/contact">Help Center</FLink>
              <FLink to="/contact">Schedule Demo</FLink>
            </Col>
          </div>
        </div>

        <div className="border-t border-card-border pt-8 flex flex-col lg:flex-row gap-6 items-center justify-between">
          <div className="flex flex-wrap gap-6 items-center text-sm">
            <span className="flex items-center gap-2">🔒 HIPAA Compliant</span>
            <span className="flex items-center gap-2">⭐ 4.9/5 Rating</span>
            <span className="flex items-center gap-2">📞 24/7 Support</span>
            <span className="flex items-center gap-2">🚀 Setup in 24 Hours</span>
          </div>
          <Link to="/contact" className="btn-primary text-sm">Get Started Today</Link>
        </div>

        <p className="mt-8 text-xs text-muted-foreground text-center lg:text-left">
          © 2025 AI Phone Agent. All rights reserved. Professional AI virtual receptionist and automated phone answering services for businesses nationwide.
        </p>
      </div>
    </footer>
  );
}

function Col({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-semibold mb-4 text-sm">{title}</h4>
      <ul className="space-y-2">{children}</ul>
    </div>
  );
}

function FLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link to={to} className="text-sm text-muted-foreground hover:text-cyan transition-colors">
        {children}
      </Link>
    </li>
  );
}
