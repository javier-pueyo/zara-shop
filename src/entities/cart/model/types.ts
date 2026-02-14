export interface CartItem {
    id: string;
    hash: string;
    productName: string;
    brand: string;
    price: number;
    imageUrl: string;
    color: string;
    storage: string;
}

export interface CartState {
    items: CartItem[];
}
