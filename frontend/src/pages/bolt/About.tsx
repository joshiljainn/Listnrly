import React from 'react';
import { Users, Target, Award, Globe, Heart, Lightbulb } from 'lucide-react';
import { useLanguage } from '../../contexts/bolt/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: 'Arjun Sharma',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      bio: 'Former Google Analytics lead with 10+ years in data science'
    },
    {
      name: 'Priya Patel',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      bio: 'Ex-Microsoft engineer specializing in scalable analytics platforms'
    },
    {
      name: 'Rahul Kumar',
      role: 'Head of Product',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      bio: 'Product strategist with experience at Flipkart and Zomato'
    },
    {
      name: 'Sneha Gupta',
      role: 'Head of Design',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      bio: 'Award-winning UX designer focused on data visualization'
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Data-Driven Decisions',
      description: 'We believe every business decision should be backed by reliable data and actionable insights.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Customer Success',
      description: 'Our customers\' success is our success. We\'re committed to helping businesses grow through analytics.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Innovation',
      description: 'We continuously innovate to stay ahead of the curve and provide cutting-edge analytics solutions.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Transparency',
      description: 'We maintain complete transparency in our processes, pricing, and data handling practices.',
      gradient: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Listnrly</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
              We're on a mission to democratize data analytics and help businesses of all sizes make informed decisions through powerful, accessible insights.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Founded in 2023 at IIM Rohtak, Listnrly was born from a simple observation: most businesses struggle to extract meaningful insights from their app data, despite having access to vast amounts of information.
                </p>
                <p>
                  Our founders, having worked at leading tech companies, recognized the gap between complex analytics tools designed for data scientists and the practical needs of business teams who need actionable insights quickly.
                </p>
                <p>
                  Today, we serve over 10,000 businesses worldwide, from startups to Fortune 500 companies, helping them transform raw data into strategic advantages.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">10K+</div>
                    <div className="text-gray-600 dark:text-gray-300">Active Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
                    <div className="text-gray-600 dark:text-gray-300">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">99.9%</div>
                    <div className="text-gray-600 dark:text-gray-300">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">24/7</div>
                    <div className="text-gray-600 dark:text-gray-300">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${value.gradient} text-white mb-6`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The passionate individuals behind Listnrly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-purple-600 dark:text-purple-400 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Location
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Visit us at IIM Rohtak, where innovation meets excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  IIM Rohtak Campus
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Globe className="h-5 w-5 text-purple-600 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Address</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Indian Institute of Management Rohtak<br />
                        Sunaria, Rohtak - 124010<br />
                        Haryana, India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Award className="h-5 w-5 text-purple-600 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Innovation Hub</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Located in one of India's premier business schools, fostering innovation and entrepreneurship.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.8674089847!2d76.66234731508!3d28.7041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b85fc2a2d49%3A0x6b82ab8c6b5e5c5e!2sIndian%20Institute%20of%20Management%20Rohtak!5e0!3m2!1sen!2sin!4v1635789012345!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;