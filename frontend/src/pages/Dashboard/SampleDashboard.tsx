import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs.tsx";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Overview } from "@/components/overview.tsx";
import { RecentFeedback } from "@/components/recent-feedback.tsx";
import { FeedbackSources } from "@/components/feedback-sources.tsx";
import { SentimentAnalysis } from "@/components/sentiment-analysis.tsx";
import { ProductFeedback } from "@/components/product-feedback.tsx";
import { FeedbackDetails } from "@/components/feedback-details.tsx";
import { TrendingTopics } from "@/components/trending-topics.tsx";
import { Button } from "@/components/ui/button.tsx";
import { RefreshCw, Building2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area.tsx";
import { useSampleData } from "@/contexts/SampleDataContext";

export function SampleDashboard() {
  const { sampleData, companyName } = useSampleData();
  const [loading, setLoading] = useState(false);

  const handleRefresh = async () => {
    setLoading(true);
    // Simulate refresh delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
  };

  if (!sampleData) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <Building2 className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-semibold text-gray-900">No company data</h3>
          <p className="mt-1 text-sm text-gray-500">Please sign up to view your dashboard.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center space-x-2">
            <Building2 className="h-5 w-5 text-blue-600" />
            <h1 className="text-lg font-semibold text-gray-900">
              {companyName} Dashboard
            </h1>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleRefresh}
            disabled={loading}
          >
            <RefreshCw className={`mr-2 h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            {loading ? 'Refreshing...' : 'Refresh Data'}
          </Button>
        </div>
      </div>
      
      <div className="flex-1 space-y-4 pt-2 px-6">
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="sentiment">Sentiment Analysis</TabsTrigger>
            <TabsTrigger value="product">Product Feedback</TabsTrigger>
            <TabsTrigger value="details">Feedback Details</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Feedback</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {sampleData.total_feedback.toLocaleString()}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Most Common Sentiment</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold capitalize">
                    {sampleData.most_common_sentiment}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Top Feedback Source</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {sampleData.top_source}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Sentiment Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <Overview 
                    data={[
                      { name: 'Positive', total: sampleData.sentiment_data.positive },
                      { name: 'Negative', total: sampleData.sentiment_data.negative },
                      { name: 'Neutral', total: sampleData.sentiment_data.neutral },
                    ]}
                  />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Trending Topics</CardTitle>
                  <CardDescription>Most discussed topics in the last 30 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <TrendingTopics topics={sampleData.trending_topics} />
                </CardContent>
              </Card>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Recent Feedback</CardTitle>
                  <CardDescription>Latest feedback from all sources</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[350px] pr-4">
                    <RecentFeedback reviews={sampleData.reviews.slice(0, 10)} />
                  </ScrollArea>
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Feedback Sources</CardTitle>
                  <CardDescription>Distribution of feedback by source</CardDescription>
                </CardHeader>
                <CardContent>
                  <FeedbackSources sources={sampleData.feedback_sources} />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="sentiment" className="space-y-4">
            <SentimentAnalysis data={sampleData.sentiment_data} />
          </TabsContent>
          
          <TabsContent value="product" className="space-y-4">
            <ProductFeedback reviews={sampleData.reviews} />
          </TabsContent>
          
          <TabsContent value="details" className="space-y-4">
            <FeedbackDetails reviews={sampleData.reviews} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
