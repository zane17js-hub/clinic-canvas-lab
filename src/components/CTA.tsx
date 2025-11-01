import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 bg-gradient-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Healthcare Staffing?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Join hundreds of healthcare facilities that trust us for their staffing needs. 
            Let's discuss how we can support your team today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-glow text-lg px-8 group"
            >
              Request Staffing
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8"
            >
              Join Our Team
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <Phone className="w-6 h-6 text-white flex-shrink-0" />
              <div className="text-left">
                <div className="text-white/70 text-sm">Call Us 24/7</div>
                <div className="text-white font-semibold text-lg">0800 123 4567</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <Mail className="w-6 h-6 text-white flex-shrink-0" />
              <div className="text-left">
                <div className="text-white/70 text-sm">Email Us</div>
                <div className="text-white font-semibold text-lg">info@healthstaff.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
