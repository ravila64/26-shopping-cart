import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart.js'

// eslint-disable-next-line react/prop-types
export function Products({ products }) {
  const { addToCart, removeFromCart, cart } = useCart()
  // busca producto en el cart x id
  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }
  return (
    <main className='products'>
      <ul>
        {/* eslint-disable-next-line react/prop-types */}
        {products.slice(0, 10).map(product => {
          const isProductInCart = checkProductInCart(product)
          return (
            <li key={product.id}>
              <img src={product.images[2]} alt={product.title}/>
              {/* <img src={product.thumbnail} alt={product.title} /> */}
              <div>
                <strong>{product.title}-${product.price}</strong>
              </div>
              <div> <button style={{backgroundColor: isProductInCart ? 'red':'#09f'}} onClick={() => {
                isProductInCart
                  ? removeFromCart(product)
                  : addToCart(product)
              }}>
                {
                  isProductInCart
                    ? <RemoveFromCartIcon />
                    : <AddToCartIcon />
                }
              </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}