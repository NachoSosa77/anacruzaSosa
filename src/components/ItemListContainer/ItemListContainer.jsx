import ItemCount from 'components/ItemCount/ItemCount'
import React from 'react'

const ItemListContainer = (props) => {

  const onAdd = () => {
    alert("Producto agregado.")
  }

  return (
    <>
      <h2>{props.texto}</h2>
      <ItemCount stock={5} initial={1} onAdd={onAdd} />
    </>
  )
}

export default ItemListContainer