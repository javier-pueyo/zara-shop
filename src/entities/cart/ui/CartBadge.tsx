interface CartBadgeProps {
  count: number;
  className?: string;
}

export const CartBadge = ({ count, className }: CartBadgeProps) => {
  return <span className={className}>{count}</span>;
};
