import i18n from "i18next";

export function getLanguage(): string {
  return i18n.language;
}

export function setLanguage(lang: string) {
  i18n.changeLanguage(lang);
  localStorage.setItem("lang", lang);
}

export function getSupportedLanguages(): readonly string[] {
  return i18n.languages;
}

const languageService = {
  getLanguage,
  setLanguage,
  getSupportedLanguages,
};

export default languageService;
