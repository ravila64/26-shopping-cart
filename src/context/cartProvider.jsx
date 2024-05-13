//import react from "@vitejs/plugin-react-swc";
import { createContext, useReducer } from "react"
import { cartReducer,cartInitialState } from "../reducers/cart.js"

// 1. crear contexto
export const CartContext = createContext()
// 2. crear provider
function useCartReducer() {
  const[state, dispatch ] = useReducer(cartReducer, cartInitialState)
  
  const addToCart = product => dispatch({
    type:'ADD_TO_CART',
    payload: product
  })

  const removeFromCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })

  const clearCart = () => dispatch ({type: 'CLEAN_CART'})
  return {state, addToCart, removeFromCart, clearCart}
}

// aqui coloco un ejemplo de testeo
// la depedencia de usar React Context en minima, con el useReducer
// eslint-disable-next-line react/prop-types
export function CartProvider ({ children }) {
    const {state, addToCart, removeFromCart, clearCart}= useCartReducer()
    //const [cart, setCart] = useState([])
    // aqui estaba addToCart,removeFromCart y clearCart, metodos anteriores
    // se pasaron a useCartReducer()
    return(
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            removeFromCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
