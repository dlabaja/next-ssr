import {NextIntlClientProvider} from "next-intl";
import {getMessages, getTranslations} from "next-intl/server";
import {notFound} from "next/navigation";
import {routing} from "@/i18n/routing";
import {ReactNode} from "react";
import {Metadata} from "next";

interface ILocaleLayoutProps {
    children: ReactNode,
    params: {
        locale: string
    }
}

interface IMetadataProps {
    params: {
        locale: string
    }
}

export async function generateMetadata(props: IMetadataProps): Promise<Metadata> {
    const {params} = props;
    const {locale} = params;
    
    const t = await getTranslations({locale});

    return {
        title: t("title"),
        icons: {
            icon: "/favicon.ico"
        }
    }
}

// static rendering
export function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout(props: ILocaleLayoutProps) {
    const {children, params} = props;
    const {locale} = params;
    
    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as never)) {
        notFound()
    }

    //setRequestLocale(locale); static rendering???

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}