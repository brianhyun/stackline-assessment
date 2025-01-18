export function TableDataCell({ value }: { value: string | number }) {
  return (
    <td className="whitespace-nowrap py-4 text-sm text-gray-400">{value}</td>
  );
}
