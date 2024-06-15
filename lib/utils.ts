import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString:string, locale:string) {
  return new Date(dateString).toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  })  
}