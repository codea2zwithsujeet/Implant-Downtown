
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2"
      >
        <Globe className="w-4 h-4" />
        <span>{i18n.language === 'fr' ? 'FR' : 'EN'}</span>
      </Button>
      
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          <button
            onClick={() => changeLanguage('en')}
            className="block w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors"
          >
            English
          </button>
          <button
            onClick={() => changeLanguage('fr')}
            className="block w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors"
          >
            Français
          </button>
        </div>
      )}
    </div>
  );
};
