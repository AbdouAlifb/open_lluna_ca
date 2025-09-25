// app/services/mobile-development/page.tsx
import MobileDevelopmentClient from "./MobileDevelopmentClient";

export const metadata = {
  title: "Mobile Development | Open Lluna",
  description: "iOS & Android apps with React Native/Expo, native modules, CI/CD, OTA, analytics.",
};

export default function Page() {
  return <MobileDevelopmentClient />;
}