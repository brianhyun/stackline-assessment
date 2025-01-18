import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";

import "./styles/globals.css";

import { Header } from "./components/Header";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <section>
            <Header />
            <main>{children}</main>
          </section>
        </body>
      </html>
    </StoreProvider>
  );
}
