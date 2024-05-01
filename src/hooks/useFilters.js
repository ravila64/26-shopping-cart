import { useContext } from "react"
import { FiltersContext } from "../context/filtersProvider.jsx"

// esto es un Custom Hook
export function useFilters() {
    const {filters, setFilters}= useContext(FiltersContext)
    //console.log(filters)
    //const setFilters = () =>{}
  
    const filterProducts = (products) => {
      return products.filter(product => {
        return (
          product.price >= filters.minPrice &&
          (
            filters.category === 'all' ||
            product.category === filters.category
          )
        )
      })
    }
    return { filters, filterProducts, setFilters }
  }
