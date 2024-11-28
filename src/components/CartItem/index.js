import {useContext} from 'react'
import {FaRegTrashAlt} from 'recat-icons/fa'

import CartContext from '../../context/CartContext'

import './index.css'

const CartItem = ({cartItemDetails}) => {
  const {dishId, dishName, dishImage, quantity, dishCurrency, dishPrice} =
    cartItemDetails
  const {
    increamentCartItemQuantity,
    decreacmentCartItemQuantity,
    removeCartItem,
  } = useContext(CartContext)

  const onIncreaseQty = () => increamentCartItemQuantity(dishId)

  const onDecreaseQty = () => decreacmentCartItemQuantity(dishId)

  const onRemoveCartItem = () => removeCartItem(dishId)

  return (
    <li>
      <img src={dishImage} alt={dishName} />
      <div>
        <p>{dishName}</p>
        <p>
          {dishCurrency} {(quantity + dishPrice).toFixed(2)}
        </p>
        <div>
          <button onClick={onDecreaseQty} type='button'>
            -
          </button>
          <p>{quantity}</p>
          <button onClick={onIncreaseQty} type='button'>
            +
          </button>
        </div>
      </div>
      <button type='button' onClick={onRemoveCartItem}>
        <FaRegTrashAlt />
      </button>
    </li>
  )
}

export default CartItem
