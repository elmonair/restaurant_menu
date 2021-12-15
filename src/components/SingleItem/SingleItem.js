import React from 'react';
import styles from './SingleItem.module.css';

import { connect } from 'react-redux';
import { addToCart } from '../../redux/Shopping/shopping-actions';
import buttonAdd from '../Products/Product/button.svg';

const SingleItem = ({ current, addToCart }) => {
  return (
    <div className={styles.singleItem}>
      <img
        className={styles.singleItem__image}
        src={current.image}
        alt={current.title}
      />
      <div className={styles.singleItem__details}>
        <p className={styles.details__title}>{current.title}</p>
        <p className={styles.details__description}>{current.description}</p>
        <div className={styles.details__pricebtn}>
          <div className={styles.details__price}>{current.price} ₽</div>

          <button
            onClick={() => addToCart(current.id)}
            className={styles.details__addBtn}
          >
            <img className={styles.button__add} src={buttonAdd} />
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
