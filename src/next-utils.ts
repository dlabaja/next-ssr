const isServer = () => typeof window === "undefined";
const isBrowser = () => typeof window !== "undefined";
const isDev = () => process.env.NODE_ENV !== "production";

export {isServer, isBrowser, isDev};
