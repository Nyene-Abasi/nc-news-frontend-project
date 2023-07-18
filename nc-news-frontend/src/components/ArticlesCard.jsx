import React from 'react'
import moment from 'moment'
import commentIcon from '../assets/commentIcon.png'
import { Link } from "react-router-dom";



const ArticlesCard = ({title, author, created_at, article_img_url, comment_count, article_id}) => {
  return (
    <div className='content-card'>
        <div className='title'> <p>{title}</p></div>
        <img src={article_img_url} alt="visual Illustration" className='article-img' />
       
        <div className='content'>
        <p className='author'>by: {author}</p>
        <p>at {moment(created_at).format('MMMM Do YYYY')}</p>  
        <p>{comment_count} <img src={commentIcon} alt="comment-icon" className='comment' /></p>
        <Link to={`/articles/${article_id}`} key={article_id} className='readmore' >
        <p className='article-button'>Read More</p>
        </Link>
        </div>
    </div>
  )
}

export default ArticlesCard