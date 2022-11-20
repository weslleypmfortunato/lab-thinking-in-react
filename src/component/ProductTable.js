import ProductRow from "./ProductRow"
import './ProductTable.css'

const ProductTable = (props) => {
  const { products } = props
  return (
    <table>
      <thead>
        <tr>
          <th className="headings">Name</th>
          <th className="headings">Price</th>
        </tr>
      </thead>
      { products.map((product) => {
        return (
          <ProductRow product={product}/>
        )
      }) }
    </table>
  )
}

export default ProductTable
