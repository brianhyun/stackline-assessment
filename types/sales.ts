export type SalesData = {
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
};

export type WeeklySalesData = {
  weekEnding: string;
} & SalesData;

export type MonthlySalesData = {
  month: string;
} & SalesData;
