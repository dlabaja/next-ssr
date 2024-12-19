import {initReactI18next} from "react-i18next/initReactI18next";
import Backend from "i18next-http-backend";
import resourcesToBackend from "i18next-resources-to-backend";
import i18nConfig from "@/i18nConfig";
import {Translator} from "@/data/translator";

export default async function initTranslations(
    locale: string,
    // eslint-disable-next-line
    i18next: any
) {
    await new Translator().init(locale, i18next)

    return {
        i18n: i18next,
        t: i18next.t
    };
}