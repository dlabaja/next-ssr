import "./globals.css";
import {Translator} from "@/utils/i18n";

export default async function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    const translator = new Translator()
    await translator.init("en")
    translator.changeLanguage("cz")

    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
