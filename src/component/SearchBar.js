import { useState } from 'react'
import './SearchBar.css'

const SearchBar = (props) => {
  const { searchProducts, searchCheckbox } = props
  const [search, setSearch] = useState("")
  const [checkBox, setCheckBox] = useState("")

  const handleSearch = e => {
    setSearch(e.target.value)
    searchProducts(e.target.value)
  }

  const checkboxFilter = e => {
    setCheckBox(e.target.value)
    searchCheckbox(e.target.value)
  }

  return (
    <fieldset><legend>Search</legend>
      <input className='input-box' 
        type="text" 
        placeholder="Start typing here..."
        value={search}
        onChange={handleSearch}
      />
      <form>
        <div>
          <input 
            type="checkbox" 
            id='in-stock'
            value={checkBox} 
            onChange={checkboxFilter}  
            />
          <label for="in-stock">Only show products in stock</label>
        </div>
      </form>
    </fieldset>
  )
}

export default SearchBar