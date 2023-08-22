import { useEffect, useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './App.css'

import Posts from './components/DisplayPosts'
import NewPost from './components/NewPost'

import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'

function App() {
  // Scope for token and user set to app page for ability to pass to any child
  const [token, setToken] = useState('');
  const [user, setUser] = useState('');

  useEffect(() => {
    let savedToken = localStorage.getItem("token");
    let savedUser = localStorage.getItem("username")
    if (savedToken) {
      setToken(savedToken);
      setUser(savedUser)
    } else {
      setToken(null);
    }

  }, [])

  function logOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("username")
    setToken(null);
    setUser('')
  }

  return (
    <div className="body">
      <h1 className="pageTitle">Stranger's Things</h1>
      <div id="startup">
        {!token ? <>
          <div className="login">
            <h2>To begin, please login:</h2>
            <Login setToken={setToken} setUser={setUser} />
          </div>
          <div className="create-account">
            <h3>Or create an account:</h3>
            <Register setToken={setToken} setUser={setUser} />
          </div>
        </>
          : <nav>
            <h1>You are logged in as {user}</h1>
            <button onClick={logOut}>Log out</button>
            <br />
            <Link to="/">Home</Link>
            <Link to="/NewPost">New Post</Link>
            <Link to="/Profile">View Profile</Link>
            

          </nav>}
        <Routes>
          <Route path="/" element={<Posts token={token} user={user} />} />
          <Route path="/NewPost" element={<NewPost token={token} />} />
          <Route path="/Profile" element={<Profile token={token} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
