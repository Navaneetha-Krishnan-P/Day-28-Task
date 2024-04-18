import React, { useState, useContext, useEffect } from 'react'
import { cartContext } from './App'
import data from "./Products.json"



export const Cart = () => {

    const { cart, setCart } = useContext(cartContext)
    const [total, setTotal] = useState(0)
    const [newtotal, setNewTotal] = useState(0)
    const [subtotal,setSubtotal]=useState(0)


    const updateQuantity = (productId, newQuantity) => {
      const updatedCart = cart.map(item => {
          if (item.id === productId) {
              const newSubTotal = parseInt(item.price) * newQuantity;
              return { ...item, qty: newQuantity, subTotal: newSubTotal };
          }
          return item;
      });
      setCart(updatedCart);
  }
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
}


  useEffect(() => {
    
    const newTotal = cart.reduce((acc, curr) => acc + curr.subTotal, 0);
    setTotal(newTotal);
}, [cart]);
 
    return (
        <div>
            <h5 className='total'>Total Amount = <b>$ {total}.00</b></h5>

            <div className='cards1'>
                {cart.map((product) => (
                    <div>
                    <div className='container'>
                      <div className='top'>
                        <div className='topContainer'>
                          <img className="image" src={product.thumbnail}></img>
                          <div className='title'>
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                          </div>
                        </div>
                        <div className='topContainer2'>
                          <div className="ddandprize">
                          <div className='qtybtn'>
                          <button className="button" onClick={() => updateQuantity(product.id, product.qty + 1, product.subTotal)}><b>+</b></button><br/><br/>

                           <div className='qty'>{product.qty}</div><br/>

                            <button className="button" onClick={() => updateQuantity(product.id,( (product.qty)>1 ? product.qty - 1 : none))}><b>-</b></button>
                        </div>
                            <div className='sub'>
                            <div className='prize'>
                                <p>Prize :</p>
                                <p className='prize'><b>$ {product.price}.00</b></p>
                              </div>
                              <div>
                                <p>Subtotal :</p>
                                <p><b>$ {product.subTotal}.00</b></p>
                              </div>
                              <div className='Button' >
                                  <button className='removeButton' style={{backgroundColor:"brown",color:"white"}} onClick={() => removeFromCart(product.id)}>Remove</button>
                              </div>
        
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
    </div>
        </div>)

}
