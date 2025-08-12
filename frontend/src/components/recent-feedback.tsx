import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bookmark, MessageSquare } from "lucide-react";
import { Review } from "@/lib/sampleData";

interface RecentFeedbackProps {
  reviews?: Review[];
}

export function RecentFeedback({ reviews }: RecentFeedbackProps) {
  // Use sample data if no reviews provided
  const displayReviews = reviews || [
    {
      id: "1",
      text: "Great experience overall! The service was fast and reliable.",
      sentiment: "positive" as const,
      source: "App Store",
      rating: 5,
      date: "2024-01-15T10:30:00Z",
      author: "John D."
    },
    {
      id: "2", 
      text: "Disappointed with the recent changes. Quality has gone down.",
      sentiment: "negative" as const,
      source: "Google Play",
      rating: 2,
      date: "2024-01-14T15:45:00Z",
      author: "Sarah M."
    },
    {
      id: "3",
      text: "Amazing product! Highly recommend to everyone.",
      sentiment: "positive" as const,
      source: "Twitter",
      rating: 5,
      date: "2024-01-13T09:20:00Z",
      author: "Mike R."
    }
  ];

  return (
    <div className="space-y-8">
      {displayReviews.map((item) => (
        <div key={item.id} className="flex items-start gap-4">
          <div className="grid gap-1 w-full">
            <div className="flex items-center gap-2">
              <div className="font-semibold">{item.author}</div>
              <div className="text-xs text-muted-foreground">
                {new Date(item.date).toLocaleDateString()}
              </div>
              <Badge variant={item.sentiment === "positive" ? "default" : "destructive"} className="ml-auto">
                {item.sentiment}
              </Badge>
            </div>
            <div className="text-sm text-muted-foreground">
              via <span className="font-medium">{item.source}</span>
            </div>
            <div className="text-sm">{item.text}</div>
            <div className="flex items-center gap-2 pt-1">
              <Button variant="ghost" size="sm" className="h-7 px-2">
                <Bookmark className="mr-1 h-3.5 w-3.5" />
                Save
              </Button>
              <Button variant="ghost" size="sm" className="h-7 px-2">
                <MessageSquare className="mr-1 h-3.5 w-3.5" />
                Reply
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}