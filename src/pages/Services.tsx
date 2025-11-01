import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Stethoscope,
  Users,
  Heart,
  Clock,
  Shield,
  Award,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Stethoscope,
    title: "Registered Nurses (RNs)",
    shortDesc:
      "Highly qualified registered nurses with extensive experience in various healthcare settings.",
    fullDesc:
      "Our registered nurses are fully qualified with NMC registration and bring extensive experience across acute, community, and specialized care settings. Each RN undergoes rigorous verification of qualifications, enhanced DBS checks, and continuous professional development.",
    features: [
      "NMC registered with valid PIN",
      "Minimum 2 years post-registration experience",
      "Specialized training in various medical fields",
      "Regular competency assessments",
      "Available for all shifts including nights and weekends",
      "Experience in NHS and private healthcare settings",
    ],
    color: "from-primary to-primary-light",
  },
  {
    icon: Heart,
    title: "Healthcare Assistants (HCAs)",
    shortDesc:
      "Compassionate and trained healthcare assistants ready to provide quality care.",
    fullDesc:
      "Our healthcare assistants are trained to the highest standards with Care Certificate completion and hands-on experience in patient care. They provide essential support in hospitals, care homes, and community settings with professionalism and empathy.",
    features: [
      "Care Certificate qualified",
      "Enhanced DBS checked",
      "Training in personal care and infection control",
      "Experience with elderly, dementia, and palliative care",
      "Medication administration support",
      "Manual handling certified",
    ],
    color: "from-secondary to-primary",
  },
  {
    icon: Users,
    title: "Support Workers",
    shortDesc:
      "Dedicated support workers offering personalized care and assistance.",
    fullDesc:
      "Our support workers provide compassionate assistance to individuals requiring help with daily living activities. They work in residential settings, supported living environments, and provide community-based support with person-centered care approaches.",
    features: [
      "Person-centered care training",
      "Enhanced DBS clearance",
      "Mental health awareness training",
      "Learning disabilities support experience",
      "Safeguarding qualified",
      "Communication and behavior support skills",
    ],
    color: "from-accent to-secondary",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Cover",
    shortDesc:
      "Round-the-clock availability for emergency staffing requirements.",
    fullDesc:
      "Our 24/7 emergency response team ensures you never face staffing shortages. We maintain a pool of immediately available healthcare professionals ready to step in at short notice, ensuring continuity of care in critical situations.",
    features: [
      "Same-day placements available",
      "Dedicated emergency response team",
      "Pre-vetted pool of available staff",
      "24-hour operations center",
      "Emergency contact protocols",
      "Rapid mobilization procedures",
    ],
    color: "from-primary-dark to-accent",
  },
  {
    icon: Shield,
    title: "Temporary & Permanent Recruitment",
    shortDesc: "Flexible staffing solutions for all your recruitment needs.",
    fullDesc:
      "Whether you need short-term cover or permanent staff, we provide comprehensive recruitment solutions tailored to your facility's requirements. Our temp-to-perm options allow you to assess candidates before making permanent commitments.",
    features: [
      "Temporary single shifts to long-term contracts",
      "Permanent placement services",
      "Temp-to-perm trial periods",
      "Block booking discounts",
      "Flexible notice periods",
      "Guaranteed replacement if unsuitable",
    ],
    color: "from-secondary to-primary-dark",
  },
  {
    icon: Award,
    title: "Specialized Care Services",
    shortDesc:
      "Specialist healthcare professionals for complex care requirements.",
    fullDesc:
      "We provide healthcare professionals with specialized training and experience in complex care areas including dementia care, palliative care, mental health, learning disabilities, and critical care nursing.",
    features: [
      "Dementia care specialists",
      "Palliative and end-of-life care",
      "Mental health nursing",
      "Learning disabilities support",
      "Critical care and ICU experience",
      "Specialist training and certifications",
    ],
    color: "from-accent to-primary",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full">
              <span className="text-primary text-sm font-semibold">
                Comprehensive Healthcare Staffing
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Professional healthcare staff solutions for every need. From
              registered nurses to specialized care professionals, we provide
              fully vetted, qualified staff 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-24 bg-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.title}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={`${!isEven ? "lg:order-2" : ""}`}>
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} p-5 mb-6`}
                    >
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {service.fullDesc}
                    </p>
                    <Button className="bg-gradient-primary text-white group">
                      Request This Service
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  <Card
                    className={`p-8 shadow-smooth-lg border-border/50 ${
                      !isEven ? "lg:order-1" : ""
                    }`}
                  >
                    <h3 className="text-xl font-semibold text-foreground mb-6">
                      Key Features:
                    </h3>
                    <ul className="space-y-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need Healthcare Staff?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today to discuss your staffing requirements. Our team
              is ready to help 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-glow text-lg px-8"
              >
                <Link to={"/contact"}>Get in Touch</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white  hover:bg-white hover:text-primary text-lg px-8"
              >
                Call: 0800 123 4567
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
