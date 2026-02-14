import { HeaderRoot } from './HeaderRoot';
import { HeaderCart } from './HeaderCart';

// Definimos el tipo compuesto
type HeaderComponent = typeof HeaderRoot & {
    Cart: typeof HeaderCart;
};

// Asignamos las propiedades
const Header = HeaderRoot as HeaderComponent;
Header.Cart = HeaderCart;

export { Header };
