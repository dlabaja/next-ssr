import "./globals.css";
import {TranslationsProvider} from "@/components/translations-provider";
import initTranslations from "@/app/i18n";
import {ReactNode} from "react";

interface ILayoutProps {
    children?: ReactNode,
    // eslint-disable-next-line
    params: any
}

export default async function Layout(props: ILayoutProps) {
    const {children, params} = props;
    const { locale } = params;
    console.log(params)
    const {t, resources} = await initTranslations(locale);

    return <TranslationsProvider
        locale={locale}
        resources={resources}>

        <h1>{t("header")}</h1>
        {children}
    </TranslationsProvider>;
}
