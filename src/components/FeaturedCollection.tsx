import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import bonsaiCollection from "@/assets/bonsai-collection.jpg";

const FeaturedCollection = () => {
  const bonsaiTypes = [
    {
      id: 1,
      name: "Ficus Retusa",
      price: "$89",
      difficulty: "Beginner",
      image: bonsaiCollection,
      description: "Perfect for beginners with glossy leaves and forgiving nature",
      care: "Low maintenance"
    },
    {
      id: 2,
      name: "Japanese Maple",
      price: "$145",
      difficulty: "Intermediate", 
      image: bonsaiCollection,
      description: "Stunning seasonal colors and elegant branching structure",
      care: "Moderate care"
    },
    {
      id: 3,
      name: "Juniper Procumbens",
      price: "$125",
      difficulty: "Beginner",
      image: bonsaiCollection,
      description: "Hardy evergreen with classic bonsai styling potential",
      care: "Very easy"
    }
  ];

  return (
    <section id="collection" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl font-bold text-zen-green mb-4">
            Featured Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Carefully selected bonsai trees for every skill level and aesthetic preference
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bonsaiTypes.map((bonsai, index) => (
            <Card 
              key={bonsai.id} 
              className="overflow-hidden hover:shadow-zen transition-all duration-300 hover:-translate-y-2 border-zen-green-light"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={bonsai.image} 
                  alt={bonsai.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-zen-green">{bonsai.name}</CardTitle>
                  <Badge 
                    variant={bonsai.difficulty === "Beginner" ? "secondary" : "outline"}
                    className="bg-zen-green-light text-zen-green"
                  >
                    {bonsai.difficulty}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4">{bonsai.description}</p>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-zen-green">{bonsai.price}</span>
                  <span className="text-sm text-zen-brown">{bonsai.care}</span>
                </div>
                
                <div className="space-y-2">
                  <Button 
                    className="w-full bg-zen-green hover:bg-zen-brown"
                  >
                    Add to Cart
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-zen-green text-zen-green hover:bg-zen-green-light"
                  >
                    Ask AI About This
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;