import {defineRouting} from "next-intl/routing";
import {createNavigation} from "next-intl/navigation";

export const routing = defineRouting({
    locales: ["en", "cs"],
    defaultLocale: "en",
    localePrefix: "as-needed",
    
    pathnames: {
        "/home": {
            en: "/home",
            cs: "/domu"
        }
    }
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter, getPathname} =
    createNavigation(routing);