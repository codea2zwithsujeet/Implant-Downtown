import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        home: "Home",
        about: "About",
        services: "Services",
        reviews: "Reviews",
        contact: "Contact"
      },
      // Hero Section
      hero: {
        badge: "🇨🇦 Proudly Serving Canada",
        title: "Restore Your Smile with Expert",
        titleHighlight: " Dental Care",
        subtitle: "Transform your life with comprehensive dental care and natural-looking solutions. Our advanced techniques and compassionate care ensure lasting results you can smile about.",
        bookConsultation: "Book Consultation",
        learnMore: "Learn More",
        happyPatients: "Happy Patients",
        experience: "Years Experience"
      },
      // About Section
      about: {
        title: "About Implant Downtown",
        subtitle: "Leading the way in dental care excellence across Canada with cutting-edge technology and compassionate care.",
        doctorName: "Dr. Vassal Valai, DDS",
        doctorDescription: "With over 15 years of specialized experience in comprehensive dentistry, Dr. Johnson has transformed thousands of smiles across Canada. She combines advanced techniques with a gentle, patient-centered approach to deliver exceptional results.",
        boardCertified: "Board Certified",
        implantSpecialist: "Dental Specialist",
        successfulImplants: "Successful Treatments",
        missionTitle: "Our Mission",
        missionDescription: "To restore confidence and improve quality of life through advanced dental solutions, delivered with the highest standards of care and compassion."
      },
      // Services
      services: {
        title: "Our Dental Services",
        subtitle: "Comprehensive dental solutions tailored to restore your smile, confidence, and quality of life.",
        mostPopular: "Most Popular",
        orthodontics: {
          title: "ORTHODONTICS",
          description: "Straighten your teeth with modern orthodontic solutions including braces and clear aligners.",
          features: {
            0: "Traditional and clear braces",
            1: "Invisalign treatment available",
            2: "Custom treatment plans"
          }
        },
        "oral-surgery": {
          title: "ORAL SURGERY",
          description: "Expert surgical procedures for complex dental conditions and tooth extractions.",
          features: {
            0: "Wisdom tooth removal",
            1: "Advanced surgical techniques",
            2: "Sedation options available"
          }
        },
        "root-canal": {
          title: "ROOT CANAL",
          description: "Save your natural teeth with advanced endodontic treatment and pain relief.",
          features: {
            0: "Pain-free procedures",
            1: "Advanced technology",
            2: "High success rates"
          }
        },
        implants: {
          title: "IMPLANTS",
          description: "Replace missing teeth with permanent, natural-looking dental implants.",
          features: {
            0: "Same-day placement available",
            1: "Lifetime warranty options",
            2: "Natural appearance and feel"
          }
        },
        "dental-exam": {
          title: "DENTAL EXAM",
          description: "Comprehensive dental examinations and preventive care for optimal oral health.",
          features: {
            0: "Digital X-rays included",
            1: "Thorough health assessment",
            2: "Preventive care planning"
          }
        },
        whitening: {
          title: "WHITENING",
          description: "Professional teeth whitening for a brighter, more confident smile.",
          features: {
            0: "Professional-grade treatments",
            1: "Safe and effective",
            2: "Immediate results"
          }
        },
        "child-care": {
          title: "DENTAL CARE FOR YOUR CHILD",
          description: "Specialized pediatric dental care in a friendly, comfortable environment.",
          features: {
            0: "Child-friendly approach",
            1: "Preventive treatments",
            2: "Education and guidance"
          }
        },
        emergencies: {
          title: "DENTAL EMERGENCIES",
          description: "Urgent dental care when you need it most, available for emergency situations.",
          features: {
            0: "24/7 emergency care",
            1: "Same-day appointments",
            2: "Pain relief priority"
          }
        },
        consultationNote: "Free consultation includes digital imaging and personalized treatment plan",
        technologyTitle: "Advanced Technology for Superior Results",
        technology3D: "3D Imaging",
        technology3DDesc: "Precise planning with CBCT scans",
        technologyGuided: "Computer Guided",
        technologyGuidedDesc: "Minimally invasive procedures",
        technologyMaterials: "Premium Materials",
        technologyMaterialsDesc: "High-quality dental materials"
      },
      // Emergency Section
      emergency: {
        badge: "🚨 Emergency Dental Care Available",
        title: "Emergency Dentist in Montreal",
        subtitle: "When dental emergencies strike, we're here to help. Professional emergency dental care with advanced technology and compassionate treatment.",
        welcomeTitle: "Welcome to Dr Lachance Dental Center",
        welcomeDescription: "Dr. Lachance dental center and partners. Are you looking for a dentist in downtown Montreal? Dr. Lachance and Partners dental center has maintained high quality care within the Complexe Desjardins since 1978.",
        urgentCare: "Urgent Dental Care",
        urgentCareDesc: "Together we provide sophisticated care and the latest technology for all your oral health needs. Whether it is for dental cleaning, a crown or advice on your dental hygiene, our team will help you.",
        callNow: "Call Now",
        askConsultation: "Ask for a Consultation",
        available247: "Available 24/7",
        alwaysHere: "We're always here",
        downtown: "Downtown Location",
        montreal: "Montreal, QC",
        sophisticatedCare: "Sophisticated Care & Latest Technology",
        sophisticatedCareDesc: "Our experienced team combines advanced dental technology with personalized care to ensure the best possible outcomes for all your dental needs."
      },
      // Contact
      contact: {
        title: "Ready to Transform Your Smile?",
        subtitle: "Book your consultation today and take the first step towards a confident, beautiful smile.",
        getInTouch: "Get in Touch",
        callUs: "Call Us",
        emailUs: "Email Us",
        visitUs: "Visit Us",
        officeHours: "Office Hours",
        mondayThursday: "Monday - Thursday",
        friday: "Friday",
        saturday: "Saturday",
        sunday: "Sunday",
        closed: "Closed",
        form: {
          title: "Book Your Consultation",
          subtitle: "Fill out the form below and we'll contact you within 24 hours.",
          fullName: "Full Name",
          phoneNumber: "Phone Number",
          emailAddress: "Email Address",
          consultationType: "Consultation Type",
          message: "Message (Optional)",
          sendRequest: "Send Consultation Request",
          agreement: "By submitting this form, you agree to be contacted by our team regarding your consultation request.",
          consultationTypes: {
            general: "General Consultation",
            orthodontics: "Orthodontics",
            oralSurgery: "Oral Surgery",
            rootCanal: "Root Canal",
            implants: "Dental Implants",
            dentalExam: "Dental Exam",
            whitening: "Teeth Whitening",
            childCare: "Pediatric Care",
            emergencies: "Emergency Care"
          },
          successTitle: "Consultation Request Sent!",
          successDescription: "We'll contact you within 24 hours to schedule your consultation."
        }
      },
      // Footer
      footer: {
        description: "Restoring smiles across Canada with expert dental solutions.",
        quickLinks: "Quick Links",
        services: "Services",
        contactInfo: "Contact Info",
        copyright: "© 2024 Implant Downtown. All rights reserved. | Privacy Policy | Terms of Service"
      }
    }
  },
  fr: {
    translation: {
      // Navigation
      nav: {
        home: "Accueil",
        about: "À propos",
        services: "Services",
        reviews: "Avis",
        contact: "Contact"
      },
      // Hero Section
      hero: {
        badge: "🇨🇦 Fièrement au service du Canada",
        title: "Restaurez votre sourire avec des",
        titleHighlight: " Soins dentaires experts",
        subtitle: "Transformez votre vie avec des soins dentaires complets et des solutions d'apparence naturelle. Nos techniques avancées et nos soins compatissants garantissent des résultats durables qui vous feront sourire.",
        bookConsultation: "Réserver consultation",
        learnMore: "En savoir plus",
        happyPatients: "Patients satisfaits",
        experience: "Années d'expérience"
      },
      // About Section
      about: {
        title: "À propos de Implant Downtown",
        subtitle: "Leader en excellence des soins dentaires au Canada avec une technologie de pointe et des soins compatissants.",
        doctorName: "Dr. Vassal Valai, DDS",
        doctorDescription: "Avec plus de 15 ans d'expérience spécialisée en dentisterie complète, le Dr Johnson a transformé des milliers de sourires à travers le Canada. Elle combine des techniques avancées avec une approche douce et centrée sur le patient pour offrir des résultats exceptionnels.",
        boardCertified: "Certifiée",
        implantSpecialist: "Spécialiste dentaire",
        successfulImplants: "Traitements réussis",
        missionTitle: "Notre mission",
        missionDescription: "Restaurer la confiance et améliorer la qualité de vie grâce à des solutions dentaires avancées, livrées avec les plus hauts standards de soins et de compassion."
      },
      // Services
      services: {
        title: "Nos services dentaires",
        subtitle: "Solutions dentaires complètes adaptées pour restaurer votre sourire, votre confiance et votre qualité de vie.",
        mostPopular: "Le plus populaire",
        orthodontics: {
          title: "ORTHODONTIE",
          description: "Redressez vos dents avec des solutions orthodontiques modernes incluant appareils et aligneurs transparents.",
          features: {
            0: "Appareils traditionnels et transparents",
            1: "Traitement Invisalign disponible",
            2: "Plans de traitement personnalisés"
          }
        },
        "oral-surgery": {
          title: "CHIRURGIE BUCCALE",
          description: "Procédures chirurgicales expertes pour les conditions dentaires complexes et extractions.",
          features: {
            0: "Extraction des dents de sagesse",
            1: "Techniques chirurgicales avancées",
            2: "Options de sédation disponibles"
          }
        },
        "root-canal": {
          title: "CANAL RADICULAIRE",
          description: "Sauvez vos dents naturelles avec un traitement endodontique avancé et soulagement de la douleur.",
          features: {
            0: "Procédures sans douleur",
            1: "Technologie avancée",
            2: "Taux de succès élevés"
          }
        },
        implants: {
          title: "IMPLANTS",
          description: "Remplacez les dents manquantes par des implants dentaires permanents d'apparence naturelle.",
          features: {
            0: "Pose le jour même disponible",
            1: "Options de garantie à vie",
            2: "Apparence et sensation naturelles"
          }
        },
        "dental-exam": {
          title: "EXAMEN DENTAIRE",
          description: "Examens dentaires complets et soins préventifs pour une santé bucco-dentaire optimale.",
          features: {
            0: "Radiographies numériques incluses",
            1: "Évaluation de santé approfondie",
            2: "Planification des soins préventifs"
          }
        },
        whitening: {
          title: "BLANCHIMENT",
          description: "Blanchiment dentaire professionnel pour un sourire plus éclatant et plus confiant.",
          features: {
            0: "Traitements de qualité professionnelle",
            1: "Sûr et efficace",
            2: "Résultats immédiats"
          }
        },
        "child-care": {
          title: "SOINS DENTAIRES POUR VOTRE ENFANT",
          description: "Soins dentaires pédiatriques spécialisés dans un environnement convivial et confortable.",
          features: {
            0: "Approche adaptée aux enfants",
            1: "Traitements préventifs",
            2: "Éducation et orientation"
          }
        },
        emergencies: {
          title: "URGENCES DENTAIRES",
          description: "Soins dentaires urgents quand vous en avez le plus besoin, disponibles pour les situations d'urgence.",
          features: {
            0: "Soins d'urgence 24/7",
            1: "Rendez-vous le jour même",
            2: "Priorité au soulagement de la douleur"
          }
        },
        consultationNote: "La consultation gratuite comprend l'imagerie numérique et un plan de traitement personnalisé",
        technologyTitle: "Technologie avancée pour des résultats supérieurs",
        technology3D: "Imagerie 3D",
        technology3DDesc: "Planification précise avec scans CBCT",
        technologyGuided: "Guidé par ordinateur",
        technologyGuidedDesc: "Procédures mini-invasives",
        technologyMaterials: "Matériaux premium",
        technologyMaterialsDesc: "Matériaux dentaires de haute qualité"
      },
      // Emergency Section
      emergency: {
        badge: "🚨 Soins dentaires d'urgence disponibles",
        title: "Dentiste d'urgence à Montréal",
        subtitle: "Quand les urgences dentaires surviennent, nous sommes là pour vous aider. Soins dentaires d'urgence professionnels avec technologie avancée et traitement compatissant.",
        welcomeTitle: "Bienvenue au Centre Dentaire Dr Lachance",
        welcomeDescription: "Centre dentaire Dr. Lachance et partenaires. Vous cherchez un dentiste au centre-ville de Montréal? Le centre dentaire Dr. Lachance et Partenaires maintient des soins de haute qualité au Complexe Desjardins depuis 1978.",
        urgentCare: "Soins dentaires urgents",
        urgentCareDesc: "Ensemble, nous offrons des soins sophistiqués et la technologie la plus récente pour tous vos besoins de santé bucco-dentaire. Que ce soit pour un nettoyage dentaire, une couronne ou des conseils sur votre hygiène dentaire, notre équipe vous aidera.",
        callNow: "Appelez maintenant",
        askConsultation: "Demander une consultation",
        available247: "Disponible 24/7",
        alwaysHere: "Nous sommes toujours là",
        downtown: "Emplacement centre-ville",
        montreal: "Montréal, QC",
        sophisticatedCare: "Soins sophistiqués et technologie de pointe",
        sophisticatedCareDesc: "Notre équipe expérimentée combine la technologie dentaire avancée avec des soins personnalisés pour assurer les meilleurs résultats possibles pour tous vos besoins dentaires."
      },
      // Contact
      contact: {
        title: "Prêt à transformer votre sourire?",
        subtitle: "Réservez votre consultation aujourd'hui et faites le premier pas vers un sourire confiant et beau.",
        getInTouch: "Nous contacter",
        callUs: "Appelez-nous",
        emailUs: "Écrivez-nous",
        visitUs: "Visitez-nous",
        officeHours: "Heures d'ouverture",
        mondayThursday: "Lundi - Jeudi",
        friday: "Vendredi",
        saturday: "Samedi",
        sunday: "Dimanche",
        closed: "Fermé",
        form: {
          title: "Réservez votre consultation",
          subtitle: "Remplissez le formulaire ci-dessous et nous vous contacterons dans les 24 heures.",
          fullName: "Nom complet",
          phoneNumber: "Numéro de téléphone",
          emailAddress: "Adresse e-mail",
          consultationType: "Type de consultation",
          message: "Message (Optionnel)",
          sendRequest: "Envoyer la demande de consultation",
          agreement: "En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe concernant votre demande de consultation.",
          consultationTypes: {
            general: "Consultation générale",
            orthodontics: "Orthodontie",
            oralSurgery: "Chirurgie buccale",
            rootCanal: "Canal radiculaire",
            implants: "Implants dentaires",
            dentalExam: "Examen dentaire",
            whitening: "Blanchiment des dents",
            childCare: "Soins pédiatriques",
            emergencies: "Soins d'urgence"
          },
          successTitle: "Demande de consultation envoyée!",
          successDescription: "Nous vous contacterons dans les 24 heures pour planifier votre consultation."
        }
      },
      // Footer
      footer: {
        description: "Restaurer les sourires à travers le Canada avec des solutions dentaires expertes.",
        quickLinks: "Liens rapides",
        services: "Services",
        contactInfo: "Informations de contact",
        copyright: "© 2024 Clinique Implant Downtown. Tous droits réservés. | Politique de confidentialité | Conditions d'utilisation"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
