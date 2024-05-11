// crear hook para leer el contexto
import { useContext } from "react";
import { CartContext } from "../context/cartProvider.jsx";

export const useCart = () =>{
    const context = useContext(CartContext)  // cambio var cart x context
    if (context === undefined ) {
        throw new Error('useCart must be used within a CartProvider')
        // averigua si la app esta dentro de un provider, para este caso app
    }
    return context
}
