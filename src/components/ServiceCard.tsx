import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) => {
  return (
    <Card 
      className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-card border-border animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardContent className="p-8 space-y-4">
        <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
          <Icon className="w-8 h-8 text-foreground" />
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

export default ServiceCard;
