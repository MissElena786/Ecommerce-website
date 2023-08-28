import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import axios from 'axios'
import { data } from 'autoprefixer'
import Electronics from './pages/Electronics'
import DropDown from './DropDown'
// import '../assets/Elena'
function Navbar() {

  const cartItem = useSelector((state) => state)
  const productsWIthCategory = async () => {
    const result = await axios.get(`https://fakestoreapi.com/products/categories`)
    // console.log("result ", result);
  }



  useEffect(() => {
    productsWIthCategory()
  }, [])



  console.log(cartItem);
  return (
    <div className='navbar bg-gray-300 p-3 text-black d-flex justify-around items-center '>
      <div className='logo-img'>
        {/* <img src='../assets/small-logo.png' className='logo' alt="image" /> */}
        {/* Elena Shopping CArt */}
      </div>
      <div>
        <ul  className='flex nav'>
          <li>
            <Link to="/"> <span>products</span></Link>
          </li>
          <li>
            <Link to="/cart"><span>Cart</span></Link>
          </li>
        </ul>
      </div>
      <div className='dropdown-wrapper'>
        <DropDown /> 
      </div>

      <div className=''>
        <p className='cart-items-length'>
        cart items : {cartItem.length}
        </p>
      </div>
    </div>
  )
}

export default Navbar
