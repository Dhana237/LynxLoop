import PortfolioCard from "./PortfolioCard";
import enterpriseImg from "@/assets/portfolio-enterprise.jpg";
import aiImg from "@/assets/portfolio-ai.jpg";
import mobileImg from "@/assets/portfolio-mobile.jpg";
import ecommerceImg from "@/assets/portfolio-ecommerce.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "Enterprise Platform",
      category: "Cloud Architecture",
      description: "Scalable microservices infrastructure serving 2M+ users",
      image: enterpriseImg
    },
    {
      title: "AI Analytics Dashboard",
      category: "AI & Automation",
      description: "Real-time insights powered by machine learning",
      image: aiImg
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Development",
      description: "Secure, intuitive financial management platform",
      image: mobileImg
    },
    {
      title: "E-Commerce Suite",
      category: "Web Solutions",
      description: "High-conversion retail experience with 99.9% uptime",
      image: ecommerceImg
    }
  ];

  return (
    <section id="portfolio" className="py-32 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Work in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Delivering excellence across industries and technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <PortfolioCard 
                key={project.title}
                {...project}
                delay={index * 150}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
