import {useContext} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Cookies from 'js-cookie'

import CartContext from '../../context/CartContext'

import './index.css'

const Header = props => {
  const {cartList, restaurantName} = useContext(CartContext)

  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('./login')
  }

  const renderCartIcon = () => (
    <div>
      <Link to='/cart'>
        <button type='button'>
          <AiOutlineShoppingCart />
        </button>
      </Link>
      <div>
        <p>{cartList.length}</p>
      </div>
    </div>
  )

  return (
    <header>
      <Link to='/'>
        <h1>{restaurantName}</h1>
      </Link>
      <div>
        <p>My orders</p>
        <button type='button' onClick={onLogout}>
          Logout
        </button>
        {renderCartIcon()}
      </div>
    </header>
  )
}

export default withRouter(Header)
