import { useState } from "react"

const ItemCounter = ({initial=1, stock=10, onAdd}) => {


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
        <button onClick={handleRestar}>-</button>
        <label>{counter}</label>
        <button onClick={handleSumar}>+</button>
        
        <button onClick={handleOnAdd}>Agregar</button>
    </div>
  )
}

export default ItemCounter