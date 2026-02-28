import { Hero } from "@/components/Hero";
import { Steps } from "@/components/Steps";
import { Rreth } from "@/components/Rreth";
import { Sherbimet } from "@/components/Sherbimet";
import { PerKeEshte } from "@/components/PerKeEshte";
import { Instagram } from "@/components/Instagram";
import { FAQ } from "@/components/FAQ";
import { Kontakti } from "@/components/Kontakti";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Steps />
      <Rreth />
      <Sherbimet />
      <PerKeEshte />
      <Instagram />
      <FAQ />
      <Kontakti />
      <Footer />
    </>
  );
}
