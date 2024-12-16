"use client"

import styles from "./page.module.css";
import {useTranslation} from "react-i18next";

// @ts-ignore
// eslint-disable-next-line react/prop-types
export default function Home({ params: { locale } }) {
    const { t } = useTranslation();

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>{t("lang")}</h1>
            </main>
        </div>
    );
}
