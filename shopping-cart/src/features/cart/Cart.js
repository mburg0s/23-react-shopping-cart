import React from "react";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import { FaShoppingCart } from "react-icons/fa";


export function Cart() {
  function openNav() {
    // document.querySelector("#mySidenav").styles.width = "250px";
    document.querySelector("#mySidenav").style.width = "250px";
  }
  

  return (
    <div>
      <div className={styles.cart} onClick={() => openNav()}>
        <FaShoppingCart />
        {/* <span>{cart.length}</span> */}
      </div>

      <div className={styles.sidenav}>
        {/* <a href="javascript:void(0)" className={styles.closebtn} onlick="closeNav()">&times;</a> */}
        <CartItem />
      </div>
    </div>
  );
}
