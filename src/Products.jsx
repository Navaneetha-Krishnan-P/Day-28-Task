import React from 'react'
import { useContext } from 'react'
import { cartContext } from './App'



export const Products = ({ product }) => {




  const { cart, setCart } = useContext(cartContext);
  const addToCart = () => {
    setCart([...cart, product])
  }
  const removeFromCart = () => {
    setCart(cart.filter((c) => c.id != product.id))
  }

  return (
    <div className='products'>
    <div className="col" style={{ width: "18rem" }}>
      <img className="pic" src={product.thumbnail} alt={product.title} /><br /><br />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5><br/>
        <p className="card-title">{product.description}</p><br/>
        <p className="card-text"><b>$ {product.price}.00</b></p>
        {cart.includes(product) ? (
        <button className="button1" onClick={removeFromCart} >Remove from Cart</button> ): <button className="button2" onClick={addToCart}>Add to Cart</button>}
      </div>
    </div>
    </div>
  )
}