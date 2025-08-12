import React, { useState } from 'react';
import { BarChart, Brain, Layout, Shield, Zap, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Features: React.FC = () => {
  const { t } = useLanguage();
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: <BarChart className="h-8 w-8" />,
      title: t('featureRealTime'),
      description: t('featureRealTimeDesc'),
      gradient: 'from-blue-500 to-cyan-500',
      stats: '99.9% Accuracy',
      demo: 'Real-time data streaming'
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: t('featureAI'),
      description: t('featureAIDesc'),
      gradient: 'from-purple-500 to-pink-500',
      stats: '85% Prediction Rate',
      demo: 'ML-powered insights'
    },
    {
      icon: <Layout className="h-8 w-8" />,
      title: t('featureCustomizable'),
      description: t('featureCustomizableDesc'),
      gradient: 'from-green-500 to-teal-500',
      stats: '50+ Templates',
      demo: 'Drag & drop builder'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance certifications',
      gradient: 'from-red-500 to-orange-500',
      stats: 'SOC 2 Certified',
      demo: 'Zero-trust architecture'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Lightning Fast',
      description: 'Process millions of data points in seconds with our optimized infrastructure',
      gradient: 'from-yellow-500 to-amber-500',
      stats: '<100ms Response',
      demo: 'Edge computing'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Global Scale',
      description: 'Deploy across multiple regions with auto-scaling and global CDN support',
      gradient: 'from-indigo-500 to-blue-500',
      stats: '15+ Regions',
      demo: 'Auto-scaling'
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('featuresTitle')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover powerful features designed to transform your app analytics into actionable business intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 border border-gray-100 dark:border-gray-800 relative overflow-hidden"
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              {/* Animated Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Floating Particles */}
              {hoveredFeature === index && (
                <>
                  <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-8 left-8 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-300"></div>
                  <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce delay-500"></div>
                </>
              )}
              
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>

              {/* Stats Badge */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {feature.stats}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {feature.demo}
                </span>
              </div>

              {/* Progress Bar Animation */}
              <div className="mt-4 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${feature.gradient} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <div className="mt-20 text-center">
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-2xl max-w-4xl mx-auto border border-gray-100 dark:border-gray-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              See It In Action
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Experience the power of our analytics platform with interactive demos
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['Live Dashboard', 'AI Predictions', 'Custom Reports'].map((demo, index) => (
                <button
                  key={demo}
                  className="group p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {demo}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Interactive Demo
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;