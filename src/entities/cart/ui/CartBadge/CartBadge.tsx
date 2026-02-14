interface CartBadgeProps {
    count: number;
}

export const CartBadge = ({ count = 0 }: CartBadgeProps) => {
    return (
        <>{count}</>
    );
};
