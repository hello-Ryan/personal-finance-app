'use client';

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  {
    date: "Jan",
    balance: 1000,
  },
  {
    date: "Feb",
    balance: 1500,
  },
  {
    date: "Mar",
    balance: 1300,
  },
  {
    date: "Apr",
    balance: 1700,
  },
  {
    date: "May",
    balance: 1600,
  },
  {
    date: "Jun",
    balance: 2000,
  },
];

const BalanceChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Balance Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={data}>
            <XAxis 
              dataKey="date" 
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
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="balance"
              stroke="#2563eb"
              fill="url(#gradient)"
              fillOpacity={0.2}
            />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563eb" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#2563eb" stopOpacity={0} />
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default BalanceChart; 