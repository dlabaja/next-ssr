import {ReactNode} from "react";
import {TranslationsProvider} from "@/components/translations-provider";
import i18nConfig from "@/i18nConfig";

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

    return (
        <html lang={locale}>
            <body>
                <TranslationsProvider locale={locale}>
                    {children}
                </TranslationsProvider>
            </body>
        </html>
    );
}