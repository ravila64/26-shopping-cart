import './Filters.css'
import { useId, useState } from "react"

export function Filters({ onChange }) {
    //const { filters, setFilters } = useFilters()
    const [minPrice, setMinPrice] = useState(0)

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        // revisar algo huele mal
        setMinPrice(event.target.value)
        onChange(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    // const handleChangeCategory = (event) => {
    // ⬇️ ESTO HUELE MAL
    // estamos pasando la función de actualizar estado
    // nativa de React a un componente hijo
    //   setFilters(prevState => ({
    //     ...prevState,
    //     category: event.target.value
    //   }))
    // }

    return (
        <section className='filters'>

            <div>
                <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
                <input
                    type='range'
                    id={minPriceFilterId}
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPrice}
                />
                <span>${minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}>Categoría</label>
                <select id={categoryFilterId}>
                    <option value='all'>Todas</option>
                    <option value='laptops'>Portátiles</option>
                    <option value='smartphones'>Celulares</option>
                </select>
            </div>

        </section>

    )
}