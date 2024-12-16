import i18n from "i18next";
import {initReactI18next} from "react-i18next/initReactI18next";
import Backend from "i18next-http-backend";
import resourcesToBackend from "i18next-resources-to-backend";
import i18nConfig from "@/i18nConfig";

interface ILanguageSubscribe {
    uniqObject: object;
    callback: (lang: string) => void;
}

export class Translator {
    protected readonly _onChangeSubscribes: Map<object, (lang: string) => void> = new Map<object, (lang: string) => void>();

    // eslint-disable-next-line
    public async init(locale: string, i18n: any): Promise<any> {
        await i18n
            .use(initReactI18next)
            //.use(intervalPlural)
            .use(Backend)
            .use(resourcesToBackend(
                (language: string) =>
                    import((`../lang/${language}.json`))
            ))
            .init({
                compatibilityJSON: "v4",
                load: "currentOnly",
                interpolation: {
                    escapeValue: false
                },
                supportedLngs: i18nConfig.locales,
                fallbackLng: "en",
                // backend: {
                //     // for all available options read the backend's repository readme file
                //     loadPath: this.loadPath,
                // },
                saveMissing: false,
                lng: locale,
                parseMissingKeyHandler: (key: string) => {
                    const keys = key.split(".");
                    const lastKey = keys[keys.length - 1];
                    console.log("%c Missing localization: " + key, "background: #ff0000; color: white; font-size: 30px;");
                    return lastKey;
                }
            });

        i18n.on("languageChanged", (lang: string) => {
            this._onChangeSubscribes.forEach(subscribe => subscribe(lang));
        });

        return i18n
    }

    get currentLanguage() {
        return i18n.language;
    }

    // eslint-disable-next-line
    public translate(key: string, options?: any) {
        return i18n.t(key, options);
    }

    public subscribeChange(callback: ILanguageSubscribe) {
        this._onChangeSubscribes.set(callback.uniqObject, callback.callback);
    }

    public unSubscribeChange(uniqObject: object) {
        this._onChangeSubscribes.delete(uniqObject);
    }
}