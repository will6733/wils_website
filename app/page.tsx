import Header from "@/components/Header";
import HeroScroll from "@/components/HeroScroll";
import Showcase from "@/components/Showcase";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import BookCta from "@/components/BookCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroScroll />
      <Showcase />
      <TrustBar />
      <Services />
      <Process />
      <Results />
      <Testimonials />
      <Team />
      <Pricing />
      <FAQ />
      <BookCta />
      <Footer />
    </main>
  );
}
