import { WeeklySalesData } from "@/types/sales";
import { Container } from "./Container";
import { TableHeader } from "./TableHeader";
import { TableDataCell } from "./TableDataCell";
import { formatDate } from "@/utils/date";

export function Table({
  data,
  headers,
}: {
  data: WeeklySalesData[];
  headers: string[];
}) {
  return (
    <Container className="p-6 h-full">
      <div className="flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  {headers.map((header) => (
                    <TableHeader title={header} key={header} />
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {data.map((sale) => (
                  <tr key={sale.weekEnding}>
                    <TableDataCell value={formatDate(sale.weekEnding)} />
                    <TableDataCell
                      value={`$${new Intl.NumberFormat().format(
                        sale.retailSales
                      )}`}
                    />
                    <TableDataCell
                      value={`$${new Intl.NumberFormat().format(
                        sale.wholesaleSales
                      )}`}
                    />
                    <TableDataCell value={sale.unitsSold} />
                    <TableDataCell
                      value={`$${new Intl.NumberFormat().format(
                        sale.retailerMargin
                      )}`}
                    />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Container>
  );
}
