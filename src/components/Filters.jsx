import { useId } from "react"
import { useFilters } from '../hooks/useFilters.js'
import './Filters.css'

export function Filters () {
    //const { filters, setFilters } = useFilters()
    const { filters, setFilters } = useFilters() // filtro global
    
    //const [minPrice, setMinPrice] = useState(0) // estado local
    // genera IDs unicos 
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    // console.log({minPriceFilterId, categoryFilterId});

    const handleChangeMinPrice = (event) => {
        // revisar algo huele mal, pueden haber 2 FUENTES DE LA VERDAD
        // setMinPrice(event.target.value)
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
    // ESTO HUELE MAL
    // estamos pasando la función de actualizar estado
    // nativa de React a un componente hijo
        setFilters(prevState => ({
        ...prevState,
        category: event.target.value
      }))
    }

    return (
        <section className='filters'>

            <div>
                <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
                <input
                    type='range'
                    id={minPriceFilterId}
                    min='0'
                    max='2000'
                    onChange={handleChangeMinPrice} 
                    value = {filters.minPrice}
                />
                <span>${filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}>Categoría</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value='all'>Todas</option>
                    <option value='smartphones'>Celulares</option>
                    <option value='groceries'>Comestibles</option>
                    <option value='skincare'>Cosmeticos</option>
                    <option value='home-decoration'>Decoracion Hogar</option>
                    <option value='fragances'>Fragancias</option>
                    <option value='laptops'>Portátiles</option>
                </select>
            </div>

        </section>

    )
}