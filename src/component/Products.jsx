import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addCart } from './store/ProductSlice'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './MediaQuery.css'

function Products() {


   const dispatch = useDispatch()


   const [list, setList] = useState([])
   const [isLoading, setIsLoding] = useState(false)

   const addProduct = (product) => {
      dispatch(addCart(product))
   }

   useEffect(() => {
      const fetchData = async () => {
         const res = await axios.get("https://fakestoreapi.com/products")

         // const res = await fetch('https://fakestoreapi.com/products');
         // const data = await res.json();
         // console.log(res);
         const data = res.data
         // console.log(data);
         setList(data)
         setIsLoding(true)


      }
      fetchData()
   }, [])
   // console.log(list);
   return (
      <div  className='m-0'>
         <div className='main'>
            <div className='overlay'>
               <h1 className='main-heading'>Online shopping plateform</h1>
               <p className='main-para'>Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem assumenda tempore rerum sint quis modi magni velit atque in iusto voluptatum amet asperiores quae animi, sit maxime, odio numquam qui? sit amet consectetur adipisicing elit. Facilis, saepe sapiente? Magni, recusandae ullam? Suscipit voluptates, debitis magni numquam nemo recusandae non ullam voluptatibus dolore nobis tenetur explicabo aperiam optio.</p>
               <a href="#products"> <button className='shopping'>Continue Shoping</button></a>
            </div>
         </div>
         <div id='products' className='products-wrapper'>
            <h1 className='collection text-center'>Collection</h1>
            <div  className='products flex justify-center  flex-wrap  gap-14 p-20'>

               {(!isLoading) ? 
               <div className="d-flex justify-content-center">
               <div className="spinner-border" role="status">
                 <span className="visually-hidden">Loading...</span>
               </div>
             </div>
               :

                  list.map((product) => {
                     return (
                        <div className='cart   font-sans bg-white radius text-black ' key={product.id}>
                           <div className=''>
                              <Link to={`/product/${product.id}`} key={product.id} >
                                 <img className='object-cover product-image card-img-top' src={product.image} alt="" />
                              </Link>
                           </div>
                           <div className='product-content p-4 justify-center'>
                              <h2 className='m-1 text-gray-300'>Title : {product.title}</h2>
                              <p className='m-1 text-gray-300'>{product.category}</p>
                              <p className='m-1 price text-gray-400'>$ {product.price}</p>
                              <button className='add-to-cart ' onClick={() => addProduct(product)}>add in Cart</button>
                              <button className='buy-now ' >Buy Now</button>
                           </div>
                        </div>
                     )
                  })
               }
            </div>
         </div>
      </div>
   )
}

export default Products
