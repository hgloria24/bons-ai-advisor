const Footer = () => {
  return (
    <footer className="bg-zen-green text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">🌳</span>
              </div>
              <span className="text-2xl font-bold">BonsAI</span>
            </div>
            <p className="text-zen-green-light text-sm leading-relaxed">
              Your AI-powered companion for discovering and caring for the perfect bonsai trees.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-zen-green-light">
              <li><a href="#" className="hover:text-white transition-colors">Beginner Bonsai</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Advanced Trees</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Care Supplies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gift Sets</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Learn</h4>
            <ul className="space-y-2 text-sm text-zen-green-light">
              <li><a href="#" className="hover:text-white transition-colors">Bonsai Basics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Care Guides</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Chat Tips</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-zen-green-light">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-zen-green-light text-sm">
            © 2024 BonsAI. Crafted with care for bonsai enthusiasts worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;