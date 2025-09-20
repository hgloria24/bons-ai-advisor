import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      icon: "💬",
      title: "Chat with AI",
      description: "Tell our AI about your space, experience level, and preferences"
    },
    {
      icon: "🎯",
      title: "Get Recommendations",
      description: "Receive personalized bonsai suggestions tailored just for you"
    },
    {
      icon: "🌱",
      title: "Start Growing",
      description: "Purchase your perfect bonsai and begin your zen journey"
    }
  ];

  return (
    <section id="about" className="py-20 bg-zen-green-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-zen-green mb-4">
            How BonsAI Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Finding your perfect bonsai has never been easier with our AI-powered guidance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="text-center border-zen-green-light hover:shadow-zen transition-all duration-300"
            >
              <CardContent className="pt-8">
                <div className="text-6xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-zen-green mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-peaceful">
            <span className="text-zen-green font-medium">Ready to find your perfect bonsai?</span>
            <div className="w-2 h-2 bg-zen-green rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;