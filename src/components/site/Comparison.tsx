const rows = [
  ["24/7 Availability", false, false, true],
  ["Answer Customer Questions", false, true, true],
  ["Book Appointments", false, true, true],
  ["Automated Follow-ups", false, false, true],
  ["Call Recording & Insights", false, false, true],
  ["Review Generation", false, false, true],
];

export function Comparison() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Compare Your Options
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            See how our AI Agent stacks up against traditional solutions.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-card-border">
          <table className="w-full">
            <thead>
              <tr className="bg-card">
                <th className="text-left p-5 font-semibold">Features</th>
                <th className="p-5 font-semibold text-muted-foreground">Traditional Voicemail</th>
                <th className="p-5 font-semibold text-muted-foreground">Hiring an Assistant</th>
                <th className="p-5 font-semibold text-cyan">AI Agent</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, a, b, c], i) => (
                <tr key={i as number} className="border-t border-card-border">
                  <td className="p-5 font-medium">{label as string}</td>
                  <td className="p-5 text-center text-2xl">{a ? <span className="text-cyan">✓</span> : <span className="text-destructive">✕</span>}</td>
                  <td className="p-5 text-center text-2xl">{b ? <span className="text-cyan">✓</span> : <span className="text-destructive">✕</span>}</td>
                  <td className="p-5 text-center text-2xl bg-cyan/5">{c ? <span className="text-cyan">✓</span> : <span className="text-destructive">✕</span>}</td>
                </tr>
              ))}
              <tr className="border-t border-card-border bg-card/50">
                <td className="p-5 font-semibold">Monthly Cost</td>
                <td className="p-5 text-center font-semibold">Free/Low Cost</td>
                <td className="p-5 text-center font-semibold">$3,000 - $4,500</td>
                <td className="p-5 text-center font-bold text-cyan text-lg bg-cyan/5">$499</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
