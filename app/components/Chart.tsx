import { SalesData } from "@/types/sales";
import { Line, LineChart, Tooltip, ResponsiveContainer, XAxis } from "recharts";

export function Chart({ chartData }: { chartData: SalesData[] }) {
  return (
    <ResponsiveContainer width="100%" height={400} className="p-1">
      <LineChart data={chartData}>
        <XAxis
          dataKey="month"
          tick={{ fontSize: 12 }}
          interval={0}
          tickFormatter={(tick) => {
            const monthNumber = parseInt(tick.split("-")[1], 10);
            const months = [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ];
            return months[monthNumber - 1];
          }}
        />
        <Tooltip
          formatter={(value: number) =>
            `$${new Intl.NumberFormat().format(value)}`
          }
        />
        <Line
          type="monotone"
          dataKey="retailSales"
          stroke="#4F46E5"
          name="Retail Sales"
        />
        <Line
          type="monotone"
          dataKey="wholesaleSales"
          stroke="#10B981"
          name="Wholesale Sales"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
