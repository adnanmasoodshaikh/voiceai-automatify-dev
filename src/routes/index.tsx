import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { Features } from "@/components/site/Features";
import { Benefits } from "@/components/site/Benefits";
import { Comparison } from "@/components/site/Comparison";
import { Pricing } from "@/components/site/Pricing";
import { ROI } from "@/components/site/ROI";
import { Testimonials } from "@/components/site/Testimonials";
import { Demo } from "@/components/site/Demo";
import { Resources } from "@/components/site/Resources";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI Phone Agent - Never Miss Calls Again. Grow Your Business 24/7 with AI Receptionist." },
      { name: "description", content: "Our AI virtual receptionist handles calls 24/7, books appointments automatically, and captures every lead. Transform your business phone system with intelligent call automation that works while you sleep." },
      { property: "og:title", content: "AI Phone Agent - Never Miss Calls Again." },
      { property: "og:description", content: "AI virtual receptionist that handles calls 24/7, books appointments, and captures every lead." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <Hero />
      <Problem />
      <Features />
      <Benefits />
      <Comparison />
      <Pricing />
      <ROI />
      <Testimonials />
      <Demo />
      <Resources />
      <FinalCTA />
      <Footer />
    </main>
  );
}
