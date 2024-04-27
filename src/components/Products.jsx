import './Products.css'
import { AddToCartIcon } from './Icons.jsx'
import { products } from '../mocks/products.json'

// eslint-disable-next-line react/prop-types
export function Products() {
  return (
    <main className='products'>
      <ul>
        {/* eslint-disable-next-line react/prop-types */}
        {products.slice(0,10).map(product => {
          <li key={product.id}>
            <div>${product.rating} </div>
            {/* <img
              src={product.thumbnail}
              alt={product.title}
            /> */}
            <div>
              <strong>{product.title}</strong> - ${product.price}
            </div>
            <div>
              <button>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        })}
      </ul>
    </main>
  )
}
