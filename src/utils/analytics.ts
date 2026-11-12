declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

import { siteConfig, hasValue } from "../config/siteConfig";

export const CONSENT_KEY = "cookie_consent";
export const OPEN_PREFS_EVENT = "open-cookie-preferences";
export type Consent = "granted" | "denied" | null;

export function isBrowser(): boolean {
  return typeof window !== "undefined" && typeof document !== "undefined";
}

export function isBot(): boolean {
  if (!isBrowser()) return true;
  if (navigator.webdriver === true) return true;
  if (/HeadlessChrome/i.test(navigator.userAgent)) return true;
  return false;
}

export function getConsent(): Consent {
  if (!isBrowser()) return null;
  try {
    const val = window.localStorage.getItem(CONSENT_KEY);
    if (val === "granted" || val === "denied") return val;
    return null;
  } catch {
    return null;
  }
}

export function saveConsent(v: "granted" | "denied"): void {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(CONSENT_KEY, v);
  } catch {
    // Ignore storage errors in private browsing/sandboxed environments
  }
}

export function isGtmLoaded(): boolean {
  return isBrowser() && document.getElementById("gtm-script") !== null;
}

export function initGTM(): void {
  if (!isBrowser()) return;
  if (!hasValue(siteConfig.gtmId)) return;
  if (!/^GTM-[A-Z0-9]{4,10}$/.test(siteConfig.gtmId)) return;
  if (isBot()) return;
  if (isGtmLoaded()) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    "gtm.start": new Date().getTime(),
    event: "gtm.js",
  });

  const script = document.createElement("script");
  script.id = "gtm-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${siteConfig.gtmId}`;
  document.head.appendChild(script);
}

export function trackPageview(path: string, title: string): void {
  if (!isGtmLoaded()) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "pageview",
    page_path: path,
    page_title: title,
    page_location: window.location.href,
  });
}
