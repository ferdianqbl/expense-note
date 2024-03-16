"use client";
import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  YAxis,
  XAxis,
  Tooltip,
} from "recharts";
import SummaryBalance from "@/components/pages/summary/card/card-balance";
import SummaryExpense from "@/components/pages/summary/card/card-expense";
import SelectMonth from "@/components/pages/summary/select-month";
import ExpenseActivity from "@/components/pages/summary/expense-activity";

const Page = () => {
  const data = [
    {
      date: 1,
      expense: 4000,
    },
    {
      date: 2,
      expense: 3000,
    },
    {
      date: 3,
      expense: 2000,
    },
    {
      date: 4,
      expense: 2780,
    },
    {
      date: 5,
      expense: 1890,
    },
    {
      date: 6,
      expense: 2390,
    },
    {
      date: 7,
      expense: 3490,
    },
    {
      date: 8,
      expense: 4000,
    },
    {
      date: 9,
      expense: 3000,
    },
    {
      date: 10,
      expense: 2000,
    },
    {
      date: 11,
      expense: 2780,
    },
    {
      date: 12,
      expense: 1890,
    },
    {
      date: 13,
      expense: 2390,
    },
    {
      date: 14,
      expense: 3490,
    },

    {
      date: 15,
      expense: 4000,
    },
    {
      date: 16,
      expense: 3000,
    },
    {
      date: 17,
      expense: 2000,
    },
    {
      date: 18,
      expense: 2780,
    },
    {
      date: 19,
      expense: 1890,
    },
    {
      date: 20,
      expense: 2390,
    },
    {
      date: 21,
      expense: 3490,
    },

    {
      date: 22,
      expense: 4000,
    },
    {
      date: 23,
      expense: 3000,
    },
    {
      date: 24,
      expense: 2000,
    },
    {
      date: 25,
      expense: 2780,
    },
    {
      date: 26,
      expense: 1890,
    },
    {
      date: 27,
      expense: 2390,
    },
    {
      date: 28,
      expense: 3490,
    },
    {
      date: 29,
      expense: 3490,
    },
    {
      date: 30,
      expense: 3490,
    },
  ];

  return (
    <div className="flex flex-col gap-3">
      <SelectMonth />
      <div className="flex flex-col gap-3">
        <SummaryBalance />
        <SummaryExpense />
      </div>
      <div className="mt-8 h-[120px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            {/* <YAxis className="text-sm" orientation="right" /> */}
            <XAxis dataKey={"date"} />
            <Tooltip
              content={({ payload }) => {
                if (payload && payload.length > 0) {
                  return (
                    <div className="bg-background p-2 rounded-md shadow-md">
                      <div>
                        <span className="font-bold">Date: </span>
                        <span>{payload[0].payload.date}</span>
                      </div>
                      <div>
                        <span className="font-bold">Expense: </span>
                        <span>{payload[0].payload.expense}</span>
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar
              dataKey="expense"
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

      <ExpenseActivity />
    </div>
  );
};

export default Page;
