import {ReactNode} from "react";
import initTranslations from "@/app/i18n";
import {TranslationsProvider} from "@/components/translations-provider";

interface IRootLayoutProps {
    children?: ReactNode,
    // eslint-disable-next-line
    params: any
}

export default async function RootLayout(props: IRootLayoutProps) {
    const {children, params} = props;
    const { locale } = params;
    console.log(params)
    const {i18n} = await initTranslations(locale, undefined);

    return (
        <html>
            <body>
                <TranslationsProvider i18n={i18n}>
                    {children}
                </TranslationsProvider>
            </body>
        </html>
    );
}