import {createContext} from 'react'

const CartContext = createContext({
  cartList: [],
  addCartItem: () => {},
  removeCartItem: () => {},
  removeAllCartItems: () => {},
  increamentCartItemQuantity: () => {},
  decreamentCartItemQuantity: () => {},
})

export default CartContext
