import { Smartphone, Globe, Cloud, Cpu } from "lucide-react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform applications engineered for performance, scalability, and seamless user experiences across all devices."
    },
    {
      icon: Globe,
      title: "Web Solutions",
      description: "Responsive, high-performance web applications built with cutting-edge frameworks and optimized for speed, accessibility, and conversion."
    },
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "Scalable, secure cloud infrastructure designed to handle enterprise workloads with maximum efficiency and minimal downtime."
    },
    {
      icon: Cpu,
      title: "AI & Automation",
      description: "Intelligent systems powered by machine learning and advanced algorithms that automate processes and unlock actionable insights."
    }
  ];

  return (
    <section id="services" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your enterprise needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.title}
                {...service}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
