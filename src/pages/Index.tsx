import React from 'react';
import { motion } from 'framer-motion';
import ThemeSwitcher from '@/components/ui/ThemeSwitcher';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import heroCar from '@/assets/hero-car.jpg';
import engine from '@/assets/engine.jpg';

const ease = [0.25, 0.1, 0.25, 1] as const;

const flow = ['Vehicle data', 'Analyze', 'Health score', 'Predict', 'Detect', 'Estimate cost', 'Remind', 'Maintain'];

const features = [
  { n: '01', title: 'Health Score', text: 'One clear 0–100 score with a breakdown for engine, brakes, battery, tyres and fluids — and the reasons behind every point.' },
  { n: '02', title: 'Symptom Check', text: 'Describe a problem in plain words — "brake feels weak" — and get the top 3 likely causes with a short explanation.' },
  { n: '03', title: 'Predictive Maintenance', text: 'See what is due next, by date and by kilometres, based on how you actually drive.' },
  { n: '04', title: 'Urgency & Cost', text: 'Every issue is marked Low, Medium or High urgency with an approximate cost range in ₹.' },
  { n: '05', title: 'Smart Reminders', text: 'Oil, brakes, battery, tyres, filters, insurance and PUC — reminded when they are actually due.' },
  { n: '06', title: 'Health Report', text: 'A single printable report you can show your mechanic.' },
];

const bands = [
  { range: '80–100', label: 'Good' },
  { range: '60–79', label: 'Fair' },
  { range: '40–59', label: 'Poor' },
  { range: '< 40', label: 'Critical' },
];

