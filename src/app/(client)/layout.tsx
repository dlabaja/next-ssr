import initTranslations from "../i18n";
import {TranslationsProvider} from "@/components/translations-provider";
import {ReactNode} from "react";

const i18nNamespaces = ["home"];

// @ts-ignore
// eslint-disable-next-line react/prop-types
interface IRootLayoutProps {
    children?: ReactNode,
    // eslint-disable-next-line
    params: any
}

export default async function RootLayout(props: IRootLayoutProps) {
    const {children, params} = props;
    const { locale } = params;
    console.log(params)
    const {t, resources} = await initTranslations(locale, i18nNamespaces);

    return (
        <html>
            <body>
                <TranslationsProvider
                    namespaces={i18nNamespaces}
                    locale={locale}
                    resources={resources}>

                    <h1>{t("header")}</h1>
                    {children}
                </TranslationsProvider>
            </body>
        </html>
    );
}