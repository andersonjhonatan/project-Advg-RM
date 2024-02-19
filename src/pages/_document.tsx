import HeaderComponent from "@/components/HeaderComponent";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <HeaderComponent />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
