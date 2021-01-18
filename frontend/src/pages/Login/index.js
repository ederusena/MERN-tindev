import React from 'react'
import logo from '../../assets/logo.svg';
import './index.css';

const Login = () => {
  return (
      <div className="login-container">
        <form>
          <img src={logo} alt='Logo Tindev'/>
          <input placeholder='Digite seu usuário no Github' />
          <button type='submit'>Enviar</button>
        </form>
      </div>
  )
}

export default Login
