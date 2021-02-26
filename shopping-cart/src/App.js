import React from 'react';
// import { Counter } from './features/counter/Counter';
import { Product } from './features/products/Product';
import { Cart} from './features/cart/Cart';
import './App.css';

function App() {
  return (
    <div className="App">
      <Product />
      <Cart />
    </div>
  );
}

export default App;
