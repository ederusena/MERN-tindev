import React, { useState } from 'react'
import logo from '../../assets/logo.svg';
import api from '../../services/api';

import './index.css';

const Login = ({ history }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await api.post('/devs',{
      username,
    });

    const { _id } = response.data;

    // Redireciona para main
    history.push(`/devs/${_id}`);
}

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt='Logo Tindev' />
        <input
          placeholder='Digite seu usuário no Github'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}

export default Login
