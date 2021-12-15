import * as actionTypes from './shopping-types';
import image1 from './images/1.png';
import image2 from './images/2.png';
import image3 from './images/3.png';
import image4 from './images/4.png';
import image5 from './images/5.png';
import image6 from './images/6.png';
import image7 from './images/7.png';
import image8 from './images/8.png';

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: 'Устрицы по рокфеллеровски1',
      description:
        'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры ',
      price: 2700,
      image: image1,
      wieght: '500 г.',
    },
    {
      id: 2,
      title: 'Свиные ребрышки на гриле с зеленью',
      description:
        'Не следует, однако забывать, что реализация намеченных плановых ',
      price: 1600,
      image: image2,
      wieght: '750 г.',
    },
    {
      id: 3,
      title: 'Креветки по-королевски в лимонном соке',
      description: 'Значимость этих проблем настолько очевидна, ',
      price: 1820,
      image: image3,
      wieght: '7 шт.',
    },
    {
      id: 4,
      title: 'Устрицы по рокфеллеровски',
      description:
        'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры ',
      price: 2700,
      image: image4,
      wieght: '500 г.',
    },
    {
      id: 5,
      title: 'Устрицы по рокфеллеровски1',
      description:
        'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры ',
      price: 2700,
      image: image5,
      wieght: 705,
    },
    {
      id: 6,
      title: 'Свиные ребрышки на гриле с зеленью',
      description:
        'Не следует, однако забывать, что реализация намеченных плановых ',
      price: 1600,
      image: image6,
      wieght: 706,
    },
    {
      id: 7,
      title: 'Креветки по-королевски в лимонном соке',
      description: 'Значимость этих проблем настолько очевидна, ',
      price: 1820,
      image: image7,
      wieght: 707,
    },
    {
      id: 8,
      title: 'Устрицы по рокфеллеровски',
      description:
        'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры ',
      price: 2700,
      image: image8,
      wieght: 708,
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
