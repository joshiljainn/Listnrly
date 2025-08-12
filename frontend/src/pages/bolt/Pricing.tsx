import React, { useState } from 'react';
import { Check, Star, Zap, Crown, Rocket } from 'lucide-react';
import { useLanguage } from '../../contexts/bolt/LanguageContext';

interface PricingProps {
  onGetStarted: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onGetStarted }) => {
  const { t } = useLanguage();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const pricingTiers = [
    {
      name: 'Starter',
      icon: <Zap className="h-6 w-6" />,
      description: 'Perfect for small apps and startups',
      monthlyPrice: 999,
      yearlyPrice: 9990,
      gradient: 'from-green-500 to-emerald-500',
      features: [
        'Up to 10K monthly active users',
        'Basic analytics dashboard',
        'Email support',
        '7-day data retention',
        'Standard integrations',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      icon: <Star className="h-6 w-6" />,
      description: 'Ideal for growing businesses',
      monthlyPrice: 2999,
      yearlyPrice: 29990,
      gradient: 'from-blue-500 to-cyan-500',
      features: [
        'Up to 100K monthly active users',
        'Advanced analytics & insights',
        'Priority email & chat support',
        '30-day data retention',
        'All integrations included',
        'Custom dashboards',
        'A/B testing tools',
        'Export capabilities'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      icon: <Crown className="h-6 w-6" />,
      description: 'For large-scale applications',
      monthlyPrice: 7999,
      yearlyPrice: 79990,
      gradient: 'from-purple-500 to-pink-500',
      features: [
        'Up to 1M monthly active users',
        'AI-powered predictive analytics',
        '24/7 phone & chat support',
        '90-day data retention',
        'White-label solutions',
        'Advanced security features',
        'Custom integrations',
        'Dedicated account manager',
        'SLA guarantee'
      ],
      popular: false
    },
    {
      name: 'Scale',
      icon: <Rocket className="h-6 w-6" />,
      description: 'Unlimited scale for enterprises',
      monthlyPrice: 19999,
      yearlyPrice: 199990,
      gradient: 'from-orange-500 to-red-500',
      features: [
        'Unlimited monthly active users',
        'Full AI & ML capabilities',
        'Dedicated support team',
        'Unlimited data retention',
        'Complete customization',
        'On-premise deployment',
        'Advanced compliance',
        'Custom training & onboarding',
        'Multi-region support',
        'API rate limit increases'
      ],
      popular: false
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Simple, Transparent
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
              Choose the perfect plan for your business. All plans include our core analytics features.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-12">
              <span className={`mr-3 ${billingCycle === 'monthly' ? 'text-gray-900 dark:text-white font-semibold' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  billingCycle === 'yearly' ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`ml-3 ${billingCycle === 'yearly' ? 'text-gray-900 dark:text-white font-semibold' : 'text-gray-500'}`}>
                Yearly
              </span>
              {billingCycle === 'yearly' && (
                <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                  Save 17%
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border ${
                  tier.popular 
                    ? 'border-purple-500 ring-2 ring-purple-500 ring-opacity-50' 
                    : 'border-gray-200 dark:border-gray-700'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${tier.gradient} text-white mb-4`}>
                      {tier.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {tier.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-8">
                    <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                      {formatPrice(billingCycle === 'monthly' ? tier.monthlyPrice : tier.yearlyPrice)}
                    </div>
                    <div className="text-gray-500 dark:text-gray-400">
                      per {billingCycle === 'monthly' ? 'month' : 'year'}
                    </div>
                    {billingCycle === 'yearly' && (
                      <div className="text-sm text-green-600 dark:text-green-400 mt-1">
                        Save {formatPrice(tier.monthlyPrice * 12 - tier.yearlyPrice)} annually
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={onGetStarted}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                        : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'Can I change my plan anytime?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
              },
              {
                question: 'Is there a free trial?',
                answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required to get started.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, UPI, net banking, and digital wallets for Indian customers.'
              },
              {
                question: 'Do you offer custom enterprise solutions?',
                answer: 'Yes, we provide custom solutions for large enterprises with specific requirements. Contact our sales team.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;