import { useState, useEffect } from "react"
import { useSearchBar } from "../../context/SearchBarContext"
import { NavLink, useHistory } from "react-router-dom"
import "./SearchBar.css"

const SearchBar = () => {
    const history = useHistory()
    const { setSearchTerm } = useSearchBar()
    const [query, setQuery] = useState('')
    // const listingsArr = Object.values(listings)

    console.log("hey")

    const handleSearch = (e) => {
        e.preventDefault()

        history.push('/listings')
        setSearchTerm(query)
        setQuery('')
    }

    return (
        <>
            <div className="search-div">

                <input
                    className="search-input"
                    type='text'
                    placeholder="e.g., Los Angeles, New York"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
                <div className="search-button" onClick={handleSearch}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
        </>
    )
}

export default SearchBar
