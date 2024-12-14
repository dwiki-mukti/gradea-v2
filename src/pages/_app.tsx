/* eslint-disable @typescript-eslint/no-unused-vars */
import PanelLayout from "@/externals/layouts/PanelLayout";
import '@/externals/styles/main/index.css';
import { NextPage } from "next";
import type { AppProps } from "next/app";
import React, { ReactElement, ReactNode, useState } from "react";

import Error from "next/error";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import Head from "next/head";
import { GlobalContext } from "@/externals/contexts/GlobalContext";
const font = Inter({ subsets: ["latin"] });

export type NextPageWithLayout<P = "", IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & { Component: NextPageWithLayout; };

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter()
  const prefix = String(router.pathname).split('/')[1]
  const getLayout = Component.getLayout ?? ((page) => page);
  const [UserAuthed, setUserAuthed] = useState({});
  const [StatusCode, setStatusCode] = useState(200);

  if (prefix.indexOf('admin') > -1) {
    import('@/externals/styles/panel.css');
  }


  const RenderedComponent = (): React.ReactNode => {
    if (![200, 202, 422].includes(StatusCode)) {
      return (
        <Error statusCode={StatusCode} />
      )
    } else if ((router.route == '/_error') || !['admin'].includes(prefix)) {
      return (
        <Component {...pageProps} />
      )
    } else {
      return (
        <PanelLayout>
          <GlobalContext.Provider value={{ UserAuthed, setUserAuthed, StatusCode, setStatusCode }}>
            <Component {...pageProps} />
          </GlobalContext.Provider>
        </PanelLayout>
      )
    }
  }

  return (
    <div className={font.className}>
      <RenderedComponent />
    </div>
  );
}
