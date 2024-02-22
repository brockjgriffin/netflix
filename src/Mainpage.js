import React from 'react'
import './Mainpage.css'
import Navbar from './Navbar'
import FeaturedPoster from './FeaturedPoster'
import Movies from './Movies'
import { signOut } from 'firebase/auth'
import { auth } from './firebase'
import { useNavigate } from 'react-router-dom'

function Mainpage() {

  
  return (
    <div className="mainpage">
        <Navbar />
        <FeaturedPoster />
        <div className="transition">
          
        </div>
        <Movies />
    </div>
  )
}

export default Mainpage