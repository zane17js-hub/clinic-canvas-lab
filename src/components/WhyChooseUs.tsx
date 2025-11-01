import { CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const reasons = [
  {
    title: "Rigorous Vetting Process",
    description: "Every healthcare professional undergoes comprehensive background checks, qualification verification, and competency assessments."
  },
  {
    title: "Fast Response Times",
    description: "Our 24/7 operations team ensures rapid placement, often within hours for urgent requirements."
  },
  {
    title: "Ongoing Training",
    description: "Continuous professional development programs keep our staff updated with the latest healthcare practices and regulations."
  },
  {
    title: "Dedicated Support",
    description: "Personal account managers provide round-the-clock support to both facilities and healthcare professionals."
  },
  {
    title: "Flexible Solutions",
    description: "From single shifts to long-term contracts, we adapt to your changing staffing needs with ease."
  },
  {
    title: "Quality Assurance",
    description: "Regular audits and feedback systems ensure consistently high standards of care delivery."
  }
];

export const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full">
              <span className="text-accent text-sm font-semibold">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Trusted Partner in Healthcare Staffing
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              With over a decade of experience in healthcare recruitment, we understand the critical 
              importance of having the right staff at the right time. Our commitment to excellence 
              ensures peace of mind for healthcare facilities and rewarding opportunities for professionals.
            </p>
            <div className="flex items-center gap-4 p-6 bg-gradient-primary rounded-2xl shadow-smooth-lg">
              <div className="text-white">
                <div className="text-4xl font-bold mb-1">10,000+</div>
                <div className="text-white/90">Successful Placements</div>
              </div>
              <div className="h-16 w-px bg-white/30" />
              <div className="text-white">
                <div className="text-4xl font-bold mb-1">200+</div>
                <div className="text-white/90">Partner Facilities</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature List */}
          <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="grid gap-6">
              {reasons.map((reason, index) => (
                <div
                  key={reason.title}
                  className="flex gap-4 p-6 bg-card rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-smooth transition-all duration-300"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
