import "./index.css";
import React from "react";
import { useTranslation } from "react-i18next";
import { spaceJoin } from "../../utils";

// This components toggles the language
// Since it is a toggle, only two languages are supported by it
// If ever we need to support more languages, we will need to change it
// to a language picker in a list of languages

type Props = {
    style?: React.CSSProperties,
    className?: string,
}

export default function LanguageToggle(props: Props) {
  const { i18n } = useTranslation();

  function getNextLanguage() {
    const firstLang = i18n.languages[0];
    const secondLang = i18n.languages[1];

    if (i18n.language === firstLang) {
      return secondLang;
    }

    return firstLang;
  }

  function toggleLanguage() {
    i18n.changeLanguage(getNextLanguage());
  }

  return (
    <button style={props.style} className={spaceJoin("language-toggle", props.className)} onClick={toggleLanguage}>{getNextLanguage().toUpperCase()}</button>
  );
}
