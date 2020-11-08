import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from 'react';
import { useQuery, gql } from '@apollo/client';

const AppStateContext = createContext({
  cart: [],
  cartIsOpen: false,
  products: [],
  subTotal: 0,
  removeFromCart: () => {},
  addToCart: () => {},
  closeCart: () => {},
  openCart: () => {},
});

const PRODUCTS_QUERY = gql`
  query GetProducts {
    products {
      id
      title
      image_url
      price(currency: USD)
    }
  }
`;

const findItemIndex = (cart, id) =>
  cart.findIndex((cartItem) => cartItem.id === id);

const getIndexInfo = (cart, id) => {
  const itemIndex = findItemIndex(cart, id);
  const existsInCart = itemIndex > -1;

  return { itemIndex, existsInCart };
};

const getNewStore = (cart, id, updateCount) => {
  const { existsInCart, itemIndex } = getIndexInfo(cart, id);

  if (existsInCart) {
    const updatedItem = cart[itemIndex];
    const newQuantity = updatedItem.quantity + updateCount;
    const quantityIsPositive = newQuantity > 0;

    if (quantityIsPositive) {
      const newCart = [...cart];
      newCart[itemIndex] = { ...updatedItem, quantity: newQuantity };
      return newCart;
    }

    return cart.filter((cartItem) => cartItem.id !== id);
  }

  return [...cart, { id, quantity: updateCount }];
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        isOpen: true,
        store: getNewStore(state.store, action.payload.id, 1),
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        store: getNewStore(
          state.store,
          action.payload.id,
          action.payload.count || -1
        ),
      };
    case 'CLOSE_CART':
      return {
        ...state,
        isOpen: false,
      };
    case 'OPEN_CART':
      return {
        ...state,
        isOpen: true,
      };
  }
};

const flattenProductList = (arr = []) =>
  arr.reduce((obj, arrItem) => ({ ...obj, [arrItem.id]: arrItem }), {});

export const AppStateProvider = ({ children }) => {
  const { data = {} } = useQuery(PRODUCTS_QUERY);
  const { products = [] } = data;
  const [cartState, dispatch] = useReducer(cartReducer, {
    store: [],
    isOpen: false,
  });
  const normalizedProducts = useMemo(() => flattenProductList(products), [
    products,
  ]);
  const cart = useMemo(
    () =>
      cartState.store.map((item) => ({
        ...item,
        ...normalizedProducts[item.id],
      })),
    [cartState]
  );
  const subTotal = useMemo(
    () => cart.reduce((total, item) => total + item.quantity * item.price, 0),
    [cart]
  );

  const addToCart = useCallback(
    (id) => dispatch({ type: 'ADD_TO_CART', payload: { id } }),
    [dispatch]
  );

  const removeFromCart = useCallback(
    (id, count = -1) =>
      dispatch({ type: 'REMOVE_FROM_CART', payload: { id, count } }),
    [dispatch]
  );

  const closeCart = useCallback(() => dispatch({ type: 'CLOSE_CART' }), [
    dispatch,
  ]);

  const openCart = useCallback(() => dispatch({ type: 'OPEN_CART' }), [
    dispatch,
  ]);
  return (
    <AppStateContext.Provider
      value={{
        cart,
        cartIsOpen: cartState.isOpen,
        products,
        subTotal,
        removeFromCart,
        addToCart,
        closeCart,
        openCart,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

const useAppState = () => useContext(AppStateContext);

export default useAppState;
