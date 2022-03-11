import ItemCount from 'components/ItemCount/ItemCount'
import React from 'react'

const ItemListContainer = (props) => {

 

  return (
    <>
      <h2>{props.texto}</h2>
      <ItemCount stock={5} initial={1}/>
    </>
  )
}

export default ItemListContainer