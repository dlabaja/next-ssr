import {ReactNode} from "react";
import {TranslationsProvider} from "@/components/translations-provider";
import i18nConfig from "@/i18nConfig";
import initTranslations from "@/app/i18n";
import {createInstance} from "i18next";

interface IRootLayoutProps {
    children?: ReactNode,
    // eslint-disable-next-line
    params: any
}

export function generateStaticParams() {
    return i18nConfig.locales.map(locale => ({ locale }));
}

export default async function RootLayout(props: IRootLayoutProps) {
    const {children, params} = props;
    const { locale } = params;
    const { t } = await initTranslations(locale, createInstance());

    return (
        <html lang={locale}>
            <head>
                <title>{t("title")}</title>
            </head>
            <body>
                <TranslationsProvider locale={locale}>
                    {children}
                </TranslationsProvider>
            </body>
        </html>
    );
}