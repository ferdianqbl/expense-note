"use client";
import React from "react";
import { ResponsiveContainer, BarChart, Bar, YAxis } from "recharts";
import SummaryBalance from "@/components/pages/summary/card/card-balance";
import SummaryExpense from "@/components/pages/summary/card/card-expense";
import SelectMonth from "@/components/pages/summary/select-month";

const Page = () => {
  const data = [
    {
      goal: 400,
    },
    {
      goal: 300,
    },
    {
      goal: 200,
    },
    {
      goal: 300,
    },
    {
      goal: 200,
    },
    {
      goal: 278,
    },
    {
      goal: 189,
    },
    {
      goal: 239,
    },
    {
      goal: 300,
    },
    {
      goal: 200,
    },
    {
      goal: 278,
    },
    {
      goal: 189,
    },
    {
      goal: 349,
    },
    {
      goal: 349,
    },
    {
      goal: 349,
    },
    {
      goal: 400,
    },
    {
      goal: 300,
    },
    {
      goal: 200,
    },
    {
      goal: 300,
    },
    {
      goal: 200,
    },
    {
      goal: 278,
    },
    {
      goal: 189,
    },
    {
      goal: 239,
    },
    {
      goal: 300,
    },
    {
      goal: 200,
    },
    {
      goal: 278,
    },
    {
      goal: 189,
    },
    {
      goal: 349,
    },
    {
      goal: 349,
    },
    {
      goal: 349,
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <SelectMonth />
      <div className="flex flex-col gap-3">
        <SummaryBalance />
        <SummaryExpense />
      </div>
      <div className="h-[120px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <YAxis className="text-sm" orientation="right" />
            <Bar
              dataKey="goal"
              style={
                {
                  fill: "hsl(var(--foreground))",
                  opacity: 0.9,
                } as React.CSSProperties
              }
              className=""
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Page;
