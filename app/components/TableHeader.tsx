interface TableHeaderProps {
  title: string;
}

export function TableHeader({ title }: TableHeaderProps) {
  return (
    <th
      scope="col"
      className="py-3.5 pl-4 pr-3 text-left text-sm uppercase font-medium text-gray-500 sm:pl-0"
    >
      <a href="#" className="group inline-flex">
        {title}
        <DropdownIcon />
      </a>
    </th>
  );
}

function DropdownIcon() {
  return (
    <span className="ml-2 flex-none rounded text-gray-400 group-hover:bg-gray-200">
      <svg
        className="size-5"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        data-slot="icon"
      >
        <path
          fillRule="evenodd"
          d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
}
