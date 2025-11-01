import { Card } from "@/components/ui/card";
import { Stethoscope, Users, Heart, Clock, Shield, Award } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: Stethoscope,
    title: "Registered Nurses",
    description: "Highly qualified registered nurses with extensive experience in various healthcare settings, available for short or long-term placements.",
    color: "from-primary to-primary-light"
  },
  {
    icon: Heart,
    title: "Healthcare Assistants",
    description: "Compassionate and trained healthcare assistants ready to provide quality care and support to patients in hospitals, care homes, and private settings.",
    color: "from-secondary to-primary"
  },
  {
    icon: Users,
    title: "Support Workers",
    description: "Dedicated support workers offering personalized care and assistance to individuals in their daily living activities and medical needs.",
    color: "from-accent to-secondary"
  },
  {
    icon: Clock,
    title: "24/7 Emergency Cover",
    description: "Round-the-clock availability for emergency staffing requirements. We respond quickly to ensure continuity of care in critical situations.",
    color: "from-primary-dark to-accent"
  },
  {
    icon: Shield,
    title: "Temporary & Permanent",
    description: "Flexible staffing solutions including temporary cover, temp-to-perm placements, and permanent recruitment to meet your specific needs.",
    color: "from-secondary to-primary-dark"
  },
  {
    icon: Award,
    title: "Specialized Care",
    description: "Specialist healthcare professionals for dementia care, palliative care, mental health support, and other specialized medical requirements.",
    color: "from-accent to-primary"
  }
];

export const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('[data-card-index]');
            cards.forEach((card, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-subtle">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary text-sm font-semibold">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Comprehensive Healthcare Staffing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional healthcare staff solutions tailored to your facility's unique requirements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <Card
                key={service.title}
                data-card-index={index}
                className={`p-8 hover:shadow-smooth-lg transition-all duration-500 border-border/50 hover:border-primary/30 hover:-translate-y-2 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
