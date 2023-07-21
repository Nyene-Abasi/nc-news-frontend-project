import React from 'react'
import moment from 'moment'
import { deleteComment } from '../api/api'
import { useContext } from 'react'
import { UserContext } from '../App'


const CommentCard = ({ author, body, created_at, comment_id }) => {
  const {user} = useContext(UserContext)
  

  
 
  return (
    <div className='comment-card'>
       
        <p className='author-comment'>{author} says</p>
        <p className='comment-body'>{body}</p>
        <p className='date-comment'>at {moment(created_at).format('MMMM Do YYYY')}</p>
        {author === user &&(
        <button onClick={()=>handleDelete(comment_id)}>Delete Comment</button>
        )}
        <hr className='break'/>
    </div>
  )
}

export default CommentCard



