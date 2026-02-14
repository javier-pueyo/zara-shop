import { CartPage } from '@/views/CartPage/ui/CartPage';

const MOCK_ITEMS = [
    {
        id: "SMG-S24U",
        name: "Galaxy S24 Ultra",
        price: 1329,
        imageUrl: "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-S24U-titanium-violet.webp",
        color: "Titanium Violet",
        storage: "256GB"
    },
    {
        id: "SMG-A25",
        name: "Galaxy A25 5G",
        price: 239,
        imageUrl: "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-A25-negro.webp",
        color: "Negro",
        storage: "128GB"
    },
    {
        id: "GPX-8A",
        name: "Pixel 8a",
        price: 459,
        imageUrl: "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/GPX-8A-obsidiana.webp",
        color: "Obsidiana",
        storage: "128GB"
    },
    {
        id: "APL-I15PM",
        name: "iPhone 15 Pro Max",
        price: 1319,
        imageUrl: "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/APL-I15PM-titanio-negro.webp",
        color: "Titanio Negro",
        storage: "256GB"
    },
    {
        id: "OPP-A18",
        name: "A18",
        price: 99,
        imageUrl: "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/OPP-A18-azul-brillante.webp",
        color: "Azul Brillante",
        storage: "64GB"
    },
    {
        id: "XMI-RN13P5G",
        name: "Redmi Note 13 Pro 5G",
        price: 399,
        imageUrl: "http://prueba-tecnica-api-tienda-moviles.onrender.com/images/XMI-RN13P5G-midnight-black.webp",
        color: "Midnight Black",
        storage: "256GB"
    }
];

export default function CartPageRoute() {
    const total = MOCK_ITEMS.reduce((acc, item) => acc + item.price, 0);
    return <CartPage items={MOCK_ITEMS} total={total} />;
}
