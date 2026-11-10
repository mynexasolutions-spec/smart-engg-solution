import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function telHref(phone: string) {
  return `tel:+91${phone.replace(/\D/g, "")}`;
}

export function displayPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  if (digits.length !== 10) return phone;
  return `${digits.slice(0, 5)} ${digits.slice(5)}`;
}

export function whatsappHref(message?: string) {
  const base = "https://wa.me/918840390617";
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function mapsHref(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function mailHref(email: string) {
  return `mailto:${email}`;
}

export function formatDate(date: Date = new Date()) {
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
