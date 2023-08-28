import { createSlice } from "@reduxjs/toolkit";

const initialState = []

// const state= []

// export const getProducts = createAsyncThunk('product/getAllProducts', async (thunkAPI) => {
//    try {
//        return await productService.getAllProducts();
//    } catch (error) {
//        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
//        return thunkAPI.rejectWithValue(message);
//    }
// })


const cartSlice = createSlice({
   name : "cart",
   initialState,
   // state,
   reducers :{
      addCart :(state, action)=>{
          state.push(action.payload)
      },
      removeCart :(state, action)=>{
         return state.filter((item)=>item.id !== action.payload)
      }
     
   }
   
}
)
export const {addCart, removeCart} = cartSlice.actions
// export const {addCart, removeCart} = action
export default cartSlice.reducer