import { useEffect, useRef, useState } from "react";
import { Phone, UserCheck, Calendar, ThumbsUp } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Contact Us",
    description: "Reach out via phone, email, or our online form with your staffing requirements. Our team responds within minutes."
  },
  {
    icon: UserCheck,
    title: "Staff Selection",
    description: "We carefully match qualified healthcare professionals from our vetted pool to your specific needs and requirements."
  },
  {
    icon: Calendar,
    title: "Quick Placement",
    description: "Receive candidate profiles, conduct interviews if needed, and schedule placements - often within 24 hours."
  },
  {
    icon: ThumbsUp,
    title: "Ongoing Support",
    description: "Continuous monitoring, feedback collection, and dedicated support ensure seamless service delivery."
  }
];

export const Process = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          steps.forEach((_, index) => {
            setTimeout(() => {
              setVisibleSteps(prev => [...prev, index]);
            }, index * 200);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 rounded-full">
            <span className="text-secondary text-sm font-semibold">How It Works</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple & Streamlined Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From initial contact to ongoing support, we make healthcare staffing effortless
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isVisible = visibleSteps.includes(index);
              
              return (
                <div
                  key={step.title}
                  className={`relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow z-20">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>

                  <div className="bg-card p-8 rounded-2xl shadow-smooth hover:shadow-smooth-lg transition-shadow duration-300 border border-border/50 h-full">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary p-3 mb-6 mx-auto">
                      <Icon className="w-full h-full text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-3 text-center">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
