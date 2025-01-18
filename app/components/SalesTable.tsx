import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { Table } from "./Table";
import { Container } from "./Container";
import { TableDataCell } from "./TableDataCell";
import { formatDate } from "@/utils/date";
import { WeeklySalesData } from "@/types/sales";

export function SalesTable() {
  const { sales } = useSelector((state: RootState) => state.sales);

  return (
    <Container className="p-6 h-full">
      <Table
        headers={[
          "Week Ending",
          "Retail Sales",
          "Wholesale Sales",
          "Units Sold",
          "Retailer Margin",
        ]}
      >
        {sales.map((sale: WeeklySalesData) => (
          <tr key={sale.weekEnding}>
            <TableDataCell value={formatDate(sale.weekEnding)} />
            <TableDataCell
              value={`$${new Intl.NumberFormat().format(sale.retailSales)}`}
            />
            <TableDataCell
              value={`$${new Intl.NumberFormat().format(sale.wholesaleSales)}`}
            />
            <TableDataCell value={sale.unitsSold} />
            <TableDataCell
              value={`$${new Intl.NumberFormat().format(sale.retailerMargin)}`}
            />
          </tr>
        ))}
      </Table>
    </Container>
  );
}
