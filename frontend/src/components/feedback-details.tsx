"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Filter, MessageSquare, Bookmark, Flag, ChevronLeft, ChevronRight } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Review } from "@/lib/sampleData";

interface FeedbackDetailsProps {
  reviews?: Review[];
}

export function FeedbackDetails({ reviews }: FeedbackDetailsProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSource, setSelectedSource] = useState("all")
  const [selectedSentiment, setSelectedSentiment] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedFeedback, setSelectedFeedback] = useState<Review | null>(null)
  const [notes, setNotes] = useState<Record<string, string>>({})
  const [important, setImportant] = useState<Record<string, boolean>>({})
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

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
    },
    {
      id: "4",
      text: "Customer service was terrible. Took forever to get a response.",
      sentiment: "negative" as const,
      source: "Trustpilot",
      rating: 1,
      date: "2024-01-12T14:20:00Z",
      author: "Lisa K."
    },
    {
      id: "5",
      text: "Love the new features! Keep up the good work.",
      sentiment: "positive" as const,
      source: "Reddit",
      rating: 4,
      date: "2024-01-11T11:15:00Z",
      author: "David P."
    }
  ];

  // Filter reviews based on search and filters
  const filteredReviews = displayReviews.filter(review => {
    const matchesSearch = review.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSource = selectedSource === "all" || review.source === selectedSource;
    const matchesSentiment = selectedSentiment === "all" || review.sentiment === selectedSentiment;
    
    return matchesSearch && matchesSource && matchesSentiment;
  });

  // Pagination
  const totalPages = Math.ceil(filteredReviews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentReviews = filteredReviews.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  }

  const toggleImportant = (reviewId: string) => {
    setImportant((prev) => ({
      ...prev,
      [reviewId]: !prev[reviewId],
    }))
  }

  const updateNotes = (reviewId: string, note: string) => {
    setNotes((prev) => ({
      ...prev,
      [reviewId]: note,
    }))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Feedback Details</CardTitle>
        <CardDescription>View and analyze individual feedback entries</CardDescription>
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 mt-4">
          <div className="flex w-full items-center space-x-2">
            <Input
              placeholder="Search feedback..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex space-x-2">
            <Select value={selectedSource} onValueChange={setSelectedSource}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Source" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sources</SelectItem>
                <SelectItem value="googleplay">Playstore</SelectItem>
                <SelectItem value="reddit">Reddit</SelectItem>
                <SelectItem value="twitter">X</SelectItem>
                <SelectItem value="appstore">AppStore</SelectItem>
                <SelectItem value="trustpilot">Trust Pilot</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedSentiment} onValueChange={setSelectedSentiment}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Sentiment" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sentiments</SelectItem>
                <SelectItem value="positive">Positive</SelectItem>
                <SelectItem value="negative">Negative</SelectItem>
                <SelectItem value="neutral">Neutral</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>

                <SelectItem value="Ride Availability">Ride Availability</SelectItem>
                <SelectItem value="App Performance">App Performance</SelectItem>
                <SelectItem value="Bans & Restrictions">Bans & Restrictions</SelectItem>
                <SelectItem value="Company Policies">Company Policies</SelectItem>
                <SelectItem value="Customer Support">Customer Support</SelectItem>

                <SelectItem value="Discounts & Offers">Discounts & Offers</SelectItem>
                <SelectItem value="Driver Experience">Driver Experience</SelectItem>
                <SelectItem value="Payment & Transactions">Payment & Transactions</SelectItem>
                <SelectItem value="Pricing">Pricing</SelectItem>

                <SelectItem value="Ratings & Reviews">Ratings & Reviews</SelectItem>
                <SelectItem value="Regulations & Legal">Regulations & Legal</SelectItem>
                <SelectItem value="Ride Availability">Ride Availability</SelectItem>

                <SelectItem value="Security">Security</SelectItem>
                <SelectItem value="Sustainability & Environment">Sustainability & Environment</SelectItem>
                <SelectItem value="Trust & Safety">Trust & Safety</SelectItem>
                <SelectItem value="User Interface">User Interface</SelectItem>
                {/* Add categories dynamically based on your data */}
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {currentReviews.length === 0 ? (
          <div className="flex justify-center py-8">No feedback found matching your criteria</div>
        ) : (
          <>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Feedback</TableHead>
                  <TableHead>Source</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Sentiment</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentReviews.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium max-w-md truncate">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="link"
                            className="p-0 h-auto text-left justify-start"
                            onClick={() => setSelectedFeedback(item)}
                          >
                            {item.text.substring(0, 100)}
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[625px]">
                          <DialogHeader>
                            <DialogTitle>Feedback Details</DialogTitle>
                            <DialogDescription>View complete feedback and add notes</DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="flex items-center justify-between">
                              <Badge variant={item.sentiment === "positive" ? "default" : "destructive"}>
                                {item.sentiment}
                              </Badge>
                              <span className="text-sm text-muted-foreground">
                                {item.source} • {new Date(item.date).toLocaleDateString()}
                              </span>
                            </div>
                            <div className="border rounded-md p-4">{item.text}</div>
                            <div>
                              <h4 className="mb-2 text-sm font-medium">Add Notes</h4>
                              <Textarea
                                placeholder="Add your notes about this feedback..."
                                value={notes[item.id] || ""}
                                onChange={(e) => updateNotes(item.id, e.target.value)}
                              />
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                    <TableCell>{item.source}</TableCell>
                    <TableCell>{new Date(item.date).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <Badge variant={item.sentiment === "positive" ? "default" : "destructive"}>{item.sentiment}</Badge>
                    </TableCell>
                    <TableCell>{item.author}</TableCell>
                    <TableCell>
                      <div className="flex space-x-1">
                        <Button variant="ghost" size="icon" onClick={() => toggleImportant(item.id)}>
                          <Bookmark className={`h-4 w-4 ${important[item.id] ? "fill-current" : ""}`} />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Flag className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="flex items-center justify-between mt-6">
              <div className="text-sm text-muted-foreground">
                Showing {startIndex + 1} to {Math.min(endIndex, filteredReviews.length)} of {filteredReviews.length} entries
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <div className="text-sm">
                  Page {currentPage} of {totalPages}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}
