"use client";
import { useTheme } from "next-themes";
import { Paintbrush } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const next = theme === "brand" ? "light" : "brand";
  return (
    <Button
      variant="outline"
      onClick={() => setTheme(next)}
      className="rounded-2xl"
      title="Switch theme"
    >
      <Paintbrush className="mr-2 h-4 w-4" />
      {next === "brand" ? "Brand mode" : "Light mode"}
    </Button>
  );
}
