"use client";

import { I18nextProvider } from "react-i18next";
import initTranslations from "@/app/i18n";
import { createInstance } from "i18next";



// @ts-ignore
export const TranslationsProvider = (x) => {
    const i18n = createInstance();

    initTranslations(x.locale, x.namespaces, i18n, x.resources);

    return <I18nextProvider i18n={i18n}>{x.children}</I18nextProvider>;
}