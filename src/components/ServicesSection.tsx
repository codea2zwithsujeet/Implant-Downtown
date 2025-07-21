import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, DollarSign } from "lucide-react";

const services = [
  {
    id: "dental-implants",
    image: "/assets/implant.png",
    popular: true,
    price: "$3000"
  },
  {
    id: "bone-grafts-sinus-lift",
    image: "/assets/bone-grafts.png",
    popular: false,
    price: "Consultation Required"
  },
  {
    id: "cbct-imaging",
    image: "/assets/cbct.png",
    popular: false,
    price: "Included"
  },
  {
    id: "implant-crowns-bridges",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=400&h=300&q=80",
    popular: false,
    price: "Consultation Required"
  },
  {
    id: "specialist-consultations",
    image: "/assets/consultation.png",
    popular: false,
    price: "Included"
  }
];

const serviceData = {
  "dental-implants": {
    title: "DENTAL IMPLANTS",
    description: "Long-lasting tooth replacement with titanium implants and custom ceramic crowns for just $3000.",
    features: [
      "Surgical placement of titanium implant",
      "Custom ceramic crown from partner lab",
      "Full consultation & post-operative care"
    ]
  },
  "bone-grafts-sinus-lift": {
    title: "BONE GRAFTS & SINUS LIFT",
    description: "Advanced bone regeneration techniques to prepare your jaw for successful dental implant placement.",
    features: [
      "Socket preservation grafting",
      "Ridge augmentation procedures",
      "Sinus lift procedures"
    ]
  },
  "cbct-imaging": {
    title: "3D CBCT IMAGING",
    description: "In-house radiology for precise implant planning using state-of-the-art 3D imaging technology.",
    features: [
      "High-resolution 3D scans",
      "Precise implant planning",
      "Minimal radiation exposure"
    ]
  },
  "implant-crowns-bridges": {
    title: "IMPLANT-SUPPORTED CROWNS & BRIDGES",
    description: "Functional and aesthetic restorations designed to match your existing teeth perfectly.",
    features: [
      "Custom ceramic materials",
      "Natural appearance and feel",
      "Multiple tooth replacement options"
    ]
  },
  "specialist-consultations": {
    title: "SPECIALIST CONSULTATIONS",
    description: "Periodontics, oral surgery, and more with comprehensive consultation by Dr. Oussama El-Housseini.",
    features: [
      "Thorough oral examination",
      "3D imaging included",
      "Personalized treatment plan"
    ]
  }
};

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Downtown Montreal Implant Dentistry</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert dental implant services near Concordia University and Complexe Desjardins. Transparent pricing and board-certified specialists.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service) => (
            <Card key={service.id} className="flex flex-col group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              {service.popular && (
                <div className="bg-green-600 text-white text-center py-2">
                  <Badge className="bg-white text-green-600">🎯 Most Popular - $3000</Badge>
                </div>
              )}

              <div className="relative">
                <img 
                  src={service.image}
                  alt={serviceData[service.id as keyof typeof serviceData].title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 left-2">
                  <Badge className="bg-blue-600 text-white">
                    {service.price}
                  </Badge>
                </div>
              </div>

              <CardHeader className="flex-1">
                <h3 className="text-center font-semibold text-base text-gray-900">
                  {serviceData[service.id as keyof typeof serviceData].title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {serviceData[service.id as keyof typeof serviceData].description}
                </p>
              </CardHeader>

              <CardContent>
                <div className="space-y-2">
                  {serviceData[service.id as keyof typeof serviceData].features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-2 bg-blue-50 rounded-lg text-center text-xs text-blue-800 font-medium">
                  💡 Free consultation includes assessment and pricing
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
