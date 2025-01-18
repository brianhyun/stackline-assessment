interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return <div className={`bg-white shadow-sm ${className}`}>{children}</div>;
}
