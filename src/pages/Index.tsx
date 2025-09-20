import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedCollection from "@/components/FeaturedCollection";
import ChatInterface from "@/components/ChatInterface";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedCollection />
      <ChatInterface />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
