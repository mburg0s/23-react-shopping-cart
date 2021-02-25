import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import productReducer from '../features/products/productSlice';
import cartReducer from '../features/cart/cartSlice';

export default configureStore({
  reducer: {
    // counter: counterReducer,
    products: productReducer,
    cart: cartReducer,
    showCart: cartReducer,

  },
});
