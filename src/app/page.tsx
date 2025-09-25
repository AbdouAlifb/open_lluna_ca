import Hero from "@/components/site/Hero";
import Section from "@/components/site/Section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import LlunaAIPanel from "@/components/site/LlunaAIPanel";
import ServicesCarousel from "@/components/site/ServicesCarousel";
import DomainsExpertise from "@/components/site/DomainsExpertise";
import HowWeWork from "@/components/site/HowWeWork";
import CaseStudies from "@/components/site/CaseStudies";
import BusinessCalloutCard from "@/components/site/BusinessCalloutCard";


export default function Home() {
  
  return (
    <>
      <Hero />
      <LlunaAIPanel />
        <ServicesCarousel /> 

      <DomainsExpertise />
           <HowWeWork />
           <CaseStudies/>
           <BusinessCalloutCard/>
      {/* Portfolio teaser
      <Section title="Portfolio">
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <Card key={i} className="shadow-soft">
              <CardHeader><CardTitle>Case Study #{i}</CardTitle></CardHeader>
              <CardContent className="text-muted">
                Problem → Solution → KPI impact. Click to read more.
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      {/* <Section title="Ready to build?">
        <div className="flex flex-wrap gap-3">
          <a href="/contact" className="inline-flex items-center rounded-2xl px-5 py-3 bg-[var(--fg)] text-[var(--btn-fg)] font-medium">
            Enquiry us
          </a>
          <a href="/portfolio" className="inline-flex items-center rounded-2xl px-5 py-3 border">
            See our work
          </a>
        </div>
      </Section> 
       */}
    </>
  );
}
