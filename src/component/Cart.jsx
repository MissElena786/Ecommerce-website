import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "../App.css"
import { removeCart } from './store/ProductSlice';
import "./Cart.css"

function Cart() {
   // const [cartList, setCartList] = useState([])
   const cartItem = useSelector((state )=> state)
   // console.log(cartItem);

   const dispatch = useDispatch()

   const removeItem = (itemId)=>{
      dispatch(removeCart(itemId))
   }
  
  return (
  
    <div className='cart-wrapper'>
      <h1 className='cart-heading'>Cart Items</h1>
      <div className='cart-products'>
      {
         (cartItem.length == 0) ? <div className='no-items'> <img className='' src='https://cdni.iconscout.com/illustration/premium/thumb/product-is-empty-8044861-6430770.png?f=webp'/> <span>Cart Is Empty </span> </div> :
         cartItem.map((item)=>{
            return (
               <div  className='cart-item' key={item.id}>
                  <img  className="cart-image" src={item.image} alt="image" />
                  <div className='cart-title'>
                     
                  <p>{item.title}</p>
                  </div>
                  <p>$ {item.price}</p>
                  <button className='remove-btn' onClick={()=> removeItem(item.id)}>Remove</button>
               </div>
            )
         })
      }
      </div>
    </div>
    
  )
}

export default Cart
