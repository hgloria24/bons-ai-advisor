import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full border-b border-zen-green-light bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-zen rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">🌳</span>
          </div>
          <span className="text-2xl font-bold text-zen-green">BonsAI</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-zen-green hover:text-zen-brown transition-colors">Home</a>
          <a href="#collection" className="text-zen-green hover:text-zen-brown transition-colors">Collection</a>
          <a href="#chat" className="text-zen-green hover:text-zen-brown transition-colors">AI Guide</a>
          <a href="#about" className="text-zen-green hover:text-zen-brown transition-colors">About</a>
        </nav>

        <Button variant="default" className="bg-zen-green hover:bg-zen-brown text-primary-foreground">
          Start Chat
        </Button>
      </div>
    </header>
  );
};

export default Header;