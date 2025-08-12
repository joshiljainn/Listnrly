"use client"

import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingTopic } from "@/lib/sampleData";

interface TrendingTopicsProps {
  topics?: TrendingTopic[];
}

export function TrendingTopics({ topics }: TrendingTopicsProps) {
  // Use sample data if no topics provided
  const displayTopics = topics || [
    { topic: "User Interface", count: 450, sentiment: "positive" as const },
    { topic: "Customer Service", count: 320, sentiment: "negative" as const },
    { topic: "App Performance", count: 280, sentiment: "positive" as const },
    { topic: "Pricing", count: 200, sentiment: "negative" as const },
    { topic: "Features", count: 180, sentiment: "positive" as const },
  ];

  // Calculate max count for progress bars
  const maxCount = Math.max(...displayTopics.map(item => item.count), 1);

  return (
    <div className="space-y-4">
      {displayTopics.map((item) => (
        <div key={item.topic} className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">{item.topic}</span>
            <Badge variant={item.sentiment === "positive" ? "default" : "destructive"}>
              {item.count} mentions
            </Badge>
          </div>
          <Progress 
            value={(item.count / maxCount) * 100} 
            className="h-2" 
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span className="capitalize">{item.sentiment}</span>
          </div>
        </div>
      ))}
    </div>
  );
}