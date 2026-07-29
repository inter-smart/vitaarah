import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getVisitorUUID() {
  if (typeof window === "undefined") return null;
  let uuid = localStorage.getItem("visitor_uuid");
  if (!uuid) {
    uuid = crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    localStorage.setItem("visitor_uuid", uuid);
  }
  return uuid;
}
