import './Products.css'
import { AddToCartIcon } from './Icons.jsx'

// eslint-disable-next-line react/prop-types
export function Products({ products }) {

  return (
    <main className='products'>
      <ul>
        {products.slice(0,10).map(product => (
          <li key={product.id}>
            <img
              src={product.images[2]}
              alt={product.title}
            />
            <div>
              <strong>{product.title}</strong>
            </div>
            <div><strong>${product.price}</strong></div>
            <div> <button> <AddToCartIcon /> </button> </div>
          </li>
        ))}
      </ul>
    </main>
  )
}