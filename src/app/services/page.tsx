import Section from "@/components/site/Section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import ServicesCarousel from "@/components/site/ServicesCarousel";
import ServicesHero from "@/components/site/ServicesHero";
import CaseStudies from "@/components/site/CaseStudies";
import DomainsExpertise from "@/components/site/DomainsExpertise";


export default function Services() {
  return (
    <>
                <ServicesHero/>
                <ServicesCarousel  />
                <DomainsExpertise/>
      
    </>
  );
}
