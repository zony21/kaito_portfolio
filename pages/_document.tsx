import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from "react";

const GA_TRACKING_ID = ""
export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" href="/favicon/favicon.ico" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                    <link rel="manifest" href="/favicon/site.webmanifest" />
                    <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff" />
                    <meta name="google-site-verification" content="_Ij57FIqFn1voR8lTbwiCBuamxVPf3ZU57D1On5wxKw" />
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${GA_TRACKING_ID}', {page_path: window.location.pathname,});`
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}