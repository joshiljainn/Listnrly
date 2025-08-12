export interface SampleData {
  company_name: string;
  total_feedback: number;
  top_source: string;
  most_common_sentiment: string;
  reviews: Review[];
  sentiment_data: SentimentData;
  trending_topics: TrendingTopic[];
  feedback_sources: FeedbackSource[];
}

export interface Review {
  id: string;
  text: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  source: string;
  rating: number;
  date: string;
  author: string;
}

export interface SentimentData {
  positive: number;
  negative: number;
  neutral: number;
}

export interface TrendingTopic {
  topic: string;
  count: number;
  sentiment: 'positive' | 'negative' | 'neutral';
}

export interface FeedbackSource {
  source: string;
  count: number;
  percentage: number;
}

const companyThemes: Record<string, { 
  industry: string; 
  commonIssues: string[]; 
  positiveAspects: string[];
  sources: string[];
}> = {
  'uber': {
    industry: 'Transportation',
    commonIssues: ['driver behavior', 'pricing', 'wait times', 'app glitches', 'customer service'],
    positiveAspects: ['convenience', 'driver quality', 'clean cars', 'quick pickup', 'good pricing'],
    sources: ['App Store', 'Google Play', 'Twitter', 'Trustpilot', 'Reddit']
  },
  'netflix': {
    industry: 'Entertainment',
    commonIssues: ['content selection', 'streaming quality', 'pricing', 'interface', 'recommendations'],
    positiveAspects: ['content quality', 'user interface', 'streaming speed', 'original content', 'recommendations'],
    sources: ['App Store', 'Google Play', 'Twitter', 'Reddit', 'Trustpilot']
  },
  'spotify': {
    industry: 'Music',
    commonIssues: ['audio quality', 'playlist curation', 'pricing', 'ads', 'offline mode'],
    positiveAspects: ['music selection', 'playlists', 'user interface', 'discovery', 'offline mode'],
    sources: ['App Store', 'Google Play', 'Twitter', 'Reddit', 'Trustpilot']
  },
  'airbnb': {
    industry: 'Travel',
    commonIssues: ['booking issues', 'host communication', 'property accuracy', 'pricing', 'cleaning fees'],
    positiveAspects: ['unique stays', 'host quality', 'pricing', 'user interface', 'customer service'],
    sources: ['App Store', 'Google Play', 'Twitter', 'Trustpilot', 'Reddit']
  }
};

const sampleReviews = [
  "Great experience overall! The service was fast and reliable.",
  "Disappointed with the recent changes. Quality has gone down.",
  "Amazing product! Highly recommend to everyone.",
  "Customer service was terrible. Took forever to get a response.",
  "Love the new features! Keep up the good work.",
  "Too expensive for what you get. Not worth it.",
  "Best app I've ever used. Intuitive and user-friendly.",
  "Frequent crashes and bugs. Needs immediate fixing.",
  "Excellent value for money. Will definitely continue using.",
  "Interface is confusing. Needs better design.",
  "Fast and efficient service. Exceeded expectations.",
  "Poor quality control. Many issues need addressing.",
  "Innovative features that make life easier.",
  "Overpriced compared to competitors.",
  "Reliable and consistent performance.",
  "Technical issues are frustrating users.",
  "Great customer support team.",
  "App needs better optimization.",
  "Clean and modern design.",
  "Too many ads and popups."
];

const sampleAuthors = [
  "John D.", "Sarah M.", "Mike R.", "Lisa K.", "David P.",
  "Emma W.", "Alex T.", "Rachel B.", "Chris L.", "Maria G.",
  "Tom H.", "Anna S.", "James W.", "Sophie M.", "Ryan K."
];

export function generateSampleData(companyName: string): SampleData {
  const normalizedName = companyName.toLowerCase().replace(/[^a-z]/g, '');
  const theme = companyThemes[normalizedName] || companyThemes['uber'];
  
  const totalFeedback = Math.floor(Math.random() * 5000) + 1000;
  const positiveCount = Math.floor(totalFeedback * 0.6);
  const negativeCount = Math.floor(totalFeedback * 0.25);
  const neutralCount = totalFeedback - positiveCount - negativeCount;
  
  const reviews: Review[] = [];
  const sources = theme.sources;
  
  for (let i = 0; i < 50; i++) {
    const sentiment = Math.random() > 0.6 ? 'positive' : Math.random() > 0.3 ? 'negative' : 'neutral';
    const source = sources[Math.floor(Math.random() * sources.length)];
    const rating = sentiment === 'positive' ? Math.floor(Math.random() * 2) + 4 : 
                  sentiment === 'negative' ? Math.floor(Math.random() * 2) + 1 : 
                  Math.floor(Math.random() * 2) + 3;
    
    reviews.push({
      id: `review_${i}`,
      text: sampleReviews[Math.floor(Math.random() * sampleReviews.length)],
      sentiment,
      source,
      rating,
      date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
      author: sampleAuthors[Math.floor(Math.random() * sampleAuthors.length)]
    });
  }
  
  const sourceCounts = sources.map(source => ({
    source,
    count: Math.floor(Math.random() * 1000) + 100,
    percentage: 0
  }));
  
  const totalSourceCount = sourceCounts.reduce((sum, s) => sum + s.count, 0);
  sourceCounts.forEach(s => s.percentage = Math.round((s.count / totalSourceCount) * 100));
  
  const trendingTopics: TrendingTopic[] = theme.commonIssues.concat(theme.positiveAspects)
    .slice(0, 8)
    .map(topic => ({
      topic,
      count: Math.floor(Math.random() * 500) + 50,
      sentiment: Math.random() > 0.5 ? 'positive' : 'negative'
    }));
  
  return {
    company_name: companyName,
    total_feedback: totalFeedback,
    top_source: sources[0],
    most_common_sentiment: 'positive',
    reviews,
    sentiment_data: {
      positive: positiveCount,
      negative: negativeCount,
      neutral: neutralCount
    },
    trending_topics: trendingTopics,
    feedback_sources: sourceCounts
  };
}

export function getSampleStats(companyName: string) {
  const data = generateSampleData(companyName);
  return {
    total_feedback: data.total_feedback,
    top_source: data.top_source,
    most_common_sentiment: data.most_common_sentiment
  };
}
