import React from 'react'
import moment from 'moment'


const ArticleCard = ({title, author, created_at, article_img_url, body, votes}) => {
  return (
    <div className='card'>
        <div className='title-card'> <h1>{title}</h1></div>
        <img src={article_img_url} alt="visual Illustration" className='article-img-card' />
       
        <div className='article-content'>
        <p className='author-article'>by: {author}</p>
        <p className='date'>at {moment(created_at).format('MMMM Do YYYY')}</p>  
       
        <p>{votes} votes</p>
        </div>
       
       <p className='article-body'>{body}</p>
        
    </div>
  )
}

export default ArticleCard