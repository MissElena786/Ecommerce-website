import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './ProductSlice'





// const customizedMiddleware = getDefaultMiddleware({
//    serializableCheck: false
//  })

const store = configureStore({
   reducer : cartReducer,
   // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
   //  window.devToolsExtension && window.devToolsExtension()


})
export default store