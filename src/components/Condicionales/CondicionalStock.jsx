

const CondicionalStock = ({stock=true}) => {
  return (
    <>
    <h4> {stock==0 ? "No hay Stock": {stock}}</h4>
    </>
    
  )
}

export default CondicionalStock