import {Translator} from "@/data/translator";

export default async function initTranslations(
    locale: string,
    // eslint-disable-next-line
    i18n: any
) {
    const instance = await new Translator().init(locale, i18n)

    return {
        i18n: instance,
        t: instance.t
    };
}