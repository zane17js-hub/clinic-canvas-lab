import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Process } from "@/components/Process";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div id="services">
        <Services />
      </div>
      <div id="about">
        <WhyChooseUs />
      </div>
      <div id="process">
        <Process />
      </div>
      <div id="contact">
        <CTA />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
