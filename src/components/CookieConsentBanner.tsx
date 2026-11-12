import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie } from "lucide-react";
import { siteConfig, hasValue } from "../config/siteConfig";
import {
  getConsent,
  saveConsent,
  initGTM,
  OPEN_PREFS_EVENT,
} from "../utils/analytics";

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!hasValue(siteConfig.gtmId)) return;
    const c = getConsent();
    if (c === "granted") {
      initGTM();
    } else if (c === null) {
      setVisible(true);
    }

    const handleOpenPrefs = () => setVisible(true);
    window.addEventListener(OPEN_PREFS_EVENT, handleOpenPrefs);
    return () => {
      window.removeEventListener(OPEN_PREFS_EVENT, handleOpenPrefs);
    };
  }, []);

  const handleAccept = () => {
    saveConsent("granted");
    initGTM();
    window.dataLayer?.push({ event: "cookie_consent_granted" });
    setVisible(false);
  };

  const handleDecline = () => {
    const wasGranted = getConsent() === "granted";
    saveConsent("denied");
    setVisible(false);
    if (wasGranted) {
      window.location.reload();
    }
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-800 bg-ink-900/95 p-4 text-slate-200 shadow-2xl backdrop-blur-md sm:p-6"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex max-w-3xl items-start gap-3.5">
          <div className="mt-0.5 shrink-0 rounded-xl border border-electric/30 bg-electric/10 p-2.5 text-glow">
            <Cookie className="h-5 w-5" />
          </div>
          <div>
            <p className="mb-1 text-sm font-bold text-white">Privacidade e cookies (LGPD)</p>
            <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
              Usamos cookies de análise (Google Tag Manager e ferramentas de medição) para entender como o site é usado e melhorá-lo. Eles só são ativados se você aceitar. Saiba mais na <Link to="/politica-de-privacidade/" className="text-glow underline hover:no-underline">Política de privacidade</Link>.
            </p>
          </div>
        </div>
        <div className="flex w-full shrink-0 items-center justify-end gap-3 md:w-auto">
          <button
            type="button"
            onClick={handleDecline}
            className="w-full rounded-xl border border-slate-700 bg-ink-800 px-4 py-2.5 text-sm font-semibold text-slate-200 transition-all hover:bg-slate-800 sm:w-auto"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="w-full rounded-xl bg-electric-700 px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-electric-600 sm:w-auto"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
