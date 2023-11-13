import Item from "../Item/Item"


const ItemList = ({productos}) => {
  return (
    <>
        {productos.map(producto => <div key={producto.id} className="w-25 p-3" >
                                     <Item producto={producto}/>
                                  </div>) }

    </>
  )
}

export default ItemList