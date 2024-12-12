import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import intervalPlural from "i18next-intervalplural-postprocessor";
import Backend from "i18next-http-backend";
import resourcesToBackend from "i18next-resources-to-backend";

export class Translator {
    public async init(lang: string) {
        await i18n
            .use(initReactI18next)
            .use(intervalPlural)
            .use(Backend)
            .use(resourcesToBackend((language: string, namespace: any) => {
                return import(`../lang/${language}.json`)
            }))
            .init({
                lng: lang,
                fallbackLng: "en",
                interpolation: {
                    escapeValue: false,
                },
            });
    }

    public changeLanguage(lng: string) {
        i18n.changeLanguage(lng)
    }
}

export default i18n;