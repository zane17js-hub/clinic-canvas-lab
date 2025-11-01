import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Target, Eye, Award, Users, Shield, Heart } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description:
      "We believe in treating every individual with dignity, respect, and genuine care.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Honesty and transparency guide everything we do, building trust with clients and staff.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We maintain the highest standards in recruitment, training, and service delivery.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We build lasting relationships with healthcare facilities and professionals alike.",
  },
];

const stats = [
  { number: "10+", label: "Years Experience" },
  { number: "500+", label: "Healthcare Professionals" },
  { number: "200+", label: "Partner Facilities" },
  { number: "10,000+", label: "Successful Placements" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "24/7", label: "Support Available" },
];

const certifications = [
  "Care Quality Commission (CQC) Registered",
  "Recruitment & Employment Confederation (REC) Member",
  "Compliance with NHS Employment Standards",
  "ISO 9001 Quality Management Certified",
  "Data Protection (GDPR) Compliant",
  "Professional Indemnity Insured",
];

const About = () => {
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
                About HealthStaff Pro
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Leading Healthcare Staffing Excellence
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              A decade of connecting exceptional healthcare professionals with
              facilities that need them most.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                Founded in 2014, HealthStaff Pro emerged from a simple
                observation: healthcare facilities were struggling to find
                qualified, compassionate staff when they needed them most, while
                talented healthcare professionals sought flexible, rewarding
                opportunities.
              </p>
              <p className="text-lg leading-relaxed">
                What started as a small recruitment agency in London has grown
                into a nationwide provider of healthcare staffing solutions,
                supporting over 200 healthcare facilities across the UK. Our
                success stems from our unwavering commitment to quality, our
                rigorous vetting processes, and our genuine care for both the
                facilities we serve and the professionals we represent.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we're proud to have facilitated over 10,000 placements,
                maintaining a 98% client satisfaction rate. Our team of
                experienced healthcare recruitment specialists works around the
                clock to ensure continuity of care, supporting the NHS, private
                hospitals, care homes, and community care providers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-10 shadow-smooth-lg border-border/50">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary p-4 mb-6">
                <Target className="w-full h-full text-white" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To provide exceptional healthcare staffing solutions that ensure
                continuity of care, support facility excellence, and create
                meaningful opportunities for healthcare professionals. We bridge
                the gap between demand and supply with integrity, speed, and
                unwavering quality standards.
              </p>
            </Card>

            <Card className="p-10 shadow-smooth-lg border-border/50">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary p-4 mb-6">
                <Eye className="w-full h-full text-white" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the UK's most trusted healthcare staffing partner,
                recognized for innovation, reliability, and compassionate
                service. We envision a future where every healthcare facility
                has immediate access to qualified professionals, and every
                healthcare worker finds fulfilling opportunities.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision we make and every
              relationship we build
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card
                  key={value.title}
                  className="p-8 text-center hover:shadow-smooth-lg transition-shadow border-border/50"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-primary p-4 mb-6 mx-auto">
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-primary">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              A decade of excellence reflected in measurable outcomes
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Accreditations & Certifications
              </h2>
              <p className="text-xl text-muted-foreground">
                We maintain the highest industry standards and regulatory
                compliance
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert) => (
                <Card
                  key={cert}
                  className="p-6 flex items-center gap-4 hover:shadow-smooth transition-shadow border-border/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-foreground font-medium">{cert}</span>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
