import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    details: "0800 123 4567",
    subtext: "24/7 Emergency Line",
    color: "from-primary to-primary-light"
  },
  {
    icon: Mail,
    title: "Email",
    details: "info@healthstaff.com",
    subtext: "We respond within 2 hours",
    color: "from-secondary to-primary"
  },
  {
    icon: MapPin,
    title: "Address",
    details: "123 Healthcare Street",
    subtext: "London, UK, EC1A 1BB",
    color: "from-accent to-secondary"
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: "Mon-Fri: 8:00 AM - 6:00 PM",
    subtext: "Emergency: 24/7",
    color: "from-primary-dark to-accent"
  }
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 2 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      organization: "",
      service: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full">
              <span className="text-primary text-sm font-semibold">Get In Touch</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Have questions about our services? Need urgent staffing? We're here to help 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <Card key={method.title} className="p-8 text-center hover:shadow-smooth-lg transition-all duration-300 hover:-translate-y-1 border-border/50">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} p-4 mb-6 mx-auto`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {method.title}
                  </h3>
                  <p className="text-xl font-bold text-primary mb-1">
                    {method.details}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {method.subtext}
                  </p>
                </Card>
              );
            })}
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <Card className="p-8 md:p-10 shadow-smooth-lg border-border/50">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="0800 123 4567"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="organization">Organization/Facility</Label>
                  <Input
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Hospital/Care Home Name"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="service">Service Interested In</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="mt-2 w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="">Select a service</option>
                    <option value="registered-nurses">Registered Nurses</option>
                    <option value="healthcare-assistants">Healthcare Assistants</option>
                    <option value="support-workers">Support Workers</option>
                    <option value="emergency-cover">24/7 Emergency Cover</option>
                    <option value="temporary-permanent">Temporary & Permanent</option>
                    <option value="specialized-care">Specialized Care</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your staffing needs..."
                    required
                    className="mt-2 min-h-[120px]"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-gradient-primary text-white group">
                  Send Message
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Card>

            {/* Additional Info */}
            <div className="space-y-8">
              <Card className="p-8 shadow-smooth-lg border-border/50">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Emergency Staffing?
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  For urgent staffing requirements, call our 24/7 emergency line immediately. Our rapid response team can arrange placements within hours.
                </p>
                <Button className="w-full bg-accent text-white hover:bg-accent/90" size="lg">
                  <Phone className="mr-2" />
                  Call Emergency Line
                </Button>
              </Card>

              <Card className="p-8 shadow-smooth-lg border-border/50">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Healthcare Professionals
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Looking to join our team? We're always seeking qualified healthcare professionals for exciting opportunities.
                </p>
                <Button variant="outline" className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white" size="lg">
                  Join Our Team
                </Button>
              </Card>

              <Card className="p-8 shadow-smooth-lg bg-gradient-subtle border-border/50">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Office Locations
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground">London Office (Head Office)</p>
                    <p className="text-sm">123 Healthcare Street, London, EC1A 1BB</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Manchester Office</p>
                    <p className="text-sm">45 Medical Avenue, Manchester, M1 1AA</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Birmingham Office</p>
                    <p className="text-sm">78 Care Road, Birmingham, B1 1BB</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Quick answers to common questions about our services
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "How quickly can you provide staff?",
                  a: "For emergency requirements, we can arrange placements within hours. For planned bookings, we typically provide candidates within 24-48 hours."
                },
                {
                  q: "Are your staff fully qualified and vetted?",
                  a: "Yes, all our healthcare professionals undergo rigorous vetting including DBS checks, qualification verification, reference checks, and competency assessments."
                },
                {
                  q: "What are your rates?",
                  a: "Our rates vary depending on the role, shift patterns, and contract duration. Contact us for a personalized quote tailored to your requirements."
                },
                {
                  q: "Do you provide staff for night shifts and weekends?",
                  a: "Absolutely. We provide 24/7 coverage including nights, weekends, and bank holidays across all our services."
                }
              ].map((faq, index) => (
                <Card key={index} className="p-6 shadow-smooth hover:shadow-smooth-lg transition-shadow border-border/50">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground">
                    {faq.a}
                  </p>
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

export default Contact;
