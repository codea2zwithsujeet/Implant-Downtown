
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const services = [
  {
    id: "orthodontics",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=400&h=300&q=80",
    popular: false
  },
  {
    id: "oral-surgery",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&h=300&q=80",
    popular: true
  },
  {
    id: "root-canal",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=400&h=300&q=80",
    popular: false
  },
  {
    id: "implants",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=400&h=300&q=80",
    popular: false
  },
  {
    id: "dental-exam",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&h=300&q=80",
    popular: false
  },
  {
    id: "whitening",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=400&h=300&q=80",
    popular: false
  },
  {
    id: "child-care",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=400&h=300&q=80",
    popular: false
  },
  {
    id: "emergencies",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=400&h=300&q=80",
    popular: false
  }
];

export const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('services.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              {service.popular && (
                <div className="bg-blue-600 text-white text-center py-2">
                  <Badge className="bg-white text-blue-600">{t('services.mostPopular')}</Badge>
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <img 
                  src={service.image}
                  alt={t(`services.${service.id}.title`)}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg text-center">
                    {t(`services.${service.id}.title`)}
                  </h3>
                </div>
              </div>

              <CardHeader>
                <p className="text-gray-600 text-sm">{t(`services.${service.id}.description`)}</p>
              </CardHeader>

              <CardContent>
                <div className="space-y-2">
                  {Array.from({ length: 3 }, (_, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">
                        {t(`services.${service.id}.features.${index}`)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-xs text-blue-800 font-medium">
                    💡 {t('services.consultationNote')}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('services.technologyTitle')}</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-blue-600 font-bold text-lg mb-2">{t('services.technology3D')}</div>
                <p className="text-gray-600 text-sm">{t('services.technology3DDesc')}</p>
              </div>
              <div>
                <div className="text-blue-600 font-bold text-lg mb-2">{t('services.technologyGuided')}</div>
                <p className="text-gray-600 text-sm">{t('services.technologyGuidedDesc')}</p>
              </div>
              <div>
                <div className="text-blue-600 font-bold text-lg mb-2">{t('services.technologyMaterials')}</div>
                <p className="text-gray-600 text-sm">{t('services.technologyMaterialsDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
