import React from 'react'
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className='nav-bar'>
        <div>
            <Link to='/' className='logo'>
            <h1 id='news-header'>NC-News</h1>
            </Link>
        </div>

        <div className='nav-links'>
            <Link to='/cooking' className='logo'>Cooking</Link>
            <Link to='/football' className='logo'>Football</Link>
            <Link to='/coding' className='logo'>Coding</Link>
            <Link to='/profile' className='logo'>Profile</Link>
        </div>

    </nav>
  )
}

export default Nav