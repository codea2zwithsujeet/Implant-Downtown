import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ContactForm } from "@/components/ContactForm";
import { Testimonials } from "@/components/Testimonials";
import { ServicesSection } from "@/components/ServicesSection";
import { EmergencySection } from "@/components/EmergencySection";
import { FAQSection } from "@/components/FAQSection";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import {
  PhoneCall,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  Award,
  Users,
  Calendar,
  Clock,
  Menu,
  DollarSign,
} from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import PricingHighlightSection from "@/components/PricingHighlightSection";

const Index = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { label: "Home", action: () => scrollToSection("home") },
    { label: "About Dr. Husseini", action: () => scrollToSection("about") },
    { label: "Services", action: () => scrollToSection("services") },
    // { label: "Reviews", action: () => scrollToSection("testimonials") },
    { label: "Contact", action: () => scrollToSection("contact") },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">ID</span>
              </div>
              <span className="text-xl font-bold text-gray-800">
                Implant-Downtown
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  onClick={item.action}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-2 md:space-x-4">
              <LanguageSwitcher />
              <a
                href="tel:+1-514-000-0000"
                className="hidden lg:flex items-center text-blue-600 hover:text-blue-700 transition-colors"
              >
                <PhoneCall className="w-4 h-4 mr-2" />
                <span className="font-semibold">(514) 000-0000</span>
              </a>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-blue-600 hover:bg-blue-700 text-sm md:text-base px-3 py-2 md:px-4 md:py-2"
                size="sm"
              >
                <span className="hidden sm:inline">Book Consultation</span>
                <span className="sm:hidden">Book</span>
              </Button>

              {/* Mobile Menu */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col space-y-4 mt-8">
                    {navigationItems.map((item, index) => (
                      <button
                        key={index}
                        onClick={item.action}
                        className="text-left py-3 px-4 text-lg text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        {item.label}
                      </button>
                    ))}
                    <div className="pt-4 border-t">
                      <a
                        href="tel:+1-514-000-0000"
                        className="flex items-center py-3 px-4 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <PhoneCall className="w-5 h-5 mr-3" />
                        <span className="font-semibold">(514) 000-0000</span>
                      </a>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Redesigned */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white pt-20"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
            {/* Content Column */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 bg-green-50 border border-green-100 text-green-800 px-5 py-3 rounded-full">
                  <DollarSign className="w-5 h-5" />
                  <span className="font-semibold">$3000 Complete Package</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Premium Dental Implant + Crown <br />
                  <span className="text-blue-600">in Downtown Montreal</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Complete dental implant package for just $3000. Located near
                  Concordia University and Complexe Desjardins, offering expert
                  implant dentistry by board-certified specialists.
                </p>
              </div>

              {/* Package Highlights */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-1 bg-blue-600"></span>
                  What's Included in Your $3000 Package:
                </h3>
                <ul className="space-y-3">
                  {[
                    "Surgical placement of titanium dental implant",
                    "Custom ceramic crown made in our partner lab",
                    "Full consultation and post-operative care",
                    "3D imaging with Cone Beam CT",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 shadow-md hover:shadow-lg transition-all"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book $3000 Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("services")}
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-6"
                >
                  Learn More About Services
                </Button>
              </div>

              {/* Location Info */}
              <div className="flex items-center gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Convenient Location
                    </p>
                    <p className="text-sm text-gray-600">
                      Near Concordia & Complexe Desjardins
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Column */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative">
                {/* Main Image */}
                <img
                  src="/assets/dental-implants.jpeg"
                  alt="Dental implant procedure in modern clinic downtown Montreal"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />

                {/* Price Badge */}
                <div className="absolute -bottom-4 -right-4 bg-white p-5 rounded-xl shadow-xl border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-xl">$3000</p>
                      <p className="text-sm text-gray-600">Complete Package</p>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full opacity-30 -z-10"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-green-100 rounded-full opacity-30 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Redesigned */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Image Container - Better constrained with elegant frame */}
            <div className="w-full lg:w-5/12">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl opacity-75 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
                <img
                  src="/assets/dr1.png"
                  alt="Dr. El O. Husseini - Dental Implant Specialist Downtown Montreal"
                  className="relative rounded-2xl shadow-xl w-full h-auto object-cover border-4 border-white"
                />
              </div>
            </div>

            {/* Content Container - Improved typography and spacing */}
            <div className="w-full lg:w-7/12">
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Meet <span className="text-blue-600">Dr. El O. Husseini</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Board-certified dental implant specialist serving downtown
                  Montreal with expertise in advanced implant dentistry and bone
                  grafting procedures.
                </p>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-1 bg-blue-600 mr-4"></span>
                  Dr. El O. Husseini, DDS
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Specializing in dental implants and surgical bone grafting,
                  Dr. Husseini brings years of expertise to downtown Montreal.
                  Located conveniently near Concordia University and Complexe
                  Desjardins, our practice focuses on providing affordable,
                  high-quality implant solutions.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-blue-600">
                    <div className="flex items-start space-x-4">
                      <Award className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Board Certified
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Implant Specialist
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-blue-600">
                    <div className="flex items-start space-x-4">
                      <Users className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Expert in
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Bone Grafting & Sinus Lifts
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="w-6 h-1 bg-blue-600 mr-3"></span>
                  Our Mission
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  To provide accessible, high-quality dental implant solutions
                  in the heart of Montreal, combining advanced 3D imaging
                  technology with transparent pricing and expert care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      <PricingHighlightSection />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ready for Your $3000 Dental Implant?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Book your consultation today at our convenient downtown Montreal
              location, minutes from Concordia University and Complexe
              Desjardins.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <PhoneCall className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Call Today</p>
                      <p className="text-gray-600">(514) 000-0000</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email Us</p>
                      <p className="text-gray-600">
                        info@cliniquedentairemontreal.ca
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Visit Our Clinic
                      </p>
                      <p className="text-gray-600">
                        1234 Sainte-Catherine Street West
                      </p>
                      <p className="text-gray-600">Montreal, QC H3B 1B3</p>
                      <p className="text-sm text-blue-600">
                        (Steps from Guy-Concordia & Complexe Desjardins)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="font-semibold text-gray-900 mb-4">
                  Clinic Hours
                </h4>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lunch Break</span>
                    <span>1:00 PM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday & Sunday</span>
                    <span>By Appointment</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    🚇 Easy access via Guy-Concordia metro station
                  </p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      {/* <WhatsAppButton /> */}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">ID</span>
                </div>
                <span className="text-xl font-bold">Implant-Downtown</span>
              </div>
              <p className="text-gray-400">
                Expert dental implant services in downtown Montreal,
                conveniently located near Concordia University and Complexe
                Desjardins.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection("about")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  About Dr. Husseini
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Reviews
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Dental Services</h4>
              <div className="space-y-2 text-gray-400">
                <p>$3000 Dental Implant + Crown</p>
                <p>Bone Grafts & Sinus Lifts</p>
                <p>3D CBCT Imaging</p>
                <p>Implant-Supported Bridges</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>1234 Sainte-Catherine Street West</p>
                <p>Montreal, QC H3B 1B3</p>
                <p>(514) 000-0000</p>
                <p>info@cliniquedentairemontreal.ca</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              © 2024 Dr. Husseini Dental Clinic. All rights reserved. | Downtown
              Montreal Dental Implants
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
