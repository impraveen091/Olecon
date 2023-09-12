// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from "./public/en.json";
import hnTranslation from "./public/hn.json";
import bnTranslation from "./public/bn.json";
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      hn: {
        translation: hnTranslation,
      },
      bn: {
        translation: bnTranslation,
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;
