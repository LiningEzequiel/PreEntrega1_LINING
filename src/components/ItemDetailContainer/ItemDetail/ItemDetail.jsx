import ItemCounter from "../../ItemCounter/ItemCounter"


const ItemDetail = ({product}) => {
  return (
    <div>
    <div className="row">
        <div className="col-12 text-center">
          <h1>Detalle del Producto</h1>
        </div>
        <div className="col-6 text-center">
            <img src={product.imageUrl} alt={product.title}  className="img-fluid"/>
            <h2>{product.title}</h2>

        </div>
        <div>
            <h3>Precio: {product.price}</h3>
        </div>

        <ItemCounter />
        <div>
            <h3>Stock: {product.stock}</h3>
            <h3>Categoria: {product.category}</h3>
        </div>

    </div>

    <div className="row">
        <div className="col-12">
            <p>Descripción: {product.description}</p>

        </div>
    </div>
    </div>
  )
}

export default ItemDetail