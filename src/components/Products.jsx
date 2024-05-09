import './Products.css'
import { AddToCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart.jsx'

// eslint-disable-next-line react/prop-types
export function Products({ products }) {
  const { addToCart, cart } = useCart()
  
  const checkProductInCart = product =>{
    return cart.some(item=>intem.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {products.slice(0,10).map(product => (
          const 
          <li key={product.id}>
            <img
              src={product.images[2]}
              alt={product.title}
            />
            <div>
              <strong>{product.title}</strong>
            </div>
            <div><strong>${product.price}</strong></div>
            <div> <button onClick={()=>addToCart(product)}>
              <AddToCartIcon /> 
              </button> </div>
          </li>
        ))}
      </ul>
    </main>
  )
}