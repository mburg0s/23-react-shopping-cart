import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProduct,
  selectProduct,
} from "./productSlice";
import styles from "./Product.module.css";
// import { FaShoppingCart } from "react-icons/fa";
// import {showCart} from '../cart/cartSlice'
import {Cart} from "../cart/Cart"
import { addToCart} from "../cart/cartSlice"


export function Product() {
  const products = useSelector(selectProduct);

  // const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  function installment(price, noIn) {
    return (price / noIn).toFixed(2);
  }

  // function clickCart(obj){
  //   dispatch(addToCart(obj))
  //   // dispatch(displayCart(true))
  

  // }
  return (
    <div className={styles.mainContainer}>
          <Cart />  

      <nav></nav>
      <div className={styles.mainTable}>
        <div className={styles.sidebar}>
        </div>
        <div>
          <ul className={styles.table}>
            {products.map((p) => (
              
              <div className={styles.productList} key = {p.id} onClick={()=> dispatch(addToCart(p))}>
                                {p.isFreeShipping ? (
                  <div className={styles.freeshipping}>Free shipping </div>
                ) : null}

                <img src={p.img.normal} alt="{p.title}" />
                <p>{p.title}</p>
                <div className={styles.productPrice}>
                  <div>
                    <small>{p.currencyFormat}</small>
                    <b>{p.price.toFixed(2)}</b>

                    <p>
                      or {p.installments} x
                      {installment(p.price, p.installments)}
                    </p>
                  </div>
                  <div className={styles.addToCart}>Add to Cart</div>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
