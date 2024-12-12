import styles from "./page.module.css";
import {initReactI18next, useTranslation} from "react-i18next";
import i18n, {Translator} from "../../../utils/i18n";
import intervalPlural from "i18next-intervalplural-postprocessor";
import Backend from "i18next-http-backend";
import resourcesToBackend from "i18next-resources-to-backend"; // Import inicializace i18n

// @ts-ignore
// eslint-disable-next-line react/prop-types
export default function Home({ params: { locale } }) {
    const { t } = useTranslation();

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>{t("lang")}</h1>
                {/* Další obsah */}
            </main>
        </div>
    );
}
