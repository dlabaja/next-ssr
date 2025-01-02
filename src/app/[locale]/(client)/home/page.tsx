"use client"

import styles from "./page.module.css";
import LanguageChanger from "@/components/language-switch";
import {useEffect, useState} from "react";
import {useTranslations} from "next-intl";

export default function Home() {
    const t = useTranslations();
    const [text, setText] = useState("")

    useEffect(() => {
        setText("textus")
    }, []);

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>{t("lang")}</h1>
                <p>{text}</p>
                <LanguageChanger/>
            </main>
        </div>
    );
}
