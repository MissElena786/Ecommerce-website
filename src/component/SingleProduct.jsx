import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './Single-Product.css'
import { useDispatch } from 'react-redux'
import { addCart } from './store/ProductSlice'
import './MediaQuery.css'

function SingleProduct() {

  const { id } = useParams()
  const [product, setProduct] = useState("")
  const dispatch = useDispatch()


  const fetchProfduct = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
    // console.log(response);
    const data = response.data
    setProduct(data)
  }
  // console.log(product);
  const addProduct = (product) => {
    dispatch(addCart(product))
 }

  useEffect(() => {
    fetchProfduct()
  }, [])

  return (
    <div className='single-wrapper'>
      <div className='single-image-wrapepr'>
        <div className='single-image'>
          <img className='img' src={product.image} alt="img" />
        </div>
        
        <div className='single-content  border m-auto'>
          <h1 className='heading'>{product.title}</h1>
          <p className='single-para text-gray-500 '>{product.description}</p>
          <p className='single-para text-gray-700 '>{product.category}</p>
          <div className='flex   items-center'>
          <p className='single-para text-gray-800'>${product.price}</p>
          <button className='add-to-cart   border bg-gray-300 mb-3 single-btn ' onClick={() => addProduct(product)}>add in Cart</button>
          </div>
          </div>
        </div>
      </div>
  
  )
}

export default SingleProduct
