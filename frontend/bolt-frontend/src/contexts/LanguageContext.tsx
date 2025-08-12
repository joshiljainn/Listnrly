import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    features: 'Features',
    pricing: 'Pricing',
    about: 'About',
    contact: 'Contact',
    login: 'Login',
    signup: 'Sign Up',
    
    // Hero Section
    heroTitle: 'Unlock Customer Insights from Your Apps',
    heroSubtitle: 'Transform your app data into actionable business intelligence with our advanced analytics platform',
    getStarted: 'Get Started',
    watchDemo: 'Watch Demo',
    
    // Features
    featuresTitle: 'Why Choose Our Analytics Platform',
    featureRealTime: 'Real-time Analytics',
    featureRealTimeDesc: 'Monitor your app performance and user behavior in real-time with instant insights',
    featureAI: 'AI-Powered Insights',
    featureAIDesc: 'Leverage machine learning to discover patterns and predict user trends',
    featureCustomizable: 'Customizable Dashboards',
    featureCustomizableDesc: 'Create personalized dashboards that fit your specific business needs',
    
    // Reviews
    reviewsTitle: 'What Our Customers Say',
    
    // Auth Forms
    loginTitle: 'Welcome Back',
    signupTitle: 'Create Your Account',
    fullName: 'Full Name',
    company: 'Company',
    email: 'Email',
    password: 'Password',
    forgotPassword: 'Forgot Password?',
    noAccount: "Don't have an account?",
    haveAccount: 'Already have an account?',
    
    // Footer
    footerTagline: 'Empowering businesses with data-driven insights',
    product: 'Product',
    company: 'Company',
    support: 'Support',
    legal: 'Legal',
  },
  hi: {
    // Navigation
    home: 'होम',
    features: 'विशेषताएं',
    pricing: 'मूल्य निर्धारण',
    about: 'हमारे बारे में',
    contact: 'संपर्क',
    login: 'लॉग इन',
    signup: 'साइन अप',
    
    // Hero Section
    heroTitle: 'अपने ऐप्स से ग्राहक अंतर्दृष्टि प्राप्त करें',
    heroSubtitle: 'हमारे उन्नत एनालिटिक्स प्लेटफॉर्म के साथ अपने ऐप डेटा को कार्यान्वित व्यावसायिक बुद्धिमत्ता में बदलें',
    getStarted: 'शुरू करें',
    watchDemo: 'डेमो देखें',
    
    // Features
    featuresTitle: 'हमारे एनालिटिक्स प्लेटफॉर्म को क्यों चुनें',
    featureRealTime: 'रियल-टाइम एनालिटिक्स',
    featureRealTimeDesc: 'तत्काल अंतर्दृष्टि के साथ अपने ऐप के प्रदर्शन और उपयोगकर्ता व्यवहार की निगरानी करें',
    featureAI: 'AI-संचालित अंतर्दृष्टि',
    featureAIDesc: 'पैटर्न खोजने और उपयोगकर्ता रुझानों की भविष्यवाणी करने के लिए मशीन लर्निंग का लाभ उठाएं',
    featureCustomizable: 'अनुकूलन योग्य डैशबोर्ड',
    featureCustomizableDesc: 'अपनी विशिष्ट व्यावसायिक आवश्यकताओं के अनुकूल व्यक्तिगत डैशबोर्ड बनाएं',
    
    // Reviews
    reviewsTitle: 'हमारे ग्राहक क्या कहते हैं',
    
    // Auth Forms
    loginTitle: 'वापस स्वागत है',
    signupTitle: 'अपना खाता बनाएं',
    fullName: 'पूरा नाम',
    company: 'कंपनी',
    email: 'ईमेल',
    password: 'पासवर्ड',
    forgotPassword: 'पासवर्ड भूल गए?',
    noAccount: 'खाता नहीं है?',
    haveAccount: 'पहले से ही खाता है?',
    
    // Footer
    footerTagline: 'डेटा-संचालित अंतर्दृष्टि के साथ व्यवसायों को सशक्त बनाना',
    product: 'उत्पाद',
    company: 'कंपनी',
    support: 'समर्थन',
    legal: 'कानूनी',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};