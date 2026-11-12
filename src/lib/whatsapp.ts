import { siteConfig } from "../config/siteConfig";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá! Vim pelo site CFTV Curitiba e gostaria de solicitar um orçamento de câmeras de segurança.";

export function buildWhatsAppUrl(message?: string): string {
  const text = message && message.trim().length > 0 ? message : DEFAULT_WHATSAPP_MESSAGE;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
