
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { Bar, BarChart, XAxis, YAxis } from "recharts"
import { SentimentData } from "@/lib/sampleData";

interface SentimentAnalysisProps {
  data?: SentimentData;
}

export function SentimentAnalysis({ data }: SentimentAnalysisProps) {
  // Use sample data if no data provided
  const sentimentData = data || {
    positive: 1800,
    negative: 750,
    neutral: 450
  };

  const pieChartData = [
    { name: "Positive", value: sentimentData.positive, color: "#8884d8" },
    { name: "Negative", value: sentimentData.negative, color: "#82ca9d" },
    { name: "Neutral", value: sentimentData.neutral, color: "#ffc658" },
  ];

  // Generate sample monthly data
  const monthlyData = [
    { month: 'Jan', positive: 300, negative: 125, neutral: 75 },
    { month: 'Feb', positive: 280, negative: 130, neutral: 70 },
    { month: 'Mar', positive: 320, negative: 120, neutral: 80 },
    { month: 'Apr', positive: 290, negative: 135, neutral: 65 },
    { month: 'May', positive: 310, negative: 115, neutral: 85 },
    { month: 'Jun', positive: 300, negative: 125, neutral: 75 },
  ];

  // Generate sample source data
  const sourceData = {
    "App Store": { positive: 75 },
    "Google Play": { positive: 68 },
    "Twitter": { positive: 82 },
    "Reddit": { positive: 45 },
    "Trustpilot": { positive: 90 }
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Sentiment Trends</CardTitle>
          <CardDescription>Sentiment analysis over time</CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={monthlyData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="positive" name="Positive" fill="#8884d8" />
              <Bar dataKey="negative" name="Negative" fill="#82ca9d" />
              <Bar dataKey="neutral" name="Neutral" fill="#ffc658" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Sentiment Distribution</CardTitle>
          <CardDescription>Overall sentiment breakdown</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card className="col-span-7">
        <CardHeader>
          <CardTitle>Sentiment by Source</CardTitle>
          <CardDescription>Sentiment breakdown by feedback source</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(sourceData).map(([source, data]) => (
              <div key={source} className="flex flex-col items-center justify-center p-4 border rounded-lg">
                <h3 className="text-lg font-semibold">{source}</h3>
                <div className="text-3xl font-bold mt-2">{data.positive}%</div>
                <p className="text-sm text-muted-foreground">Positive Sentiment</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
