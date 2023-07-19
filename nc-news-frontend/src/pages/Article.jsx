import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getComment, getOneArticle } from '../api/api';
import ArticleCard from '../components/ArticleCard';
import CommentCard from '../components/CommentCard';

const Article = () => {

    const  { article_id }  = useParams();
   

    const [article, setArticle] = useState({});
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchArticleAndComments = () => {
          Promise.all([getOneArticle(article_id), getComment(article_id)])
            .then(([articleData, commentsData]) => {
              setArticle(articleData);
              setComments(commentsData);
              setLoading(false);
            })}
            fetchArticleAndComments();
      }, [article_id]);

    
    return (
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
          <div className='article-home'>
            <ArticleCard
            article_id={article.article_id}
              title={article.title}
              author={article.author}
              created_at={article.created_at}
              article_img_url={article.article_img_url}
              body={article.body}
              votes={article.votes}
              
            />     
            <div className='comment-parent'>
            
            <h2 className='commment header'>Comments</h2>
                {comments.map((comment)=>(
                  <CommentCard
                    key={comment.comment_id}
                    author={comment.author}
                    body={comment.body}
                    created_at={comment.created_at}
                    
                 />
                ))}  
            </div>
            </div>
          </>
        )}
      </div>
    );






 
}

export default Article