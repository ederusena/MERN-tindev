import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './index.css';

import api from '../../services/api';

import logo from '../../assets/logo.svg';
import like from '../../assets/like.svg';
import dislike from '../../assets/dislike.svg';

const Dev = ({ match }) => {
  const [users, setusers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('devs', {
        headers: {
          user: match.params.id,
        }
      })
      setusers(response.data);
    };

    loadUsers();
  }, [match.params.id]);

  async function handleLike(id) {
    await api.post(`/devs/${id}/likes`, null, {
      headers: { user: match.params.id }
    });
  }

  async function handleDislike(id) {
    await api.post(`/devs/${id}/dislikes`, null, {
      headers: { user: match.params.id }
    });
    setusers(users.filter(user => user._id !== id));
  }

  return (
    <div className="main-container">
      <Link to='/'>
        <img src={logo} alt='Logo Tindev' />
      </Link>
       { users.length > 0 ? (
        <ul>
         { users.map(user => (
          <li key={user._id}>
          <img src={user.avatar} alt={user.name} />
          <footer>
            <strong>{user.name}</strong>
            <p>{user.bio}</p>
          </footer>
          <div className='buttons'>
            <button type='button'>
              <img src={dislike} alt='Dislike' onClick={() => handleDislike(user._id)}/>
            </button>
            <button type='button'>
              <img src={like} alt='Like' onClick={() => handleLike(user._id)}/>
            </button>
          </div>
        </li>
        ))}
        </ul>
       ) : <div className='empty'>Acabou :(</div>}
    </div>
  )
}

export default Dev
