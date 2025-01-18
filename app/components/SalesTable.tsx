import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { Table } from "./Table";

export function SalesTable() {
  const { sales } = useSelector((state: RootState) => state.sales);

  return (
    <Table
      data={sales}
      headers={[
        "Week Ending",
        "Retail Sales",
        "Wholesale Sales",
        "Units Sold",
        "Retailer Margin",
      ]}
    />
  );
}
