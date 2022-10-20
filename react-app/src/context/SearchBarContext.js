import { createContext, useContext, useState } from "react";

const SearchBarContext = createContext()
export const useSearchBar = () => useContext(SearchBarContext)

const SearchBarProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('')

  return (<SearchBarContext.Provider
    value={{ searchTerm, setSearchTerm }}
  >
    {children}
  </SearchBarContext.Provider>)
}

export default SearchBarProvider
