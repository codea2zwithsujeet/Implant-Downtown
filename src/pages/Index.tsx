import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
} from "lucide-react";
import { Helmet } from "react-helmet";

const Index = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

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
  };

  return (
    <>
      <Helmet>
        <title>Dental Implants in Montreal | Implant Downtown Clinic</title>
        <meta
          name="description"
          content="Looking for expert dental implants in Montreal? Implant Downtown offers full-mouth, All-on-4, and single-tooth implants with  consultations and flexible financing."
        />
        <meta
          name="keywords"
          content="Dental Implants Montreal, Implant Dentist Montreal, All-on-4 Implants, Full Mouth Reconstruction, Implant Downtown"
        />
        <link rel="canonical" href="https://www.implantdowntown.ca/" />
      </Helmet>

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
                  Implant Downtown
                </span>
              </div>

              <div className="hidden md:flex space-x-8">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {t("nav.home")}
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {t("nav.about")}
                </button>
                 <a href="/dentists" className="text-gray-700 hover:text-blue-600 transition-colors">Our Dentists</a>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {t("nav.services")}
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {t("nav.reviews")}
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {t("nav.contact")}
                </button>
              </div>

              <div className="flex items-center space-x-2 md:space-x-4">
                <LanguageSwitcher />
                <a
                  href="tel:+1-800-IMPLANT"
                  className="hidden lg:flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <PhoneCall className="w-4 h-4 mr-2" />
                  <span className="font-semibold">514-7089888</span>
                </a>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-blue-600 hover:bg-blue-700 text-sm md:text-base px-3 py-2 md:px-4 md:py-2"
                  size="sm"
                >
                  <span className="hidden sm:inline">Book Consultation</span>
                  <span className="sm:hidden">Book</span>
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white pt-20"
        >
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                    {t("hero.badge")}
                  </Badge>
                  <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                    {t("hero.title")}
                    <span className="text-blue-600">
                      {t("hero.titleHighlight")}
                    </span>
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {t("hero.subtitle")}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    onClick={() => scrollToSection("contact")}
                    className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    {t("hero.bookConsultation")}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => scrollToSection("services")}
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-6"
                  >
                    {t("hero.learnMore")}
                  </Button>
                </div>

                <div className="flex items-center space-x-8 pt-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center text-white text-sm font-semibold"
                        >
                          {String.fromCharCode(64 + i)}
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <p className="text-sm text-gray-600">
                        {t("hero.happyPatients")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative z-10">
                  <img
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&h=600&q=80"
                    alt="Professional dental clinic with modern equipment"
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        15+ {t("hero.experience")}
                      </p>
                      <p className="text-sm text-gray-600">
                        {t("hero.experience")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t("about.title")}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t("about.subtitle")}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&h=400&q=80"
                  alt="Professional female dentist in modern clinic"
                  className="rounded-2xl shadow-lg"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {t("about.doctorName")}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {t("about.doctorDescription")}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <Award className="w-8 h-8 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        {t("about.boardCertified")}
                      </p>
                      <p className="text-sm text-gray-600">
                        {t("about.implantSpecialist")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-8 h-8 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">2000+</p>
                      <p className="text-sm text-gray-600">
                        {t("about.successfulImplants")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {t("about.missionTitle")}
                  </h4>
                  <p className="text-gray-700">
                    {t("about.missionDescription")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <ServicesSection />

        {/* Emergency Section */}
        <EmergencySection />

        {/* Why Choose Us */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Why Choose ImplantPro Clinic?
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Experience the difference of advanced technology, expert care,
                and personalized treatment plans.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: "Expert Specialists",
                  description:
                    "Board-certified implant specialists with 15+ years experience",
                },
                {
                  icon: Clock,
                  title: "Advanced Technology",
                  description:
                    "3D imaging and computer-guided implant placement",
                },
                {
                  icon: CheckCircle,
                  title: "Proven Results",
                  description:
                    "98% success rate with lifetime warranty options",
                },
                {
                  icon: Users,
                  title: "Flexible Financing",
                  description:
                    "Multiple payment options and insurance accepted",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white"
                >
                  <CardContent className="p-6 text-center">
                    <feature.icon className="w-12 h-12 mx-auto mb-4 text-white" />
                    <h3 className="text-xl font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-blue-100">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ Section */}
        <FAQSection />

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t("contact.title")}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t("contact.subtitle")}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {t("contact.getInTouch")}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <PhoneCall className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {t("contact.callUs")}
                        </p>
                        <p className="text-gray-600">514-7089888</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {t("contact.emailUs")}
                        </p>
                        <p className="text-gray-600">
                          info@implantproclinic.ca
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {t("contact.visitUs")}
                        </p>
                        <p className="text-gray-600">
                          123 Dental Way, Toronto, ON M5V 3A3
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    {t("contact.officeHours")}
                  </h4>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>{t("contact.mondayThursday")}</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t("contact.friday")}</span>
                      <span>8:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t("contact.saturday")}</span>
                      <span>9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t("contact.sunday")}</span>
                      <span>{t("contact.closed")}</span>
                    </div>
                  </div>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">ID</span>
                  </div>
                  <span className="text-xl font-bold">Implant Downtown</span>
                </div>
                <p className="text-gray-400">{t("footer.description")}</p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">{t("footer.quickLinks")}</h4>
                <div className="space-y-2">
                  <button
                    onClick={() => scrollToSection("about")}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {t("nav.about")}
                  </button>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {t("footer.services")}
                  </button>
                  <button
                    onClick={() => scrollToSection("testimonials")}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {t("nav.reviews")}
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {t("nav.contact")}
                  </button>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">{t("footer.services")}</h4>
                <div className="space-y-2 text-gray-400">
                  <p>Single Tooth Implants</p>
                  <p>All-on-4 Implants</p>
                  <p>Full Mouth Reconstruction</p>
                  <p>Implant Supported Dentures</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">
                  {t("footer.contactInfo")}
                </h4>
                <div className="space-y-2 text-gray-400">
                  <p>123 Dental Way</p>
                  <p>Toronto, ON M5V 3A3</p>
                  <p>514-7089888</p>
                  <p>info@implantproclinic.ca</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>{t("footer.copyright")}</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
