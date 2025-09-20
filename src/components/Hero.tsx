import { Button } from "@/components/ui/button";
import heroBonsai from "@/assets/hero-bonsai.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBonsai})` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Find Your Perfect
          <span className="block bg-gradient-zen bg-clip-text text-transparent">BonsAI</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
          Let our AI guide you to discover the ideal bonsai tree for your space, 
          experience level, and personal style.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-zen-green hover:bg-zen-brown text-white px-8 py-6 text-lg shadow-zen"
          >
            🤖 Start AI Chat
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-zen-green px-8 py-6 text-lg"
          >
            View Collection
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;