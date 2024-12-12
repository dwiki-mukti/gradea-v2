import PanelLayout from "@/externals/layouts/PanelLayout";
import type { AppProps } from "next/app";
import '@/externals/styles/main/index.css';
import '@/externals/styles/panel.css';
import { ReactElement, ReactNode, useState } from "react";
import { NextPage } from "next";

import { Inter } from "next/font/google";
import Head from "next/head";
import { GlobalContext } from "@/externals/contexts/GlobalContext";
const font = Inter({ subsets: ["latin"] });

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & { Component: NextPageWithLayout; };

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const [UserAuthed, setUserAuthed] = useState({});
  const [StatusCode, setStatusCode] = useState(200);

  return getLayout(
    <main className={font.className}>
      <GlobalContext.Provider value={{ UserAuthed, setUserAuthed, StatusCode, setStatusCode }}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </main>
  );
}
