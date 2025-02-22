'use client';

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { month: 'Jan', income: 12000, expenses: 8000 },
  { month: 'Feb', income: 13000, expenses: 7500 },
  { month: 'Mar', income: 14000, expenses: 8500 },
  { month: 'Apr', income: 11000, expenses: 7000 },
  { month: 'May', income: 15000, expenses: 8200 },
  { month: 'Jun', income: 16281, expenses: 6638 },
  { month: 'Jul', income: 14000, expenses: 7500 },
  { month: 'Aug', income: 15500, expenses: 8100 },
  { month: 'Sep', income: 13000, expenses: 7200 },
  { month: 'Oct', income: 14500, expenses: 7800 },
  { month: 'Nov', income: 15000, expenses: 8000 },
  { month: 'Dec', income: 16000, expenses: 8500 },
];

const StatisticsChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span>Total income</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-500" />
            <span>Total expenses</span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <XAxis dataKey="month" stroke="#888888" />
            <YAxis stroke="#888888" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="income"
              stroke="#22c55e"
              fill="#22c55e"
              fillOpacity={0.2}
            />
            <Area
              type="monotone"
              dataKey="expenses"
              stroke="#f97316"
              fill="#f97316"
              fillOpacity={0.2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default StatisticsChart; 