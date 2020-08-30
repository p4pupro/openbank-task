import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locale/en.json";
import translationES from "./locale/es.json";
import LanguageDetector from "i18next-browser-languagedetector";
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      es: {
        translation: translationES,
      },
      lng: "en",
      fallbackLng: "en",

      interpolation: {
        escapeValue: false,
      },
    },
  });

export default i18n;
