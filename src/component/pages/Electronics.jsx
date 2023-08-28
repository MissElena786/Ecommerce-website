import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addCart } from '../store/ProductSlice'
import './Pages.css'
import '../../App.css'

function Electronics() {
   
 const dispatch = useDispatch()
 const [loading, setLoding]  = useState(false)
  const [electronicData, setElecctronicData]= useState([])
   const electronicsProduct= async ()=>{
     const result = await axios.get(`https://fakestoreapi.com/products/category/electronics`)
    //  console.log( "electronics" ,result);
     setElecctronicData(result.data)
     setLoding(true)
   
  }


  const addElectronicProduct = (item)=>{
    dispatch(addCart(item))
  }
 
  useEffect(()=>{
      electronicsProduct()
},[])
    

  return (
    <div>
        <div className='category-main electronics'>
      <div className='overlay'>
         <h1 className='main-heading'>Electronics Items</h1>
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
      electronicData.map((item)=>{
        return(
          <div  id='product' className='cart before:font-sans bg-white radius text-black  ' key={item.id}>
              <Link to={`/product/${item.id}`} key={item.id} >
             <img className=' object-cover product-image card-img-top' src={item.image} alt="" />
             </Link>
             <div className='product-content p-4 justify-center'>
             <h2>Title : {item.title}</h2>
             <p className='m-1 text-gray-300'>{item.category}</p>
              <p className='m-1 price text-gray-400'>₹ {item.price}</p>         
              <button className='add-to-cart ' onClick={() => addElectronicProduct(product)}>add in Cart</button>
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

export default Electronics
