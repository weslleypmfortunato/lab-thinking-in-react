import './ProductRow.css'

const ProductRow = (props) => {
  const { product } = props
  return (
    <tbody>
      <tr>
        <td className={product.inStock ? 'in-stock' : 'out-stock'}>{ product.name }</td>
        <td>{ product.price }</td>
      </tr>
    </tbody>
  )
}

export default ProductRow
