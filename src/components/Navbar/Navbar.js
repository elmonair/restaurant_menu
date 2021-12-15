import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import cartIcon from './cart.svg';

import { connect } from 'react-redux';

const Navbar = ({ cart }) => {
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
  {
    cart.map((item) => (
      <>
        {' '}
        key={item.id} item={item}{' '}
      </>
    ));
  }

  return (
    <div className={styles.navbar}>
      <Link to='/'>
        <span className={styles.navbar__logo}>наша продукция</span>
      </Link>
      <div className={styles.wrapper}>
        <div className={styles.navbar_s}>
          <div className={styles.cart__counter}>{totalItems} товара</div>

          <div>на сумму {totalPrice} ₽</div>
        </div>
        <div className={styles.navbar__cart}>
          <Link to='/cart'>
            <img
              className={styles.cart__image}
              src={cartIcon}
              alt='shopping cart'
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
