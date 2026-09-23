import { useEffect, useState } from "react";
import { Languages } from "lucide-react";

type Language = "en" | "fr" | "es";

const languages: { code: Language; label: string; name: string }[] = [
  { code: "en", label: "EN", name: "English" },
  { code: "fr", label: "FR", name: "Français" },
  { code: "es", label: "ES", name: "Español" },
];

function setTranslationCookie(language: Language) {
  const value = `/fr/${language}`;
  document.cookie = `googtrans=${value};path=/;SameSite=Lax`;
  const hostname = window.location.hostname;
  if (hostname.includes(".")) {
    document.cookie = `googtrans=${value};path=/;domain=.${hostname};SameSite=Lax`;
  }
}

export function LanguageSelector({ mobile = false }: { mobile?: boolean }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("site-language");
    const selected: Language = saved === "fr" || saved === "es" ? saved : "en";
    setLanguage(selected);
    document.documentElement.lang = selected;
    setTranslationCookie(selected);
  }, []);

  function changeLanguage(next: Language) {
    window.localStorage.setItem("site-language", next);
    document.documentElement.lang = next;
    setTranslationCookie(next);

    const googleSelect = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (googleSelect) {
      googleSelect.value = next === "fr" ? "fr" : next;
      googleSelect.dispatchEvent(new Event("change"));
      setLanguage(next);
      return;
    }

    window.location.reload();
  }

  return (
    <div
      className={`notranslate ${mobile ? "flex items-center gap-2 py-2" : "hidden items-center gap-2 md:flex"}`}
      translate="no"
      aria-label="Language"
    >
      <Languages className="size-4 shrink-0 text-primary" aria-hidden="true" />
      <div className="flex rounded-md border border-border bg-card p-0.5">
        {languages.map((item) => (
          <button
            key={item.code}
            type="button"
            onClick={() => changeLanguage(item.code)}
            aria-label={`View in ${item.name}`}
            aria-pressed={language === item.code}
            className={`min-h-9 min-w-10 rounded px-2 text-xs font-semibold transition-colors ${
              language === item.code
                ? "bg-primary text-primary-foreground"
                : "text-foreground hover:bg-secondary"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}