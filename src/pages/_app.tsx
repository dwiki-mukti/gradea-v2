import PanelLayout from "@/externals/layouts/PanelLayout";
import "@/externals/styles/main/index.css";
import "@/externals/styles/panel.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

import { Inter } from "next/font/google";
const font = Inter({ subsets: ["latin"] });

export type NextPageWithLayout<P = "", IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & { Component: NextPageWithLayout };

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // const getLayout = Component.getLayout ?? ((page) => page);
  // const [UserAuthed, setUserAuthed] = useState({});
  // const [StatusCode, setStatusCode] = useState(200);

  return (
    <div className={font.className}>
      <PanelLayout>
        <Component {...pageProps} />
      </PanelLayout>
    </div>
  );
}
