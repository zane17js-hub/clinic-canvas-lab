import { UserCheck, Clock, Smile, PoundSterling } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { ComponentType, SVGProps } from "react";

const reasons = [
  {
    icon: UserCheck,
    title: "Experienced Experts",
    description:
      "Care professionals with proven clinical experience and up-to-date credentials, ready to integrate with your team.",
  },
  {
    icon: Clock,
    title: "On-time Delivery",
    description:
      "Reliable scheduling and rapid response for urgent gaps, helping you maintain consistent care services.",
  },
  {
    icon: Smile,
    title: "Dedicated Attitude",
    description:
      "Staff selected for empathy, professionalism and strong communication to support patients and colleagues.",
  },
  {
    icon: PoundSterling,
    title: "Affordable Prices",
    description:
      "Clear, competitive pricing aligned to role type and contract length — no surprises on invoices.",
  },
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
    <section
      ref={sectionRef}
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            className={`${isVisible ? "animate-fade-in-left" : "opacity-0"}`}
          >
            <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full">
              <span className="text-accent text-sm font-semibold">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Trusted Partner in Healthcare Staffing
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Established in 2021, Care Apex has built a focused team delivering
              professional staffing solutions to local healthcare providers. We
              prioritise safe, reliable placements and clear communication at
              every step.
            </p>
            <div className="flex items-center justify-between gap-4 p-6 bg-gradient-primary rounded-2xl shadow-smooth-lg">
              <div className="text-white w-full text-center">
                <div className="text-4xl font-bold mb-1">320+</div>
                <div className="text-white/90">Successful Placements</div>
              </div>
              <div className="h-16 w-px bg-white/30" />
              <div className="text-white w-full text-center">
                <div className="text-4xl font-bold mb-1">45+</div>
                <div className="text-white/90">Partner Facilities</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature List */}
          <div
            className={`${isVisible ? "animate-fade-in-right" : "opacity-0"}`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
              {reasons.map((reason, index) => {
                const Icon = reason.icon as
                  | ComponentType<SVGProps<SVGSVGElement>>
                  | undefined;
                return (
                  <div
                    key={reason.title}
                    className="flex flex-col items-center justify-center gap-3 p-6 bg-card rounded-lg border border-border/30 transition-shadow text-center min-h-[170px]"
                    style={{ animationDelay: `${index * 0.06}s` }}
                  >
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-2">
                      {Icon ? <Icon className="w-6 h-6 text-accent" /> : null}
                    </div>

                    <h3 className="text-base font-semibold text-foreground">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 max-w-[12rem]">
                      {reason.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
