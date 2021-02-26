import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: []
  },
  reducers: {
    addToCart: (state, action) => {
        const incomingProduct = {...action.payload, quantity:1}
        const isInCart = state.cart.find(product => product.id === incomingProduct.id)
        if (!isInCart) {
            state.cart.push(incomingProduct)
        } else {
            const cartIndex = state.cart.findIndex(product => product.id === incomingProduct.id)
            const currentProduct = state.cart[cartIndex]
            currentProduct.quantity++
        }

    },
    minusQuantity: (state, action) => {
        const productInCart = { ...action.payload };
        const isFound = state.cart.findIndex((item) => item.id === productInCart.id)
        if (isFound !== -1) {
          state.cart[isFound].quantity -= 1;
        }
      },
    plusQuantity: (state, action) => {
        const productInCart = { ...action.payload };
        const isFound = state.cart.findIndex((item) => item.id === productInCart.id)
        if (isFound !== -1) {
          state.cart[isFound].quantity += 1;
        }
      },
    removeFromCart: (state,action) => {
        state.cart = state.cart.filter(item => item.id !== action.payload)

    }

}
})
export const { addToCart,removeFromCart,minusQuantity, plusQuantity } = cartSlice.actions;

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
