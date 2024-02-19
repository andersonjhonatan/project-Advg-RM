import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "700", subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <main>
      <p className={roboto.className}>Rosa Muniz</p>
    </main>
    </>
  );
}
