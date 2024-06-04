import CTA from "@/components/CTA/CTA";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Metrics from "@/components/Metrics/Metrics";
import Navbar from "@/components/Navbar/Navbar";
import ProblemSolve from "@/components/ProblemSolve/ProblemSolve";
import ProblemTarget from "@/components/ProblemTarget/ProblemTarget";
import Reviews from "@/components/Reviews/Reviews";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProblemSolve />
      <Metrics />
      <Reviews />
      <ProblemTarget />
      <CTA />
      <Footer />
    </div>
  );
};

export default HomePage;
