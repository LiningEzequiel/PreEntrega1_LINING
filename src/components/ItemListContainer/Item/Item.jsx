import { Link } from "react-router-dom"


const Item = ({producto}) => {


  return (
    
        <div className="card">

          <div className="card-body p-0 text-center">
             <img src={producto.imgUrl} className="w-100" alt="imagen"/>
             <h5 className="card-title">{producto.title}</h5>
             <h6>{producto.autor}</h6>
             <p>AR$ {producto.price}</p>
        </div>
        <div className="card-footer">
            <Link to={`/detail/${producto.id}`}>
            <button className=" btn btn-outline-dark w-100">Detalle</button>
            </Link>
          
        </div>
                           </div>)}
    
  
export default Item