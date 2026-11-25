import { CarFront, Cog, Cpu, Gamepad2, Music2, ShieldCheck } from "lucide-react";
import type { CategoryId } from "@/data/projects";

export const categoryIcons: Record<CategoryId, typeof Cpu> = {
  "embedded-systems": Cpu,
  cybersecurity: ShieldCheck,
  engineering: Cog,
  auto: CarFront,
  "game-dev": Gamepad2,
  music: Music2,
};
