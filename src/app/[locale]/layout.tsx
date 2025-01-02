import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {ReactNode} from "react";

interface ILocaleLayoutProps {
    children: ReactNode,
    params: {
        locale: string
    }
}

export default async function LocaleLayout(props: ILocaleLayoutProps) {
    const {children, params} = props;
    const {locale} = params;
    
    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

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