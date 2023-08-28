import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { addCart } from '../store/ProductSlice'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
function Mens() {


 const dispatch  = useDispatch()
  const [mensData, setMensData] = useState([])
  const [loading, setLoding] = useState(false)
   const productsWIthCategory= async ()=>{
     const result = await axios.get(`https://fakestoreapi.com/products/category/men's%20clothing`)
    //  console.log( "result " ,result);
      setMensData(result.data)
      setLoding(true)
  }
  const addProduct =(item)=>{
    dispatch(addCart(item))
}
 
// console.log(mensData)
 
  useEffect(()=>{
      productsWIthCategory()
  },[])
  return (
    <div>
    <div className='category-main electronics'>
  <div className='overlay'>
     <h1 className='main-heading'>Mens Items</h1>
     <p className='main-para'>Lorem ipsum dolor Lorem ipsum do mriores quae animi, sit maxime, odio numquam qui? sit amet consectetur adipisicing elit. Facilis, saepe sapiente? Magni, recusandae ullam? Suscipit voluptates, debitis magni numquam nemo recusandae non ullam voluptatibus dolore nobis tenetur explicabo aperiam optio.</p>
    <a href="#product"> <button className='shopping bg-slate-400 m-6' >Continue Shoping</button></a>
  </div>
  </div>
    <div className='category-wrapper'>
 {
  (!loading)? 
  <div className="d-flex justify-content-center">
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
  :
  mensData.map((item)=>{
    return(
      <div  id='product' className='cart before:font-sans bg-white radius text-black  ' key={item.id}>
          <Link to={`/product/${item.id}`} key={item.id} >
         <img className=' object-cover product-image card-img-top' src={item.image} alt="" />
         </Link>
         <div className='product-content p-4 justify-center'>
         <h2>Title : {item.title}</h2>
         <p className='m-1 text-gray-300'>{item.category}</p>
          <p className='m-1 price text-gray-400'>₹ {item.price}</p>         
          <button className='add-to-cart ' onClick={() => addProduct(item)}>add in Cart</button>
          <button className='buy-now ' >Buy Now</button>
           </div>
      </div>
    )
  })
 }
 </div>
</div>
  )
}

export default Mens
