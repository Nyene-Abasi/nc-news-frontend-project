import React from 'react'
import moment from 'moment'

const CommentCard = ({ author, body, created_at }) => {
  return (
    <div className='comment-card'>
       
        <p className='author-comment'>by {author}</p>
        <p className='date-comment'>at {moment(created_at).format('MMMM Do YYYY')}</p>
        <p className='comment-body'>{body}</p>
        <hr className='break'/>
    </div>
  )
}

export default CommentCard