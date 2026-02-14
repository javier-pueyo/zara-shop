interface ProductWithId {
    id: string;
}

export const filterUniqueProducts = <T extends ProductWithId>(products: T[]): T[] => {
    const seen = new Set<string>();
    return products.filter(product => {
        if (seen.has(product.id)) return false;
        seen.add(product.id);
        return true;
    });
};
