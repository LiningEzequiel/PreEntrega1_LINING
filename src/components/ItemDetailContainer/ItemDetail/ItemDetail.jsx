import ItemCounter from "../../ItemCounter/ItemCounter"


export const ItemDetail = ({producto}) => {
  return (
    <div>


     <div className="row">
       <div className="col-12 text-center">
          <h1>Detalle del Producto</h1>
       </div>
      </div> 
    <div className="row">
        
        <div className="col-6 text-center">
            <img src={producto.imgUrl} alt={producto.title}  className="img-fluid"/>

        </div>
        <div className="col-6 text-center">
            
            <h2>{producto.title}</h2>
            <h3>{producto.autor}</h3>
            <h3>Precio: {producto.price}</h3>
            <ItemCounter />
            <h3>Stock: {producto.stock}</h3>
            <h3>Categoria: {producto.category}</h3>

        </div>

        
   
        

    </div>

    <div className="row">
        <div className="col-12">
            <p>Descripción: {producto.description}</p>

        </div>
    </div>
    </div>
  )
}

