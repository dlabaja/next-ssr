import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import resourcesToBackend from "i18next-resources-to-backend";
import i18nConfig from "../i18nConfig"

export default async function initTranslations(
    locale: string,
    // eslint-disable-next-line
    i18n: any
) {
    const i18nInstance = i18n || createInstance();

    i18nInstance
        .use(initReactI18next)
        .use(resourcesToBackend(
            (language: string) =>
                import((`../lang/${language}.json`))
        ));

    await i18nInstance.init({
        lng: locale,
        fallbackLng: i18nConfig.defaultLocale,
        supportedLngs: i18nConfig.locales,
        preload: i18nConfig.locales
    });

    return {
        i18n: i18nInstance,
        t: i18nInstance.t
    };
}