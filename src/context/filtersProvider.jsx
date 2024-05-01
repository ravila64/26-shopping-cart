import { createContext, useState } from "react";
// 1.  crear el contexto, este es el que tenemos que consumir
// averiguar tema de singleton => modulo de java¡script
export const FiltersContext = createContext();  // estop se crea una sola vez
// 2.crear el provider, para proveer el contexto
// este es el que no provee el acceso al contexto
// eslint-disable-next-line react/prop-types
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category:'all',
    minPrice:0
  })

  return (
    <FiltersContext.Provider
      value={{
        filters, 
        setFilters
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
