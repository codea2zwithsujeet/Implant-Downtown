import React from 'react';
import { DollarSign, MapPin, Award, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingHighlightSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Premium Half-Screen Highlight Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 animate-gradient-shift"></div>
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')]"></div>

        <div className="container h-full mx-auto px-4 sm:px-6 flex flex-col justify-center">
          <div className="relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Exceptional Care in the <span className="text-blue-200">Heart of Montreal</span>
              </h2>
              <p className="text-lg md:text-xl text-blue-100 opacity-90 max-w-2xl mx-auto">
                Combining premium implant dentistry with unparalleled convenience near Concordia and Complexe Desjardins.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                {
                  icon: DollarSign,
                  title: "$3000",
                  subtitle: "Complete Package",
                  highlight: true
                },
                {
                  icon: MapPin,
                  title: "2 Min",
                  subtitle: "From Concordia"
                },
                {
                  icon: Award,
                  title: "15+ Years",
                  subtitle: "Specialist Experience"
                },
                {
                  icon: Clock,
                  title: "Same-Day",
                  subtitle: "3D Imaging"
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className={`relative group rounded-xl p-0.5 overflow-hidden ${feature.highlight ? 
                    'bg-gradient-to-r from-blue-400 to-green-400' : 
                    'bg-white/10'}`}
                >
                  <div className="h-full bg-blue-600/90 group-hover:bg-blue-500/90 transition-all duration-300 rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${feature.highlight ? 
                      'bg-white text-blue-600' : 
                      'bg-blue-400/20 text-white'}`}
                    >
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-blue-100 text-center">
                      {feature.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating CTA */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
          <Button
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-5 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book Your Consultation
          </Button>
        </div>
      </section>

      {/* Add this to your global CSS file */}
      <style>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 12s ease infinite;
        }
      `}</style>
    </>
  );
};

export default PricingHighlightSection;