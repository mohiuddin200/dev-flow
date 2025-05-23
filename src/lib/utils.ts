import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { techMap } from "@/constants/techMap";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDeviconClassName = (name: string) => {
  const deviconName = name.toLowerCase().replace(/[ .]/g, "");

  return techMap[deviconName]
    ? `${techMap[deviconName]} colored`
    : "devicon-devicon-plain";
};
