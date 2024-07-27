import i18n from "i18next";

const localStorageKey = "lang";
const defaultLanguage = "en";

export function getLanguage(): string {
  let language: string | null = i18n.language;

  if (language === undefined) {
    language = localStorage.getItem(localStorageKey);
  }

  if (language === undefined) {
    language = defaultLanguage;
    localStorage.setItem(localStorageKey, language);
  }

  return language!;
}

export function setLanguage(lang: string) {
  localStorage.setItem(localStorageKey, lang);
  i18n.changeLanguage(lang);
}

export function getSupportedLanguages(): readonly string[] {
  return i18n.languages;
}

const LanguageService = {
  getLanguage,
  setLanguage,
  getSupportedLanguages,
};

export default LanguageService;
