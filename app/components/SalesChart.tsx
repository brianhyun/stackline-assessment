import { Container } from "./Container";
import { useEffect, useState } from "react";
import { Chart } from "./Chart";

export function SalesChart() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchSales = async () => {
      const response = await fetch("/api/sales");
      const data = await response.json();

      setChartData(data);
    };

    fetchSales();
  }, []);

  return (
    <Container className="p-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Retail Sales</h2>
      {chartData.length > 0 && <Chart chartData={chartData} />}
    </Container>
  );
}
