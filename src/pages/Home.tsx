import Hero from "../parts/Hero";
import FAQ from "../parts/homepage/FAQ";
import Jumbotron from "../parts/homepage/Jumbotron";
import Service from "../parts/homepage/Service";
import Testimonial from "../parts/homepage/Testimonial";
import WhyUs from "../parts/homepage/WhyUs";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Service />
      <WhyUs />
      <Testimonial />
      <Jumbotron />
      <FAQ />
    </>
  );
};

export default HomePage;
