import {useState} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

const Login = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const onChangeHandler = event => {
    const {id, value} = event.target
    if (id === 'username') {
      setUsername(value)
    } else {
      setPassword(value)
    }
  }

  const onSuccessfullLogin = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 1})
    history.replace('/')
  }

  const onFailedLogin = errorMessage => {
    setErrorMsg(errorMessage)
  }

  const onSubmitLogin = async event => {
    event.preventDefault()
    const userDetails = {username, password}
    const api = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(api, options)
    const data = await response.json()
    if (response.ok) {
      onSuccessfullLogin(data.jwt_token)
    } else {
      onFailedLogin(data.error_msg)
    }
  }

  if (Cookies.get('jwt_token')) {
    return <Redirect to='/' />
  }

  return (
    <div>
      <form onSubmit={onSubmitLogin}>
        <h1>Login</h1>
        <label htmlFor='username'>USERNAME</label>
        <input
          value={username}
          onChange={onChangeHandler}
          type='text'
          id='username'
        />
        <label htmlFor='password'>PASSWORD</label>
        <input
          value={password}
          id='password'
          onChange={onChangeHandler}
          type='password'
        />
        <button type='submit'>login</button>
        {errorMsg !== '' && <p>{errorMsg}</p>}
      </form>
    </div>
  )
}

export default Login
