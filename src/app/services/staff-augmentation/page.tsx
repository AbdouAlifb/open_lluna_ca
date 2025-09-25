// app/services/staff-augmentation/page.tsx
import StaffAugmentationClient from "./StaffAugmentationClient";

export const metadata = {
  title: "IT Staff Augmentation | Open Lluna",
  description:
    "On-demand expert teams: engineers, designers, QA, DevOps—embedded with your workflow and SLAs.",
};

export default function Page() {
  return <StaffAugmentationClient />;
}
