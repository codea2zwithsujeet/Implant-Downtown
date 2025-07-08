
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { PhoneCall, Mail, MapPin, Award, GraduationCap, Calendar, Users, Star } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Dentists = () => {
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

  const dentists = [
    {
      id: 1,
      name: "Dr. Vassal Valai",
      title: "Surgeon Dentist",
      speciality: "Oral Surgery & Implants",
      experience: "15+ Years Experience",
      education: "DDS, University of Montreal",
      languages: ["English", "French", "Arabic"],
      rating: 4.9,
      reviews: 127,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&h=400&q=80",
      bio: "Dr. Valai specializes in complex oral surgeries and dental implants. With over 15 years of experience, he has performed thousands of successful procedures and is known for his gentle approach and precision.",
      achievements: [
        "Board Certified Oral Surgeon",
        "Member of Canadian Dental Association",
        "Published researcher in dental implantology"
      ]
    },
    {
      id: 2,
      name: "Dr. Jean-Pierre Masson",
      title: "Periodontist",
      speciality: "Gum Disease & Prevention",
      experience: "12+ Years Experience",
      education: "DDS, McGill University",
      languages: ["English", "French"],
      rating: 4.8,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&h=400&q=80",
      bio: "Dr. Masson is a renowned periodontist who focuses on preventing and treating gum disease. His expertise in periodontal therapy has helped countless patients maintain healthy gums and teeth.",
      achievements: [
        "Certified Periodontist",
        "Advanced Training in Laser Therapy",
        "Speaker at International Conferences"
      ]
    },
    {
      id: 3,
      name: "Dr. Jean Lachance",
      title: "General Dentist",
      speciality: "Family & Cosmetic Dentistry",
      experience: "20+ Years Experience",
      education: "DDS, Laval University",
      languages: ["English", "French", "Spanish"],
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&h=400&q=80",
      bio: "Dr. Lachance has been serving families in Montreal for over two decades. He combines traditional dental care with modern cosmetic techniques to help patients achieve their perfect smile.",
      achievements: [
        "Fellow of the Royal College of Dentists",
        "Certified in Cosmetic Dentistry",
        "Community Service Award Winner"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">ID</span>
              </div>
              <span className="text-xl font-bold text-gray-800">Implant Downtown</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="/dentists" className="text-blue-600 font-semibold">Our Dentists</a>
              <button onClick={() => scrollToSection("services")} className="text-gray-700 hover:text-blue-600 transition-colors">Services</button>
              <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-blue-600 transition-colors">Contact</button>
            </div>

            <div className="flex items-center space-x-2 md:space-x-4">
              <LanguageSwitcher />
              <a href="tel:+1-800-IMPLANT" className="hidden lg:flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                <PhoneCall className="w-4 h-4 mr-2" />
                <span className="font-semibold">1-800-IMPLANT</span>
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
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-6">
              Meet Our Expert Team
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Our <span className="text-blue-600">Dentists</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet our team of experienced dental professionals dedicated to providing you with the highest quality care and personalized treatment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Specialists</h3>
              <p className="text-gray-600">Board-certified dentists with specialized training and years of experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Patient-Centered Care</h3>
              <p className="text-gray-600">Personalized treatment plans tailored to your unique needs and goals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">Consistently high patient satisfaction ratings and successful outcomes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dentists Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-1 gap-12">
            {dentists.map((dentist, index) => (
              <Card key={dentist.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <img 
                        src={dentist.image}
                        alt={dentist.name}
                        className="w-full h-96 lg:h-full object-cover"
                      />
                      <div className="absolute top-6 left-6">
                        <Badge className="bg-blue-600 text-white">
                          {dentist.experience}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <div className="mb-6">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">{dentist.name}</h2>
                        <p className="text-xl text-blue-600 font-semibold mb-1">{dentist.title}</p>
                        <p className="text-lg text-gray-600 mb-4">{dentist.speciality}</p>
                        
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="flex items-center">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                            <span className="ml-2 text-gray-600">({dentist.reviews} reviews)</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-6 leading-relaxed">{dentist.bio}</p>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                            <GraduationCap className="w-4 h-4 mr-2 text-blue-600" />
                            Education
                          </h4>
                          <p className="text-gray-600">{dentist.education}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Languages</h4>
                          <div className="flex flex-wrap gap-2">
                            {dentist.languages.map((language) => (
                              <Badge key={language} variant="outline" className="text-blue-600 border-blue-600">
                                {language}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Achievements</h4>
                          <ul className="space-y-1">
                            {dentist.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-gray-600 flex items-center">
                                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-8">
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          <Calendar className="w-4 h-4 mr-2" />
                          Book with {dentist.name.split(' ')[1]}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Meet Your Dentist?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Schedule a consultation with one of our expert dentists and take the first step towards your perfect smile.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <PhoneCall className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak directly with our scheduling team</p>
              <a href="tel:+1-800-IMPLANT" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                1-800-IMPLANT
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us your questions or requests</p>
              <a href="mailto:info@implantdowntown.ca" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                info@implantdowntown.ca
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Visit Us</h3>
              <p className="text-gray-600 mb-4">Located in downtown Montreal</p>
              <p className="text-blue-600 font-semibold">
                123 Dental Way, Montreal, QC
              </p>
            </div>
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
              <p className="text-gray-400">
                Expert dental care with a team of specialized professionals dedicated to your oral health.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="/" className="block text-gray-400 hover:text-white transition-colors">Home</a>
                <a href="/dentists" className="block text-gray-400 hover:text-white transition-colors">Our Dentists</a>
                <button className="block text-gray-400 hover:text-white transition-colors">Services</button>
                <button className="block text-gray-400 hover:text-white transition-colors">Contact</button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-gray-400">
                <p>Dental Implants</p>
                <p>Oral Surgery</p>
                <p>Periodontal Care</p>
                <p>Family Dentistry</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>123 Dental Way</p>
                <p>Montreal, QC H3B 2Y7</p>
                <p>1-800-IMPLANT</p>
                <p>info@implantdowntown.ca</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 Implant Downtown. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dentists;
