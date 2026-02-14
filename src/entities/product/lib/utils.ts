interface ProductWithId {
    id: string;
}

export const assignHashToProducts = <T extends ProductWithId>(products: T[]): (T & { hash: string })[] => {
    return products.map(product => ({
        ...product,
        hash: `${product.id}-${crypto.randomUUID()}`
    }));
};
