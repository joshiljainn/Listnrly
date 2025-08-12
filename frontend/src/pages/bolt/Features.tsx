import React, { useState } from 'react';
import { BarChart, Brain, Layout, Shield, Zap, Globe, Database, Users, Target, Smartphone, Cloud, Lock } from 'lucide-react';
import { useLanguage } from '../../contexts/bolt/LanguageContext';

const Features: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('analytics');

  const featureCategories = {
    analytics: {
      title: 'Advanced Analytics',
      features: [
        {
          icon: <BarChart className="h-8 w-8" />,
          title: 'Real-time Analytics',
          description: 'Monitor your app performance and user behavior in real-time with instant insights and live data streaming.',
          gradient: 'from-blue-500 to-cyan-500',
        },
        {
          icon: <Brain className="h-8 w-8" />,
          title: 'AI-Powered Insights',
          description: 'Leverage machine learning algorithms to discover hidden patterns and predict user trends with 95% accuracy.',
          gradient: 'from-purple-500 to-pink-500',
        },
        {
          icon: <Target className="h-8 w-8" />,
          title: 'Predictive Analytics',
          description: 'Forecast user behavior, churn rates, and revenue trends with our advanced prediction models.',
          gradient: 'from-green-500 to-teal-500',
        },
        {
          icon: <Database className="h-8 w-8" />,
          title: 'Data Integration',
          description: 'Connect multiple data sources and create unified analytics dashboards for comprehensive insights.',
          gradient: 'from-orange-500 to-red-500',
        },
      ]
    },
    dashboard: {
      title: 'Dashboard & Visualization',
      features: [
        {
          icon: <Layout className="h-8 w-8" />,
          title: 'Customizable Dashboards',
          description: 'Create personalized dashboards with drag-and-drop widgets tailored to your specific business needs.',
          gradient: 'from-indigo-500 to-purple-500',
        },
        {
          icon: <Smartphone className="h-8 w-8" />,
          title: 'Mobile Responsive',
          description: 'Access your analytics on any device with our fully responsive design and mobile-optimized interface.',
          gradient: 'from-pink-500 to-rose-500',
        },
        {
          icon: <Users className="h-8 w-8" />,
          title: 'Team Collaboration',
          description: 'Share insights, create reports, and collaborate with your team using built-in sharing and commenting features.',
          gradient: 'from-cyan-500 to-blue-500',
        },
        {
          icon: <Globe className="h-8 w-8" />,
          title: 'Multi-language Support',
          description: 'Support for 25+ languages with automatic localization and region-specific analytics.',
          gradient: 'from-emerald-500 to-green-500',
        },
      ]
    },
    security: {
      title: 'Security & Compliance',
      features: [
        {
          icon: <Shield className="h-8 w-8" />,
          title: 'Enterprise Security',
          description: 'Bank-level security with end-to-end encryption, SOC 2 compliance, and GDPR compliance.',
          gradient: 'from-red-500 to-orange-500',
        },
        {
          icon: <Lock className="h-8 w-8" />,
          title: 'Data Privacy',
          description: 'Complete control over your data with advanced privacy settings and anonymization options.',
          gradient: 'from-gray-600 to-gray-800',
        },
        {
          icon: <Cloud className="h-8 w-8" />,
          title: 'Cloud Infrastructure',
          description: 'Scalable cloud infrastructure with 99.9% uptime guarantee and automatic backups.',
          gradient: 'from-sky-500 to-blue-500',
        },
        {
          icon: <Zap className="h-8 w-8" />,
          title: 'Lightning Fast',
          description: 'Process millions of data points in seconds with our optimized infrastructure and edge computing.',
          gradient: 'from-yellow-500 to-amber-500',
        },
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Powerful Features for
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Modern Analytics</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
              Discover comprehensive analytics tools designed to transform your app data into actionable business intelligence
            </p>
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-16">
            {Object.entries(featureCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-8 py-4 mx-2 mb-4 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Active Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featureCategories[activeTab as keyof typeof featureCategories].features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>

                <div className="mt-6 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${feature.gradient} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Connect with your favorite tools and platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['React', 'Flutter', 'iOS', 'Android', 'Node.js', 'Python', 'Firebase', 'AWS', 'Google Cloud', 'Azure', 'Shopify', 'WordPress'].map((integration, index) => (
              <div
                key={integration}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center hover:bg-gradient-to-br hover:from-purple-50 hover:to-blue-50 dark:hover:from-gray-600 dark:hover:to-gray-600 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">
                  {integration}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Integration
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;