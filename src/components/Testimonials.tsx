
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Michael Thompson",
    location: "Toronto, ON",
    rating: 5,
    text: "Dr. Johnson and her team completely transformed my smile with All-on-4 implants. The process was much easier than I expected, and the results are incredible. I can eat anything I want and smile with confidence again!",
    treatment: "All-on-4 Dental Implants"
  },
  {
    name: "Sarah Mitchell",
    location: "Vancouver, BC",
    rating: 5,
    text: "After losing a front tooth in an accident, I was devastated. The single tooth implant procedure was painless, and you can't even tell it's not my natural tooth. Thank you for giving me my confidence back!",
    treatment: "Single Tooth Implant"
  },
  {
    name: "Robert Chen",
    location: "Calgary, AB",
    rating: 5,
    text: "I had been struggling with dentures for years. The implant-supported dentures have been life-changing. They're secure, comfortable, and I feel like myself again. Best decision I ever made!",
    treatment: "Implant Supported Dentures"
  },
  {
    name: "Linda Johnson",
    location: "Montreal, QC",
    rating: 5,
    text: "The full mouth reconstruction seemed overwhelming at first, but Dr. Johnson explained everything clearly. The financing options made it affordable, and the results exceeded my expectations. Professional and caring team!",
    treatment: "Full Mouth Reconstruction"
  },
  {
    name: "David Wilson",
    location: "Ottawa, ON",
    rating: 5,
    text: "I was nervous about getting dental implants, but the team made me feel comfortable throughout the entire process. The 3D imaging technology they use is amazing, and my implants fit perfectly!",
    treatment: "Multiple Dental Implants"
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real patients who have transformed their lives with dental implants.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="shadow-lg border-0">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>
                
                <div className="space-y-2">
                  <p className="font-semibold text-lg text-gray-900">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].location}
                  </p>
                  <p className="text-sm text-blue-600 font-medium">
                    {testimonials[currentIndex].treatment}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:bg-gray-50"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:bg-gray-50"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <p className="text-gray-600">Happy Patients</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
            <p className="text-gray-600">Success Rate</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
            <p className="text-gray-600">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};
