import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Product.module.css';

// Redux
import { connect } from 'react-redux';
import {
  loadCurrentItem,
  addToCart,
} from '../../../redux/Shopping/shopping-actions';
import buttonAdd from './button.svg';

const Product = ({ product, addToCart, loadCurrentItem }) => {
  return (
    <div className={styles.product} id={'product__id'}>
      <img
        className={styles.product__image}
        src={product.image}
        alt={product.title}
      />

      <Link to={`/product/${product.id}`}>
        <div
          onClick={() => loadCurrentItem(product)}
          className={styles.details__title}
        >
          {product.title}
        </div>
      </Link>
      {/* <div className={styles.details__title}>{product.title}</div> */}
      <div className={styles.details__desc}>{product.description}</div>
      <div className={styles.details__bottom}>
        <div className={styles.details__price_weight}>
          <div className={styles.details__price}>{product.price} ₽ </div>
          <div className={styles.details__weight}>/ {product.wieght} </div>
        </div>
        <div className={styles.product__buttons}>
          <button
            onClick={() => addToCart(product.id)}
            className={`${styles.buttons__btn} ${styles.buttons__add}`}
          >
            <img className={styles.button__add} src={buttonAdd} />
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
