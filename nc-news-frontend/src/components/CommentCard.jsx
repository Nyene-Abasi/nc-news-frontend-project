import React from 'react'
import moment from 'moment'
import { deleteComment } from '../api/api'
import { useContext } from 'react'
import { UserContext } from '../App'
import { useState } from 'react'



const CommentCard = ({ author, body, created_at, comment_id, setComments }) => {
  const {user} = useContext(UserContext)
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [error, setError] = useState(false)
  

  const handleDelete = (comment_id) =>{
    setIsButtonDisabled(true)
      deleteComment(comment_id)
      .then(() => {
        alert('Comment deleted')
        setComments((current) => {
          return current.filter((comment) => {
            return comment.comment_id !== comment_id;
          });
        });
        setIsButtonDisabled(false);
      })
      .catch((err) => {
        setError(err);
      });
    
    
      
  }
 
  return (
    <div className='comment-card'>
       
        <p className='author-comment'>{author} says</p>
        <p className='comment-body'>{body}</p>
        <p className='date-comment'>at {moment(created_at).format('MMMM Do YYYY')}</p>
        {author === user &&(
        <button onClick={()=>handleDelete(comment_id)} disabled={isButtonDisabled} className='submit-comment'>Delete</button>
        )}
         {error ? <p>Failed to delete comment. Please try again!</p> : null}
        <hr className='break'/>
    </div>
  )
}

export default CommentCard

