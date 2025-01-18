import { Line, LineChart, Tooltip, ResponsiveContainer, XAxis } from "recharts";

import { Container } from "./Container";
import { useEffect, useState } from "react";

export function SalesGraph() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchSales = async () => {
      const response = await fetch("/api/sales");
      const data = await response.json();
      console.log(data);
      setChartData(data);
    };

    fetchSales();
  }, []);

  return (
    <Container className="w-3/4 p-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Retail Sales</h2>
      {chartData.length > 0 && (
        <ResponsiveContainer width="100%" height={400} className="p-1">
          <LineChart data={chartData}>
            <XAxis
              dataKey="month"
              tick={{ fontSize: 12 }}
              interval={0}
              tickFormatter={(tick) =>
                new Date(tick).toLocaleString("default", { month: "short" })
              }
            />
            <Tooltip />
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
      )}
    </Container>
  );
}
