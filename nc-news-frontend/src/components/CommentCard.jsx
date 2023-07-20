import React from 'react'
import moment from 'moment'

const CommentCard = ({ author, body, created_at }) => {
 
  return (
    <div className='comment-card'>
       
        <p className='author-comment'>{author} says</p>
        <p className='comment-body'>{body}</p>
        <p className='date-comment'>at {moment(created_at).format('MMMM Do YYYY')}</p>
        <hr className='break'/>
    </div>
  )
}

export default CommentCard