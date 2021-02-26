import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCart,
  removeFromCart,
  plusQuantity,
  minusQuantity,
} from "./cartSlice";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./Cart.module.css";

export default function CartItem() {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
    function openNav() {
        document.querySelector("#mySidenav").style.width ="250px";
      }
      
  return (
    <div className={styles.mainContainer}>
      {/* <div
        className={styles.cart}
        onClick={() => openNav()}
        id = "mySidenav"
      >
        <FaShoppingCart />
        <span>{cart.length}</span>
      </div> */}
      {/* {visibleCart ? (   */}
      <div>
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
                <p className={styles.title}>
                  {item.title} </p>
                 <p className={styles.sizes}> {item.availableSizes[0]} | {item.style} <br />
                  Quantity: {item.quantity} </p>
                
              </div>
              <div>
                <button className={styles.btndelete} onClick={() => {dispatch(removeFromCart(item.id))}}>X</button>
                <br />
                <span className={styles.price}>{item.price.toFixed(2)} </span>
                <div>
                  <button
                    className={styles.qButton}
                    disabled={item.quantity <= 1 ? true : false}
                    onClick={() => dispatch(minusQuantity(item))}
                  >
                    -
                  </button>
                  <button
                    className={styles.qButton}
                    onClick={() => dispatch(plusQuantity(item))}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        
        </div>
            <footer className={styles.cartFooter}>
                <h1>Subtotal</h1>
                <div>{cart.subTotal}</div>
                
            </footer> 
      </div>
    </div>
  );
}
