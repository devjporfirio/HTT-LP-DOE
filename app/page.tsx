import { Section1 } from "@/components/pages/home/section-1";
import { Section2 } from "@/components/pages/home/section-2";
import { Section3 } from "@/components/pages/home/section-3";
import { Section4 } from "@/components/pages/home/section-4";
import { Section5 } from "@/components/pages/home/section-5";
import { Header } from "@/components/utils/header";
import { Footer } from "@/components/utils/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main
        className="relative flex flex-col flex-1 overflow-hidden"
        role="main"
      >
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </main>
      <Footer />
    </>
  );
}
