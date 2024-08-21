import React, { useEffect } from 'react'
import { useState } from 'react'
import Navbar from '../Components/Navbar'

const Home = () => {
    const [r, setr] =useState("hh")  


    useEffect(() => {
        setr("hell")
        console.log(r)
    },[])

  return (
    <>
    <Navbar />
    {r}
    </>
  )
}

export default Home
