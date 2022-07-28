import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// const apiKey = "Jvv2xYam8wnJU3pQpN2FTw";
// const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;
const apiKey = "bmbztViVUc97AWwZlZp7Dg";
const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

i18next
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "uz",

    ns: ["default"],
    defaultNS: "default",
    debug: false,  
    detection: {
      order: ["localStorage", "cookie"],
      caches: ["localStorage", "cookie"]
    },
    supportedLngs: ["uz", "en", "ru"],
    interpolation: {
      escapeValue: false
    },
    
    backend: {
      loadPath: loadPath
    }
  })

