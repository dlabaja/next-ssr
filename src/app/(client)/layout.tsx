import {ReactNode} from "react";

// @ts-ignore
// eslint-disable-next-line react/prop-types
interface IRootLayoutProps {
    children?: ReactNode,
    // eslint-disable-next-line
    params: any
}

export default async function RootLayout(props: IRootLayoutProps) {
    const {children} = props;

    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    );
}