import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  const [token, setToken] = useState('');
  const [user, setUser] = useState('');

  console.log(user);

  return (
    <>
      {!token? <>
      <h1>To begin, please login:</h1>
      <Login setToken={setToken} setUser={setUser} />
      <h3>Or create an account:</h3>
      <Register setToken={setToken} setUser={setUser} />
      </> 
      :<>
      <h1>You are logged in as {user}</h1>
      </>}
      
    </>
  )
}

export default App
