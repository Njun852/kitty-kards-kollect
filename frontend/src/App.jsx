import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';

function App() {
  let navigate = useNavigate();
  const isLoggedIn = false;
  useEffect(()=>{
    if(!isLoggedIn) {
      navigate("/login")
    }
  }, [])
  return (
    <>
      <h1>Dashboard</h1>     
    </>
  )
}

export default App
