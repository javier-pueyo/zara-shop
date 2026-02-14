export interface Product {
    id: string;
    brand: string;
    name: string;
    basePrice: number;
    imageUrl: string;
    hash?: string;
}

export interface ProductDetail {
    id: string;
    brand: string;
    name: string;
    description: string;
    basePrice: number;
    rating: number;
    specs: {
        screen: string;
        resolution: string;
        processor: string;
        mainCamera: string;
        selfieCamera: string;
        battery: string;
        os: string;
        screenRefreshRate: string;
    };
    colorOptions: ColorOption[];
    storageOptions: StorageOption[];
    similarProducts: Product[];
}

export interface ColorOption {
    name: string;
    hexCode: string;
    imageUrl: string;
}

export interface StorageOption {
    capacity: string;
    price: number;
}

export interface CartItem {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    color: string;
    storage: string;
}

export interface ProductSearchParams {
    search?: string;
    limit?: number;
    offset?: number;
}
