import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            lang: "Language: English",
        },
    },
    cs: {
        translation: {
            lang: "Jazyk: Čeština",
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "en", // výchozí jazyk
    fallbackLng: "en",
    interpolation: {
        escapeValue: false, // react již escapuju HTML
    },
});

export default i18n;