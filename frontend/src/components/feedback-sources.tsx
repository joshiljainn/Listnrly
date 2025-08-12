import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, Line, LineChart, Cell } from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FeedbackSource } from "@/lib/sampleData";

interface FeedbackSourcesProps {
  detailed?: boolean;
  sources?: FeedbackSource[];
}

export function FeedbackSources({ detailed = false, sources }: FeedbackSourcesProps) {
  const colors = {
    "App Store": "#4285F4",
    "Google Play": "#FF4500",
    "Twitter": "#1DA1F2",
    "Reddit": "#A2AAAD",
    "Trustpilot": "#00B67A"
  };

  // Use sample data if no sources provided
  const displaySources = sources || [
    { source: "App Store", count: 1200, percentage: 35 },
    { source: "Google Play", count: 900, percentage: 26 },
    { source: "Twitter", count: 800, percentage: 23 },
    { source: "Reddit", count: 400, percentage: 12 },
    { source: "Trustpilot", count: 200, percentage: 4 }
  ];

  // Enrich sources data with colors
  const sourcesData = displaySources.map((item) => ({
    ...item,
    color: colors[item.source as keyof typeof colors] || "#8884d8"
  }));

  // Generate sample time series data
  const sourcesOverTimeData = [
    { month: 'Jan', "App Store": 120, "Google Play": 90, "Twitter": 80, "Reddit": 40, "Trustpilot": 20 },
    { month: 'Feb', "App Store": 110, "Google Play": 85, "Twitter": 75, "Reddit": 38, "Trustpilot": 18 },
    { month: 'Mar', "App Store": 130, "Google Play": 95, "Twitter": 85, "Reddit": 42, "Trustpilot": 22 },
    { month: 'Apr', "App Store": 115, "Google Play": 88, "Twitter": 78, "Reddit": 39, "Trustpilot": 19 },
    { month: 'May', "App Store": 125, "Google Play": 92, "Twitter": 82, "Reddit": 41, "Trustpilot": 21 },
    { month: 'Jun', "App Store": 120, "Google Play": 90, "Twitter": 80, "Reddit": 40, "Trustpilot": 20 },
  ];

  const totalCount = sourcesData.reduce((sum, item) => sum + item.count, 0) || 1;

  if (!detailed) {
    return (
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={sourcesData}>
          <XAxis dataKey="source" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count">
            {sourcesData.map((entry: any, index: number) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Feedback Volume by Source</CardTitle>
          <CardDescription>Number of feedback entries from each source</CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={sourcesData} layout="vertical">
              <XAxis type="number" />
              <YAxis dataKey="source" type="category" width={100} />
              <Tooltip />
              <Bar dataKey="count">
                {sourcesData.map((entry: any, index: number) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Source Distribution</CardTitle>
          <CardDescription>Percentage breakdown of feedback sources</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {sourcesData.map((source: any) => (
              <div key={source.source} className="flex items-center">
                <div className="w-16 text-sm">{source.source}</div>
                <div className="w-full ml-2">
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 rounded-full"
                      style={{
                        width: `${(source.count / totalCount) * 100}%`,
                        backgroundColor: source.color,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="ml-2 text-sm font-medium">{Math.round((source.count / totalCount) * 100)}%</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card className="col-span-7">
        <CardHeader>
          <CardTitle>Feedback Sources Over Time</CardTitle>
          <CardDescription>Trend of feedback volume by source over time</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="line">
            <TabsList>
              <TabsTrigger value="line">Line Chart</TabsTrigger>
              <TabsTrigger value="bar">Bar Chart</TabsTrigger>
            </TabsList>
            <TabsContent value="line" className="pt-4">
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={sourcesOverTimeData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="Google Play" stroke={colors["Google Play"]} strokeWidth={2} />
                  <Line type="monotone" dataKey="Reddit" stroke={colors["Reddit"]} strokeWidth={2} />
                  <Line type="monotone" dataKey="Twitter" stroke={colors["Twitter"]} strokeWidth={2} />
                  <Line type="monotone" dataKey="App Store" stroke={colors["App Store"]} strokeWidth={2} />
                  <Line type="monotone" dataKey="Trustpilot" stroke={colors["Trustpilot"]} strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </TabsContent>
            <TabsContent value="bar" className="pt-4">
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={sourcesOverTimeData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Google Play" fill={colors["Google Play"]} />
                  <Bar dataKey="Reddit" fill={colors["Reddit"]} />
                  <Bar dataKey="Twitter" fill={colors["Twitter"]} />
                  <Bar dataKey="App Store" fill={colors["App Store"]} />
                  <Bar dataKey="Trustpilot" fill={colors["Trustpilot"]} />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}