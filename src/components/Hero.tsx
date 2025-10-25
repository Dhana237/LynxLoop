import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-foreground rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-foreground rotate-45" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 border border-foreground" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6 text-foreground">
            LynxLoop
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-muted-foreground mb-12 tracking-wide">
            Crafting Intelligent Digital Experiences
          </p>
          <Button 
            size="lg"
            onClick={() => scrollToSection("services")}
            className="text-lg px-8 py-6 group transition-all duration-300 hover:shadow-xl"
          >
            Explore Our Solutions
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
