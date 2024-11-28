import {useContext} from 'react'

import Header from '../Header'
import CartItem from '../CartItem'

import CartContext from '../../context/CartContext'

import './index.css'

const Cart = () => {
  const {cartList, removeAllCartItems} = useContext(CartContext)
  const renderEmptyView = () => (
    <div>
      <img src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png' alt='empty view' />
      <p>Your cart is empty</p>
    </div>
  )

  const renderCartItems = () => (
    <>
      <div>
        <h1>Cart Items</h1>
        <button type='button' onClick={removeAllCartItems}>
          Remove All
        </button>
      </div>
      <ul>
        {cartList.map(dish => (
          <CartItem key={dish.dishId} cartItemDetails={dish} />
        ))}
      </ul>
    </>
  )

  return (
    <div>
      <Header />
      <div>{cartList.length === 0 ? renderEmptyView() : renderCartItems()}</div>
    </div>
  )
}

export default Cart
