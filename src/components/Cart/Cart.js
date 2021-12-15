import React, { useState, useEffect } from 'react';
import styles from './Cart.module.css';

import { connect } from 'react-redux';

import CartItem from './CartItem/CartItem';

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <div className={styles.cart}>
      <span className={styles.summary__title}>
        Корзина с выбранными товарами
      </span>
      <div className={styles.cart__items}>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className={styles.divid__cart}></div>{' '}
      <div className={styles.cart__summary}>
        <div className={styles.summary__price}>
          <span>Заказ на сумму: &nbsp;</span>
          <span>{totalPrice} ₽</span>
        </div>
        <button className={styles.summary__checkoutBtn}>Оформить заказ</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
