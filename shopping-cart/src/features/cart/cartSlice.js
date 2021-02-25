import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    showCart: false,  
    cart: []
  },
  reducers: {
    addToCart: (state, action) => {
        // const cart
        state.cart.push(action.payload)
        // const ifExist = state.cart.

    },
    disPlayCart: (state, action) => {
        state.cart.showCart = action.payload

    }
    // removeFromCart: (state,action) => {
    //     state.cart = 

    // }

}
})
export const { addToCart, displayCart } = cartSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const fetchCart = () => dispatch => {
//         state.cart
// //   fetch('http://localhost:3001/products')
// //   .then(resp => resp.json())
// //   .then(data =>{
// //     dispatch(load(data))
// //   })
  
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const showCart = state => state.cart.showCart
export const selectCart = state => state.cart.cart

export default cartSlice.reducer;
