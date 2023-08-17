import { useEffect, useState } from 'react'
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
  const [showNewPost, setShowNewPost] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(()=>{
    let savedToken = localStorage.getItem("token");
    let savedUser = localStorage.getItem("username")
    if (savedToken){
      setToken(savedToken);
      setUser(savedUser)
    } else {
      setToken(null);
    }
    
  },[])

  function logOut(){
    localStorage.removeItem("token");
    localStorage.removeItem("username")
    setToken(null);
    setUser('')
  }

  return (
    <>
     {/* TODO: set up where Login, Register, Profile components are rendered on page as separate routes */}
      {!token? <>
      <h1>To begin, please login:</h1>
      <Login setToken={setToken} setUser={setUser} />
      <h3>Or create an account:</h3>
      <Register setToken={setToken} setUser={setUser} />
      </> 
      :<>
      <h1>You are logged in as {user}</h1>
      <button onClick={logOut}>Log out</button>
      <br />
      <button onClick={()=>{setShowNewPost(!showNewPost)}}>New post</button>
      <button onClick={()=>{setShowProfile(!showProfile)}}>View Profile</button>
      </>}
      
      {showNewPost? <NewPost token={token}/>:<></>}
      {showProfile? <Profile token={token}/>:<></>}
      <Posts token={token}/>
      

    </>
  )
}

export default App
