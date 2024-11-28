import {useState, useContext} from 'react'

import CartContext from '../../context/CartContext'

import './index.css'

const DishItem = ({dishDetails}) => {
  const {
    dishName,
    dishType,
    dishPrice,
    dishCurrency,
    dishDescription,
    dishImage,
    dishcalories,
    addonCat,
    dishAvailability,
  } = dishDetails

  const [quantity, setQuantity] = useState(0)
  const {addCartItem} = useContext(CartContext)

  const onIncreaseQuantity = () => setQuantity(prevState => prevState + 1)

  const onDeacreaseQuantity = () =>
    setQuantity(prevState => (prevState > 0 ? prevState - 1 : 0))

  const onAddCartItem = () => addCartItem({...dishDetails, quantity})

  const renderControllButton = () => (
    <div>
      <button type='button' onClick={onDeacreaseQuantity}>
        -
      </button>
      <p>{quantity}</p>
      <button type='button' onClick={onIncreaseQuantity}>
        +
      </button>
    </div>
  )

  return (
    <li>
      <div
        className={`veg-border ${dishType === 1 ? 'non-veg-border' : ''} m-3`}
      >
        <div className={`veg-round ${dishType === 1 ? 'non-veg-round' : ''}`} />
      </div>
      <div>
        <h1>{dishName}</h1>
        <p>
          {dishCurrency} {dishPrice}
        </p>
        <p>{dishDescription}</p>
        {dishAvailability && renderControllButton()}
        {!dishAvailability && <p>Not Available</p>}
        {addonCat.length !== 0 && <p>Customizations available</p>}
        {quantity > 0 && (
          <button type='button' onClick={onAddCartItem}>
            Add To Cart
          </button>
        )}
      </div>

      <p>{dishcalories}</p>
      <img src={dishImage} alt={dishName} />
    </li>
  )
}

export default DishItem
