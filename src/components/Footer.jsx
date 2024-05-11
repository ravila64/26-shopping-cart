//import { useCart } from '../hooks/useCart.js'
//import { useFilters } from '../hooks/useFilters.js'
import './Footer.css'

// se quito el props {filters} como parametro
// eslint-disable-next-line react/prop-types
export function Footer() {
    //const { cart } = useCart()
    //const { filters } = useFilters()
    return (
        <footer className='footer'>
            {/* {
                JSON.stringify(filters, null, 2)
            } */}
            {/* {
                JSON.stringify(cart, null, 2)
            }*/}
            <h4>Prueba técnica de React ⚛️ － <span>ravila64 en github</span></h4>
            <h5>Shopping Cart con useContext & useReducer</h5>
            <h5>Gracias a enseñanzas en videos con midudev</h5>
        </footer> 
    )
}
 