import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  showCart,
  selectCart,
  displayCart,
  // showCart,
  //   decrement,
  //   increment,
  //   incrementByAmount,
  //   incrementAsync,
  //   selectCount,
} from "./cartSlice";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./Cart.module.css";

export function Cart() {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  const visibleCart = useDispatch(showCart);
  // let prodInstallment =0
  // const [] = useState('2');

  //   useEffect(() => {
  //     // dispatch(fetchCart());
  //   }, [showCart]);
    console.log(visibleCart, 'cart')

    function openNav() {
        document.querySelector("#mySidenav").style.width ="250px";
      }
      
  return (
    <div className={styles.mainContainer}>
      <div
        className={styles.cart}
        onClick={() => openNav()}
        id = "mySidenav"
      >
        <FaShoppingCart />
        <span>{cart.length}</span>
      </div>
      {visibleCart ? (  
      <div className={styles.cartContainer} >
        <FaShoppingCart className={styles.cart1} /> Cart
        <div className={styles.cartCount}>
          <span>{cart.length}</span>
        </div>
        <div>
        

          {cart.map((item) => (
            <div className={styles.cartItem} key={item.id}>
              <div
                // className={styles.img}
                // style={{ backgroundImage: `url(${item.img.thumb})` }}
              >
                <img src={item.img.thumb} alt={item.title} />
              </div>
              <div className={styles.cartT}>
                <p>
                  {item.title} <br />
                  {item.availableSizes[0]} | {item.style} <br />
                  Quantity: {item.quantity}
                </p>
              </div>
              <div>
                <button>X</button>
                <br />
                <span>{item.price.toFixed(2)} </span>
              </div>
              <div>{item.quantity}</div>
            </div>
          ))}
        
        </div>
      </div>) : null}
    </div>
  );
}
