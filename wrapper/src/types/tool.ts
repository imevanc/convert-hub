import { FC } from "react";

export type Tool = {
  id: number;
  name: string;
  icon: FC<{ className?: string }>;
  description: string;
  color: "green" | "blue";
};
