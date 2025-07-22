import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router';

function App() {
  const {isLoggedIn} = useLoaderData()
  return (
    <>
      <h1>{isLoggedIn ? "Welcome" : "Please login"}</h1>     
    </>
  )
}

export default App
