import { parseISO, format } from "date-fns";
import { NextResponse } from "next/server";
import mockData from "../../../public/mock_data.json";

export async function GET() {
  const product = mockData[0];
  const sales = product.sales;

  // Aggregate sales by month
  const monthlyAggregates: Record<string, any> = {};

  sales.forEach((entry) => {
    const date = parseISO(entry.weekEnding);
    const month = format(date, "yyyy-MM");

    if (!monthlyAggregates[month]) {
      monthlyAggregates[month] = {
        month,
        retailSales: 0,
        wholesaleSales: 0,
        unitsSold: 0,
        retailerMargin: 0,
      };
    }

    monthlyAggregates[month].retailSales += entry.retailSales;
    monthlyAggregates[month].wholesaleSales += entry.wholesaleSales;
    monthlyAggregates[month].unitsSold += entry.unitsSold;
    monthlyAggregates[month].retailerMargin += entry.retailerMargin;
  });

  return NextResponse.json(Object.values(monthlyAggregates));
}
