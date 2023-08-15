import { useState } from 'react'
import './App.css'
import Posts from './components/DisplayPosts'
import NewPost from './components/NewPost'

function App() {
  return (
    <>
      <NewPost token={token}/>
      <Posts/>
    </>
  )
}

export default App
