import CaseStudies from "@/components/site/CaseStudies";
import DomainsExpertise from "@/components/site/DomainsExpertise";
import Section from "@/components/site/Section";
import PortfolioHero from "@/components/site/PortfolioHero";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const CASES = [
  { t: "Cardnd", d: "P2P car rentals — dynamic pricing, NAPS/Stripe, 99.9% uptime" },
  { t: "WashMinute", d: "On-demand car-wash SaaS — multi-role flows, RN mobile" },
  { t: "LunixRay", d: "Hybrid IT-audit — Python + OpenAI integration" },
];

export default function Portfolio() {
  return (
    <>
     <PortfolioHero/>
              <CaseStudies/>
              <DomainsExpertise/>
              </>
    
             
   
  );
}
