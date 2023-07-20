import React from 'react'
import moment from 'moment'
import likeIcon from '../assets/likeIcon.png'
import { useState } from 'react'
import { patchVote } from '../api/api'



const ArticleCard = ({title, author, created_at, article_img_url, article_id, body, votes}) => {
  
    const [newVotes, setNewVotes] = useState(0)
    const [error, setError] = useState(false)

   

    const handleClick = () =>{
        setNewVotes ((currNewVotes) =>{
            return currNewVotes + 1
        })
       
    patchVote(article_id)
    .catch((err)=>{
        setNewVotes((currNewVotes)=>{
            return currNewVotes - 1
        })

        setError(true)
    })
    }
      

  return (
    <div className='card'>
        <div className='title-card'> <h1>{title}</h1></div>
        <img src={article_img_url} alt="visual Illustration" className='article-img-card' />
       
        <div className='article-content'>
        <p className='author-article'>by: {author}</p>
        <p className='date'>at {moment(created_at).format('MMMM Do YYYY')}</p>  
       <p>
        {votes + newVotes} 
        <button className='vote' onClick={handleClick} disabled={newVotes > 0}>
         <img src={likeIcon} alt="like-icon" className='like' />
         </button>
         {error ? <p>Opps! Something went wrong. Try again!</p> : null}
         </p>
        </div>
       
       <p className='article-body'>{body}</p>
       <hr className='break-out' />
        
    </div>
  )
}

export default ArticleCard