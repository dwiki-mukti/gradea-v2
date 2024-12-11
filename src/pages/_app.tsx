import PanelLayout from "@/externals/layouts/PanelLayout";
import type { AppProps } from "next/app";
import '@/externals/styles/main/index.css';
import '@/externals/styles/panel.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PanelLayout>
      <Component {...pageProps} />
    </PanelLayout>
  );
}
