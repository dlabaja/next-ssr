import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import intervalPlural from "i18next-intervalplural-postprocessor";
import Backend from "i18next-http-backend";
import resourcesToBackend from "i18next-resources-to-backend";

export class Translator {

    public changeLanguage(lng: string) {
        i18n.changeLanguage(lng)
    }
}

export default i18n;