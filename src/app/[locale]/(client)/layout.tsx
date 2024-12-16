import {ReactNode} from "react";
import {TranslationsProvider} from "@/components/translations-provider";

interface IRootLayoutProps {
    children?: ReactNode,
    // eslint-disable-next-line
    params: any
}

export default async function RootLayout(props: IRootLayoutProps) {
    const {children, params} = props;
    const { locale } = params;

    return (
        <html>
            <body>
                <TranslationsProvider locale={locale}>
                    {children}
                </TranslationsProvider>
            </body>
        </html>
    );
}