import { useState } from 'react';
import jsonData from '../data.json'
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';


const ProductsPage = (props) => {
  const [products, setProducts] = useState(jsonData)
  const [productsData] = useState(jsonData)
  const [checkboxDatas] = useState(jsonData)


  const searchProducts = str => {
    let searchResult = productsData.filter(product => {
      return product.name.toLowerCase().startsWith(str.toLowerCase())
    } )
    setProducts(searchResult)
  }

  const searchCheckbox = () => {
    let checkboxResult = checkboxDatas.filter(checkboxProduct => {
      return checkboxProduct.inStock
    })
    setProducts(checkboxResult)
  }


  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar searchProducts={searchProducts} searchCheckbox={searchCheckbox} />
      <ProductTable products={products}/>
    </div>
  )
}

export default ProductsPage