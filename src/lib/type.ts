import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export type CustomLayoutProps = Readonly<{
  children: ReactNode;
}>;

export type AdvantageCardType = {
  id: number;
  icon: LucideIcon;
  heading: string;
  description: string;
};
