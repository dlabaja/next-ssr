"use client"

import styles from "./page.module.css";
import {useTranslation} from "react-i18next";
import i18n from "./i18n";
import {useEffect} from "react";
import {isServer} from "@/next-utils"; // Import inicializace i18n

// @ts-ignore
// eslint-disable-next-line react/prop-types
export default function Home({ params: { locale } }) {
    const { t } = useTranslation();

    useEffect(() => {
        console.log(isServer())
    }, []);

    i18n.changeLanguage(locale);

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>{t("lang")}</h1>
                {/* Další obsah */}
            </main>
        </div>
    );
}
