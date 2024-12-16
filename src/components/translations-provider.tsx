"use client";

import { I18nextProvider } from "react-i18next";
import {ReactNode} from "react";

export interface ITranslationProviderProps {
    // eslint-disable-next-line
    i18n: any
    children: ReactNode
}

export const TranslationsProvider = (props: ITranslationProviderProps) => {
    const {i18n, children} = props;

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}