const Index: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-background relative z-[1] mb-[200px] md:mb-[120px]">
        <ThemeSwitcher />
        <div className="max-w-[1380px] mx-auto px-6">
          <header className="relative flex w-full items-center justify-between py-4 border-b border-muted">
            <a href="#hero" className="text-2xl md:text-4xl font-bold tracking-tight text-foreground">AUTOVITA</a>
            <div className="hidden md:block text-sm font-semibold text-foreground">AI Vehicle Health & Maintenance</div>
            <a href="#cta" className="px-3 py-2 bg-foreground text-background text-sm font-medium rounded-[4px] hover:opacity-80 transition-opacity mr-12 md:mr-16">Get started</a>
          </header>

          <main>
            <section id="hero" className="w-full pt-20 pb-16">
              <div className="flex flex-wrap items-start justify-between gap-10">
                <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }}
                  className="text-hero-sm md:text-hero-md lg:text-hero font-semibold text-foreground">
                  Know your car <br />before it breaks.
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease }}
                  className="text-subheading-sm md:text-subheading-md lg:text-subheading font-medium text-foreground max-w-[468px]">
                  Turn mileage, service history and symptoms into a simple health report and maintenance plan.
                </motion.p>
              </div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-wrap justify-between gap-10 mt-28 text-sm max-md:mt-10">
                {[{ a: 'Health Score', b: '0–100, explained' }, { a: 'Diagnosis', b: 'Top 3 likely causes' }, { a: 'Cost', b: 'Estimates in ₹' }].map((s) => (
                  <div key={s.a}>
                    <div className="font-bold text-foreground">{s.a}</div>
                    <div className="font-medium text-muted-foreground">{s.b}</div>
                  </div>
                ))}
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.5, ease }} className="mt-6 w-full">
                <img src={heroCar} alt="Car in a clean garage" className="w-full h-auto object-cover grayscale" />
              </motion.div>
            </section>

            <section id="problem" className="w-full py-16 border-t border-muted">
              <AnimatedSection className="grid md:grid-cols-2 gap-10">
                <h2 className="text-[32px] font-semibold text-foreground">The problem</h2>
                <p className="text-heading-sm md:text-heading-md font-semibold text-foreground">
                  Most owners fix problems after they happen. Missed services and ignored warning signs lead to breakdowns, expensive repairs and a shorter vehicle life.
                </p>
              </AnimatedSection>
            </section>

            <section id="features" className="w-full py-16 border-t border-muted">
              <AnimatedSection><h2 className="text-[32px] font-semibold text-foreground mb-10">What it does</h2></AnimatedSection>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
                {features.map((f, i) => (
                  <AnimatedItem key={f.n} delay={i * 0.05} className="border-t border-foreground pt-4">
                    <div className="text-xs font-medium text-muted-foreground">{f.n}</div>
                    <h3 className="text-lg font-semibold text-foreground mt-2">{f.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-[21px]">{f.text}</p>
                  </AnimatedItem>
                ))}
              </div>
            </section>

            <section id="how" className="w-full py-16 border-t border-muted">
              <AnimatedSection><h2 className="text-[32px] font-semibold text-foreground mb-10">How it works</h2></AnimatedSection>
              <div className="flex flex-wrap gap-3">
                {flow.map((step, i) => (
                  <AnimatedItem key={step} delay={i * 0.05} className="flex items-center gap-3">
                    <span className="px-4 py-2 border border-foreground/20 rounded-[4px] text-sm font-medium text-foreground">
                      <span className="text-muted-foreground mr-2">{i + 1}</span>{step}
                    </span>
                    {i < flow.length - 1 && <span className="text-muted-foreground">→</span>}
                  </AnimatedItem>
                ))}
              </div>
            </section>

            <section id="score" className="w-full py-16 border-t border-muted">
              <div className="grid md:grid-cols-2 gap-10 items-start">
                <AnimatedSection>
                  <img src={engine} alt="Checking a car engine" className="w-full md:max-w-[412px] h-[480px] object-cover grayscale" />
                </AnimatedSection>
                <AnimatedSection delay={0.1}>
                  <h2 className="text-[32px] font-semibold text-foreground">One score. Every reason.</h2>
                  <p className="text-sm text-muted-foreground mt-2 leading-[21px] max-w-[420px]">
                    Each deduction is shown in plain language, like "−12 points: oil change overdue by 3,200 km."
                  </p>
                  <div className="mt-8 divide-y divide-muted border-y border-muted">
                    {bands.map((b) => (
                      <div key={b.label} className="flex justify-between py-4 text-sm">
                        <span className="font-semibold text-foreground">{b.label}</span>
                        <span className="font-medium text-muted-foreground">{b.range}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 p-4 border border-foreground/20 rounded-[4px] text-sm">
                    <div className="font-semibold text-foreground">Example: Brake pad wear</div>
                    <div className="text-muted-foreground mt-1">₹2,000 – ₹4,000 · Urgency: Medium</div>
                    <div className="text-xs text-muted-foreground mt-2 italic">Estimate only — not an exact quotation.</div>
                  </div>
                </AnimatedSection>
              </div>
            </section>

            <section id="cta" className="w-full py-16 border-t border-b border-muted">
              <AnimatedSection className="flex flex-col items-center text-center">
                <h2 className="text-[32px] font-semibold text-foreground">Prevent, don't repair.</h2>
                <p className="text-sm text-muted-foreground leading-[21px] max-w-[320px] mt-2">
                  Add your vehicle and get your first health report in under 3 minutes.
                </p>
                <button className="mt-8 px-3 py-2 bg-foreground text-background text-sm font-medium rounded-[4px] hover:opacity-80 transition-opacity">
                  Coming soon
                </button>
                <p className="text-xs text-muted-foreground max-w-[520px] mt-10">
                  Informational guidance only. Diagnoses are possible causes and costs are approximate. Always consult a qualified mechanic before repairs.
                </p>
              </AnimatedSection>
            </section>
          </main>
        </div>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 py-6 bg-foreground text-background z-[-1]">
        <div className="max-w-[1380px] mx-auto px-6">
          <div className="flex justify-between items-center text-sm font-semibold">
            <span className="text-[18px] font-bold tracking-tight">AUTOVITA</span>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:opacity-70 transition-opacity">Back to Top</button>
          </div>
          <div className="mt-6 text-sm opacity-70">© {new Date().getFullYear()} AutoVita · A mini project by Syed</div>
        </div>
      </footer>
    </>
  );
};

export default Index;
