"use client"

import styles from "./page.module.css";
import {useTranslation} from "react-i18next";
import LanguageChanger from "@/components/language-switch";
import {useEffect, useState} from "react";

export default function Home() {
    const { t } = useTranslation();
    const [text, setText] = useState("")
    console.log("sus")

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
