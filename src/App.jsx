import './App.css'
import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products.jsx'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { IS_DEVELOPMENT } from './config.js'
import { useFilters } from './hooks/useFilters.js'
import { Cart } from './components/Cart.jsx'
import { CartProvider } from './context/cartProvider.jsx'

function App() {
  //const [products] = useState(initialProducts)
  const { filterProducts } = useFilters() // se quito filters
  const filteredProducts = filterProducts(initialProducts)
  return (
    <CartProvider>
      {/* <h1>Shopping Cart</h1> */}
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}  {/*se quito filters={filters} */}
    </CartProvider>
  )
}
export default App