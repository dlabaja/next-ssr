"use client"

import styles from "./page.module.css";
import {useEffect, useState} from "react";
import {useTranslations} from "next-intl";
import {Link} from "@/i18n/routing";

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
                <Link locale={"cs"} href={"/home"}>cz</Link>
                <br/>
                <Link locale={"en"} href={"/home"}>en</Link>
            </main>
        </div>
    );
}
