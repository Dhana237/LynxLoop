const About = () => {
  return (
    <section id="about" className="py-32 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold text-foreground">
                Who We Are
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  LynxLoop stands at the intersection of innovation and precision, 
                  crafting enterprise-grade digital solutions that transform businesses.
                </p>
                <p>
                  With an unwavering commitment to excellence, we engineer cutting-edge 
                  mobile, web, cloud, and AI solutions that empower organizations to 
                  thrive in an ever-evolving digital landscape.
                </p>
                <p>
                  Our team of elite developers, architects, and strategists brings 
                  decades of combined expertise to every project, ensuring solutions 
                  that are not just functional, but exceptional.
                </p>
              </div>
            </div>

            {/* Abstract Pattern */}
            <div className="relative h-[500px] animate-scale-in">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Geometric Pattern */}
                <div className="relative w-full h-full">
                  <div className="absolute top-1/4 left-1/4 w-48 h-48 border-2 border-foreground/20 rotate-45 animate-pulse" />
                  <div className="absolute top-1/3 right-1/4 w-32 h-32 border-2 border-foreground/30" />
                  <div className="absolute bottom-1/4 left-1/3 w-40 h-40 border-2 border-foreground/15 rounded-full" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-4 border-foreground/40 rounded-lg rotate-12" />
                  <div className="absolute bottom-1/3 right-1/3 w-24 h-24 border-2 border-foreground/25 rotate-45" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
