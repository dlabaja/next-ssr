"use client"

import styles from "./page.module.css";
import {useTranslation} from "react-i18next";

export default function Home() {
    const { t } = useTranslation();

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>{t("lang")}</h1>
            </main>
        </div>
    );
}
