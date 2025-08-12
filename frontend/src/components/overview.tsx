"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface OverviewProps {
  data?: Array<{
    name: string;
    total: number;
  }>;
}

export function Overview({ data }: OverviewProps) {
  // Generate sample chart data if no data provided
  const chartData = data ? [
    { month: 'Jan', positive: data.find(d => d.name === 'Positive')?.total || 0, negative: data.find(d => d.name === 'Negative')?.total || 0, neutral: data.find(d => d.name === 'Neutral')?.total || 0 },
    { month: 'Feb', positive: Math.floor((data.find(d => d.name === 'Positive')?.total || 0) * 0.9), negative: Math.floor((data.find(d => d.name === 'Negative')?.total || 0) * 1.1), neutral: Math.floor((data.find(d => d.name === 'Neutral')?.total || 0) * 0.95) },
    { month: 'Mar', positive: Math.floor((data.find(d => d.name === 'Positive')?.total || 0) * 1.1), negative: Math.floor((data.find(d => d.name === 'Negative')?.total || 0) * 0.9), neutral: Math.floor((data.find(d => d.name === 'Neutral')?.total || 0) * 1.05) },
    { month: 'Apr', positive: Math.floor((data.find(d => d.name === 'Positive')?.total || 0) * 0.95), negative: Math.floor((data.find(d => d.name === 'Negative')?.total || 0) * 1.05), neutral: Math.floor((data.find(d => d.name === 'Neutral')?.total || 0) * 1.1) },
    { month: 'May', positive: Math.floor((data.find(d => d.name === 'Positive')?.total || 0) * 1.05), negative: Math.floor((data.find(d => d.name === 'Negative')?.total || 0) * 0.95), neutral: Math.floor((data.find(d => d.name === 'Neutral')?.total || 0) * 0.9) },
    { month: 'Jun', positive: data.find(d => d.name === 'Positive')?.total || 0, negative: data.find(d => d.name === 'Negative')?.total || 0, neutral: data.find(d => d.name === 'Neutral')?.total || 0 },
  ] : [
    { month: 'Jan', positive: 1200, negative: 300, neutral: 200 },
    { month: 'Feb', positive: 1080, negative: 330, neutral: 190 },
    { month: 'Mar', positive: 1320, negative: 270, neutral: 210 },
    { month: 'Apr', positive: 1140, negative: 315, neutral: 220 },
    { month: 'May', positive: 1260, negative: 285, neutral: 180 },
    { month: 'Jun', positive: 1200, negative: 300, neutral: 200 },
  ];

  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={chartData}>
        <XAxis
          dataKey="month"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="positive"
          stroke="#8884d8"
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="negative"
          stroke="#82ca9d"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="neutral"
          stroke="#ffc658"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}