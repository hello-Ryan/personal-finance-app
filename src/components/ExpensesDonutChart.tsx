'use client';

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Food & health", value: 63, color: "#06b6d4" },
  { name: "Shopping", value: 48, color: "#f97316" },
  { name: "Platform", value: 56, color: "#ef4444" },
  { name: "Entertainment", value: 46, color: "#22c55e" },
];

const ExpensesDonutChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>All expenses</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between mb-4">
          <div className="text-center">
            <div className="text-sm text-gray-500">Daily</div>
            <div className="font-semibold">$682.20</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-500">Weekly</div>
            <div className="font-semibold">$2,183.26</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-500">Monthly</div>
            <div className="font-semibold">$6,638.72</div>
          </div>
        </div>

        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-2 mt-4">
          {data.map((item) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span>{item.name}</span>
              </div>
              <span>{item.value}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ExpensesDonutChart; 