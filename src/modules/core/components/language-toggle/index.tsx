import "./index.css";
import React from "react";
import { spaceJoin } from "../../utils";
import { getLanguage, getSupportedLanguages, setLanguage } from "../../services/language";

// This components toggles the language
// Since it is a toggle, only two languages are supported by it
// If ever we need to support more languages, we will need to change it
// to a language picker in a list of languages

interface Props {
  style?: React.CSSProperties;
  className?: string;
}

export default function LanguageToggle(props: Props) {
  function getNextLanguage(): string {
    const languages = getSupportedLanguages();

    const firstLang = languages[0];
    const secondLang = languages[1];

    if (getLanguage() === firstLang) {
      return secondLang;
    }

    return firstLang;
  }

  function toggleLanguage() {
    setLanguage(getNextLanguage());
  }

  return (
    <span
      style={props.style}
      className={spaceJoin("language-toggle", props.className)}
      onClick={toggleLanguage}
    >
      {`${getNextLanguage().toUpperCase()}`}
    </span>
  );
}
