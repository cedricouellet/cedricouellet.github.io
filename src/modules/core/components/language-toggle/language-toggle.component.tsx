import "./language-toggle.component.css";
import React from "react";
import { spaceJoin } from "../../utils";
import { LanguageService } from "../../services";

// This components toggles the language
// Since it is a toggle, only two languages are supported by it
// If ever we need to support more languages, we will need to change it
// to a language picker in a list of languages

interface IProps {
  style?: React.CSSProperties;
  className?: string;
}

export default function LanguageToggle(props: IProps) {
  function getNextLanguage(): string {
    const languages = LanguageService.getSupportedLanguages();

    const firstLang = languages[0];
    const secondLang = languages[1];

    if (LanguageService.getLanguage() === firstLang) {
      return secondLang;
    }

    return firstLang;
  }

  function toggleLanguage() {
    LanguageService.setLanguage(getNextLanguage());
  }

  return (
    <span
      style={props.style}
      className={spaceJoin("language-toggle", props.className)}
      onClick={toggleLanguage}
    >
      {`[${getNextLanguage().toUpperCase()}]`}
    </span>
  );
}
