
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import Products from './component/Products'
import { Provider } from 'react-redux'
import store from './component/store/Store'
import Cart from './component/Cart'
import SingleProduct from './component/SingleProduct'
import Electronics from './component/pages/Electronics'
import Jewellery from './component/pages/Jewellery'
import Mens from './component/pages/Mens'
import Women from './component/pages/Women'
import Footer from './component/Footer'

function App() {

  return (
    
    <div className=' bg-[#0D0D0D] text-white ' >
   <Provider  store={store}>
   <BrowserRouter>

      <Navbar/>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/electronic' element={<Electronics/>}/>
        <Route path='/jwelery' element={<Jewellery/>}/>
        <Route path='/mens' element={<Mens/>}/>
        <Route path='/women' element={<Women/>}/>
        <Route path='/product/:id' element={<SingleProduct/>}/>
      </Routes>
      <Footer/>
   </BrowserRouter>
      {/* <Products/> */}

    </Provider>
    </div>
  
  )
}

export default App
