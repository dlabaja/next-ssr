"use client";

import { I18nextProvider } from "react-i18next";
import {ReactNode} from "react";
import initTranslations from "@/app/i18n";
import {createInstance} from "i18next";

export interface ITranslationProviderProps {
    // eslint-disable-next-line
    children: ReactNode
    locale: string
}

export const TranslationsProvider = (props: ITranslationProviderProps) => {
    const {children, locale} = props;
    const i18n = createInstance()
    initTranslations(locale, i18n)

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}