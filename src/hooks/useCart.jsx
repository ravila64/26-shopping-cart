// crear hook para leer el contexto
import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

export const useCart = () =>{
    const context = useContext(CartContext)  // cambio var cart x context
    if (context === undefined )
        // averigua si la app esta dentro de un provider, para este caso app
        throw new Error('useCart must be used within a CartProvider')
    return context
}
