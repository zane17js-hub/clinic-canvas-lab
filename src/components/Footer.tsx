import { Heart, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./ui/logo";
import { CONTACT_NUMBER, CONTACT_EMAIL } from "@/lib/constants";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white">
      <div className="container px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            {/* <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">HealthStaff Pro</span>
            </Link> */}
            <Logo className="mb-4" />
            <p className="text-white/70 mb-6">
              Established in 2021, Care Apex provides focused healthcare
              staffing solutions that connect qualified professionals with local
              healthcare providers across the UK.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li className="text-white/70">Registered Nurses</li>
              <li className="text-white/70">Healthcare Assistants</li>
              <li className="text-white/70">Support Workers</li>
              <li className="text-white/70">Emergency Cover</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="text-white/70 text-sm">24/7 Support</div>
                  <div className="font-medium">{CONTACT_NUMBER}</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="text-white/70 text-sm">Email</div>
                  <div className="font-medium">{CONTACT_EMAIL}</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="text-white/70 text-sm">Address</div>
                  <div className="font-medium">London, United Kingdom</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-white/60 text-sm">
          <p>
            &copy; {currentYear} Care Apex. All rights reserved. | Professional
            Healthcare Staffing Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};
