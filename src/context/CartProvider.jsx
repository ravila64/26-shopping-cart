import react from "@vitejs/plugin-react-swc";
import { createContext, useState } from "react"

// 1. crear contexto
export const CartContext = createContext()

// 2. crear provider
export function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addCart = product =>{
      //forma basica add ro cart
      //setCart([...cart, product])      
      //Check if product is already in the cart
      const productInCartIndex = cart.findIndex(item=>item.id ===product.id) 
      if(productInCartIndex >=0){
        // copia profunta de cualquier objeto
        // seria una forma, 
        const newCart = structuredClone(cart);
        newCart[productInCartIndex].quantity +=1
        return setCart(newCart)
      }
      // product no esta en el carrito
      // setCart(prevState =([
      //   ...prevState,
      //   {
      //       ...product,
      //       quantity:1
      //   }
      // ]))
    }

    const clearCart = () =>{
        setCart([])
    }

    return(
        <CartContext.Provider value={{
            cart,
            addCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
