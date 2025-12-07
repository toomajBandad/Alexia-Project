import ArticlesSection from "../components/articlesSection/ArticlesSection";
import CartSection from "../components/cartSection/CartSection";
import ContactUsSection from "../components/contactUsSection/ContactUsSection";
// import CountingSection from "../components/countingSection/CountingSection";
import Hero from "../components/hero/Hero";
import LogoCarousel from "../components/logoCarousel/LogoCarousel";
import OurServices from "../components/ourServices/OurServices";

function Home() {
  return (
    <div>
      <Hero />
      {/* <CountingSection /> */}
      <CartSection />
      <OurServices />
      <LogoCarousel />
      <ContactUsSection />
      <ArticlesSection />
    </div>
  );
}

export default Home;
