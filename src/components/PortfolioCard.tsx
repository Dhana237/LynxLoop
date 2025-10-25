import { Card, CardContent } from "@/components/ui/card";

interface PortfolioCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  delay?: number;
}

const PortfolioCard = ({ title, category, description, image, delay = 0 }: PortfolioCardProps) => {
  return (
    <Card 
      className="group overflow-hidden hover:shadow-xl transition-all duration-500 animate-fade-in-up border-border"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Project Image */}
      <div className="h-64 relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
      </div>
      
      <CardContent className="p-8 space-y-3">
        <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          {category}
        </div>
        <h3 className="text-2xl font-semibold text-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default PortfolioCard;
