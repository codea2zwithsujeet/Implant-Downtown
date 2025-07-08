
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, DollarSign } from "lucide-react";
import { useTranslation } from "react-i18next";

const services = [
  {
    id: "implant-package",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=400&h=300&q=80",
    popular: true,
    price: "$3000"
  },
  {
    id: "bone-grafting",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&h=300&q=80",
    popular: false,
    price: "Consultation Required"
  },
  {
    id: "sinus-lift",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=400&h=300&q=80",
    popular: false,
    price: "Consultation Required"
  },
  {
    id: "cbct-imaging",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&h=300&q=80",
    popular: false,
    price: "Included"
  },
  {
    id: "implant-crowns",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=400&h=300&q=80",
    popular: false,
    price: "From $1500"
  },
  {
    id: "implant-bridges",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&h=300&q=80",
    popular: false,
    price: "Consultation Required"
  },
  {
    id: "specialist-consultation",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=400&h=300&q=80",
    popular: false,
    price: "Free"
  },
  {
    id: "periodontics",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=400&h=300&q=80",
    popular: false,
    price: "Varies"
  }
];

const serviceData = {
  "implant-package": {
    title: "DENTAL IMPLANT + CROWN PACKAGE",
    description: "Complete dental implant solution including titanium implant, custom ceramic crown, and all follow-up care for just $3000.",
    features: [
      "Surgical placement of titanium implant",
      "Custom ceramic crown from partner lab",
      "Full consultation & post-operative care"
    ]
  },
  "bone-grafting": {
    title: "BONE GRAFTS & REGENERATION",
    description: "Advanced bone regeneration techniques to prepare your jaw for successful dental implant placement.",
    features: [
      "Socket preservation grafting",
      "Ridge augmentation procedures",
      "Advanced grafting materials"
    ]
  },
  "sinus-lift": {
    title: "SINUS LIFT PROCEDURES",
    description: "Specialized sinus lift procedures to create adequate bone height for upper jaw dental implants.",
    features: [
      "Lateral window sinus lifts",
      "Crestal approach procedures",
      "Premium bone graft materials"
    ]
  },
  "cbct-imaging": {
    title: "3D CBCT IMAGING",
    description: "State-of-the-art 3D imaging technology for precise implant planning and diagnosis.",
    features: [
      "High-resolution 3D scans",
      "Precise implant planning",
      "Minimal radiation exposure"
    ]
  },
  "implant-crowns": {
    title: "IMPLANT-SUPPORTED CROWNS",
    description: "Beautiful, natural-looking ceramic crowns designed to match your existing teeth perfectly.",
    features: [
      "Custom ceramic materials",
      "Natural appearance and feel",
      "Durable and long-lasting"
    ]
  },
  "implant-bridges": {
    title: "IMPLANT-SUPPORTED BRIDGES",
    description: "Replace multiple missing teeth with implant-supported bridges for optimal function and aesthetics.",
    features: [
      "Multiple tooth replacement",
      "Improved chewing function",
      "Long-term stability"
    ]
  },
  "specialist-consultation": {
    title: "SPECIALIST CONSULTATIONS",
    description: "Comprehensive consultation with Dr. Husseini to develop your personalized treatment plan.",
    features: [
      "Thorough oral examination",
      "3D imaging included",
      "Personalized treatment plan"
    ]
  },
  "periodontics": {
    title: "PERIODONTICS & ORAL SURGERY",
    description: "Specialized periodontal and oral surgery procedures to support your overall oral health.",
    features: [
      "Gum disease treatment",
      "Soft tissue grafting",
      "Pre-implant surgery"
    ]
  }
};

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Downtown Montreal Implant Dentistry</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert dental implant services near Concordia University and Complexe Desjardins. Transparent pricing and board-certified specialists for all your implant needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              {service.popular && (
                <div className="bg-green-600 text-white text-center py-2">
                  <Badge className="bg-white text-green-600">🎯 Most Popular - $3000</Badge>
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <img 
                  src={service.image}
                  alt={serviceData[service.id as keyof typeof serviceData].title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg text-center">
                    {serviceData[service.id as keyof typeof serviceData].title}
                  </h3>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-blue-600 text-white">
                    {service.price}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <p className="text-gray-600 text-sm">{serviceData[service.id as keyof typeof serviceData].description}</p>
              </CardHeader>

              <CardContent>
                <div className="space-y-2">
                  {serviceData[service.id as keyof typeof serviceData].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {service.id === "implant-package" && (
                  <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-xs text-green-800 font-medium flex items-center">
                      <DollarSign className="w-4 h-4 mr-1" />
                      Complete package - No hidden fees!
                    </p>
                  </div>
                )}

                {service.id !== "implant-package" && (
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-xs text-blue-800 font-medium">
                      💡 Free consultation includes assessment and pricing
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Technology for Superior Results</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-blue-600 font-bold text-lg mb-2">3D CBCT Imaging</div>
                <p className="text-gray-600 text-sm">Precise implant planning with Cone Beam CT technology for optimal placement and safety</p>
              </div>
              <div>
                <div className="text-blue-600 font-bold text-lg mb-2">Computer Guided Surgery</div>
                <p className="text-gray-600 text-sm">Minimally invasive procedures using advanced surgical guides for precision</p>
              </div>
              <div>
                <div className="text-blue-600 font-bold text-lg mb-2">Premium Materials</div>
                <p className="text-gray-600 text-sm">High-quality titanium implants and ceramic crowns for long-lasting results</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                📍 <strong>Convenient Location:</strong> Minutes from Guy-Concordia metro, Quartier des Spectacles, McGill, and Place Ville-Marie
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
