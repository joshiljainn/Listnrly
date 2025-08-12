import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Reviews: React.FC = () => {
  const { t } = useLanguage();

  const reviews = [
    {
      name: 'Sarah Chen',
      title: 'Head of Product, TechStart',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5,
      text: 'InsightFlow transformed how we understand our users. The AI-powered insights helped us increase user retention by 40% in just 3 months.',
    },
    {
      name: 'Michael Rodriguez',
      title: 'CTO, DataVision',
      image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5,
      text: 'The real-time analytics capabilities are incredible. We can now make data-driven decisions faster than ever before.',
    },
    {
      name: 'Emily Johnson',
      title: 'Marketing Director, GrowthCorp',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5,
      text: 'The customizable dashboards are a game-changer. Each team member can see exactly what they need to optimize their work.',
    },
    {
      name: 'David Park',
      title: 'VP of Analytics, ScaleUp',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5,
      text: 'Implementation was seamless and the support team is outstanding. ROI was evident within the first month.',
    },
    {
      name: 'Lisa Wang',
      title: 'Product Manager, InnovateNow',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5,
      text: 'The predictive analytics feature helped us identify churn risk early and take proactive measures to retain customers.',
    },
    {
      name: 'James Thompson',
      title: 'CEO, NextGen Apps',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5,
      text: 'InsightFlow is not just an analytics tool, it\'s a strategic advantage. Our entire product strategy is now data-informed.',
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('reviewsTitle')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join thousands of companies that trust InsightFlow to power their analytics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 relative group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                <Quote className="h-8 w-8 text-blue-600" />
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                "{review.text}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {review.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {review.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Trusted by 10,000+ companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['Microsoft', 'Google', 'Amazon', 'Netflix', 'Spotify', 'Uber'].map((company) => (
              <div key={company} className="text-2xl font-bold text-gray-400 dark:text-gray-500">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;