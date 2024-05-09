import './Cart.css'
import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons"
import { useCart } from '../hooks/useCart';

export function Cart() {
    const cartCheckboxId = useId();
    const { cart, clearCart, addTocart } = useCart()

    // eslint-disable-next-line react/prop-types
    function CartItem({ thumbnail, price, title, quantity, addTocart }) {
        return (
            <li>
                <img src={thumbnail} alt={title} />
                <div><strong>{title}</strong> - ${price} </div>
                <footer> 
                    <small>Qty: {quantity}</small>
                    <button onClick={addTocart}>[+]</button>
                </footer>
            </li>
        )
    }
    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type='checkbox' hidden />
            <aside>
                <ul>
                    {cart.map(product => {
                        <CartItem 
                        key={product.id} 
                        addTocart={()=> addTocart(product)}
                        {...product}/>
                    })}
                </ul>
                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}
