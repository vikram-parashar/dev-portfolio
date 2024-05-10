import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import Head from "next/head";

// Font files can be colocated inside of `pages`
const clash = localFont({ src: "../public/font/clash.woff2" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Vikram Parashar</title>
      </Head>
      <style jsx global>{`
        html {
          font-family: ${clash.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />;
    </>
  );
}
