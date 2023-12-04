import { useState } from "react"

const ItemCounter = ({initial=1, stock, onAdd}) => {


const [counter, setCounter]=useState(initial)



const handleSumar=()=>{
    if (counter<stock){
        setCounter(counter+1)
    }  
}

const handleRestar=()=>{
    if(counter>initial){
        setCounter(counter-1)
    }
}

const handleOnAdd=()=>{
    onAdd(counter)
}



  return (
    <div>
        <button className="btn btn-outline-dark p-2 m-3" onClick={handleRestar}>-</button>
        <label>{counter}</label>
        <button className="btn btn-outline-dark p-2 m-3" onClick={handleSumar}>+</button>
        
        <button className="btn btn-outline-dark btn-success p-2 m-3" onClick={handleOnAdd}>Agregar</button>
    </div>
  )
}

export default ItemCounter