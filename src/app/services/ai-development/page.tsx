// app/services/ai-development/page.tsx
import AIDevelopmentClient from "./AIDevelopmentClient";

export const metadata = {
  title: "AI Development | Open Lluna",
  description:
    "RAG, agents, evaluations, safety, and production-grade AI systems wired to your data.",
};

export default function Page() {
  return <AIDevelopmentClient />;
}
