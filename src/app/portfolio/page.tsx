import Section from "@/components/site/Section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const CASES = [
  { t: "Cardnd", d: "P2P car rentals — dynamic pricing, NAPS/Stripe, 99.9% uptime" },
  { t: "WashMinute", d: "On-demand car-wash SaaS — multi-role flows, RN mobile" },
  { t: "LunixRay", d: "Hybrid IT-audit — Python + OpenAI integration" },
];

export default function Portfolio() {
  return (
    <Section title="Case studies">
      <div className="grid md:grid-cols-3 gap-6">
        {CASES.map(c => (
          <Card key={c.t} className="shadow-soft">
            <CardHeader><CardTitle>{c.t}</CardTitle></CardHeader>
            <CardContent className="text-muted">{c.d}</CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
