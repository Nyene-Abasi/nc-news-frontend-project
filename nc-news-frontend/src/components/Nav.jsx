import React, { useState } from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { getTopics } from '../api/api';
import { UserContext } from '../App';


const Nav = () => {
const {user, setUser} = useContext(UserContext)

const [topics, setTopics] = useState([])

useEffect(() => {
  getTopics().then((topics) => {
   
    setTopics(topics);
  });
}, []);

  return (
    <nav className='nav-bar'>
        <div>
            <Link to='/' className='logo'>
            <h1 id='news-header'>NC-News</h1>
            </Link>
        </div>

        <div className='nav-links'>
            {topics.map((topic, index)=>{
             return ( <Link to={`/articles/topic/${topic.slug}`} className='logo' key={index}>{` ${topic.slug[0].toUpperCase() + topic.slug.slice(1)}`}</Link>)
              })}
           
           {!user && ( 
           <button onClick={()=>setUser('grumpy19')} className='submit-comment'>Sign In</button>
           )}
           <p>Welcome: {user}</p>
        </div>

    </nav>
  )
}

export default Nav