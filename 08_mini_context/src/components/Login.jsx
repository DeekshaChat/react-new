import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext';

export default function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const {setUser} = useContext(UserContext);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
    setPassword(e.target.value);
    setUser({userName, password});
  }

  return (
    <>
      <div>Login</div>
        <input type='text' 
          value={userName} 
          onChange={(e) => { setUserName(e.target.value)}}
        />
        <input 
          type='password'
          value={password}
          onChange={(e) => { setPassword(e.target.value)}}
        />
        <button onClick={handleSubmit}>Submit</button>
    </>
  )
}