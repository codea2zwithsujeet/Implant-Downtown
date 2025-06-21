
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Clock, MapPin, AlertCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export const EmergencySection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-red-100 text-red-800 mb-4">
            {t('emergency.badge')}
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('emergency.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('emergency.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('emergency.welcomeTitle')}</h3>
              <p className="text-gray-600 mb-6">
                {t('emergency.welcomeDescription')}
              </p>
            </div>

            <div className="space-y-4">
              <Card className="border-red-200">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-red-700">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    {t('emergency.urgentCare')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">
                    {t('emergency.urgentCareDesc')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="bg-red-600 hover:bg-red-700 flex-1">
                      <Phone className="w-4 h-4 mr-2" />
                      {t('emergency.callNow')}
                    </Button>
                    <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 flex-1">
                      {t('emergency.askConsultation')}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-white shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-8 h-8 text-blue-600" />
                      <div>
                        <p className="font-semibold text-gray-900">{t('emergency.available247')}</p>
                        <p className="text-sm text-gray-600">{t('emergency.alwaysHere')}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-8 h-8 text-blue-600" />
                      <div>
                        <p className="font-semibold text-gray-900">{t('emergency.downtown')}</p>
                        <p className="text-sm text-gray-600">{t('emergency.montreal')}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">{t('emergency.sophisticatedCare')}</h4>
              <p className="text-gray-700 text-sm">
                {t('emergency.sophisticatedCareDesc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
