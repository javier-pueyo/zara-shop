interface CartBadgeProps {
  count: number;
  className?: string;
}

export const CartBadge = ({ count, className }: CartBadgeProps) => {
  if (count === 0) return null;

  return <span className={className}>({count})</span>;
};
