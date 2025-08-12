import React, { useState, useEffect } from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  const { t } = useLanguage();
  const [stats, setStats] = useState({
    users: 8500,
    uptime: 99.7,
    dataPoints: 45000000
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        users: prev.users + Math.floor(Math.random() * 5) + 1,
        uptime: Math.min(99.9, prev.uptime + (Math.random() * 0.01)),
        dataPoints: prev.dataPoints + Math.floor(Math.random() * 10000) + 5000
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200 dark:from-cyan-800 dark:via-blue-800 dark:to-purple-800 rounded-full opacity-10 blur-3xl animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-8">
            <span>🚀 New Analytics Engine Available</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {t('heroTitle')}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            {t('heroSubtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 mb-12">
            <button
              onClick={onGetStarted}
              className="group flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {t('getStarted')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <button className="group flex items-center px-8 py-4 border border-gray-300 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg text-lg font-semibold transition-all duration-200">
              <Play className="mr-2 h-5 w-5" />
              {t('watchDemo')}
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                {stats.users.toLocaleString()}+
              </div>
              <div className="text-gray-600 dark:text-gray-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                {stats.uptime.toFixed(1)}%
              </div>
              <div className="text-gray-600 dark:text-gray-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                {(stats.dataPoints / 1000000).toFixed(0)}M+
              </div>
              <div className="text-gray-600 dark:text-gray-400">Data Points</div>
            </div>
          </div>
          </div>

          {/* Right Content - 3D Dashboard Mockup */}
          <div className="relative lg:block hidden">
            <div className="relative transform rotate-3d hover:rotate-3d-hover transition-transform duration-700 ease-out">
              {/* Main Dashboard */}
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 transform perspective-1000 rotate-y-12 hover:rotate-y-6 transition-transform duration-500">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Analytics Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                {/* Chart Area */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-4 mb-4">
                  <div className="flex items-end space-x-2 h-32">
                    {[40, 65, 45, 80, 55, 90, 70, 85].map((height, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-t from-blue-500 to-purple-500 rounded-t animate-pulse"
                        style={{
                          height: `${height}%`,
                          width: '12%',
                          animationDelay: `${index * 0.1}s`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                    <div className="text-sm text-gray-600 dark:text-gray-400">Revenue</div>
                    <div className="text-xl font-bold text-green-600">$24.5K</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                    <div className="text-sm text-gray-600 dark:text-gray-400">Users</div>
                    <div className="text-xl font-bold text-blue-600">{(stats.users / 1000).toFixed(1)}K</div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 transform rotate-12 hover:rotate-6 transition-transform duration-300">
                <div className="text-xs text-gray-600 dark:text-gray-400">Live Users</div>
                <div className="text-lg font-bold text-green-500">{Math.floor(stats.users / 100)}</div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 transform -rotate-12 hover:-rotate-6 transition-transform duration-300">
                <div className="text-xs text-gray-600 dark:text-gray-400">Conversion</div>
                <div className="text-lg font-bold text-purple-500">12.4%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;