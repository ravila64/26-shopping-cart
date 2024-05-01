import { useFilters } from '../hooks/useFilters.js'
import './Footer.css'
// se quito el props {filters} como parametro
// eslint-disable-next-line react/prop-types
export function Footer() {
    const { filters } = useFilters()
    return (
        <footer className='footer'>
            {
                JSON.stringify(filters, null, 2)
            }
        </footer>
    )
}
