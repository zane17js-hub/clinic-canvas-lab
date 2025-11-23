import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import {
  Target,
  Eye,
  Award,
  Users,
  Shield,
  Heart,
  Phone,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CONTACT_NUMBER, CONTACT_EMAIL } from "@/lib/constants";

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
  { number: "4+", label: "Years Experience" },
  { number: "120+", label: "Healthcare Professionals" },
  { number: "45+", label: "Partner Facilities" },
  { number: "320+", label: "Successful Placements" },
  { number: "4.7/5", label: "Average Client Rating" },
  { number: "24/7", label: "Support Available" },
];

const certifications = [
  "Care Quality Commission (CQC) Registered",
  "Recruitment & Employment Confederation (REC) Member",
  "Aligned with NHS employment standards",
  "Data Protection (GDPR) Compliant",
  "Professional indemnity insurance",
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
                About Care Apex
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Professional, Responsive Healthcare Staffing
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Founded in 2021, Care Apex delivers dependable staffing solutions
              to hospitals, care homes and community providers — focusing on
              safety, clarity and fast response for organisations of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
              Overview
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                Care Apex is a focused healthcare staffing provider offering
                qualified, reliable professionals for hospitals, care homes and
                community services. We match skills and availability to your
                needs, prioritising safety and continuity of care.
              </p>
              <p className="text-lg leading-relaxed">
                As a growing team established in 2021, we emphasise practical
                processes: thorough checks, responsive scheduling and regular
                communication. Our objective is to be a dependable staffing
                partner that supports local services efficiently.
              </p>
              <p className="text-lg leading-relaxed">
                We provide short-term cover, temp-to-perm support and bespoke
                recruitment solutions tailored to each facility's clinical and
                operational needs.
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

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-primary">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need staffing support today?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Get in touch with our team for rapid cover, permanent hires or
              bespoke recruitment plans. We respond quickly and will work with
              you to find the right staffing solution.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary px-8">
                  Contact Us
                </Button>
              </Link>

              <a
                href={`tel:${CONTACT_NUMBER}`}
                className="inline-flex items-center"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="px-6 text-white border-white/30 hover:bg-white/10 hover:text-white"
                >
                  <Phone className="mr-2" /> {CONTACT_NUMBER}
                </Button>
              </a>
            </div>

            <div className="mt-6 text-white/80">
              <Mail className="inline-block mr-2 -mt-0.5" /> {CONTACT_EMAIL}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
