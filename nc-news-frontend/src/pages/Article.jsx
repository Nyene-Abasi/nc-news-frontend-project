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
      const fetchItem = () => {
        getOneArticle(article_id).then((article) => {
          setArticle(article);
          setLoading(false);
        });
      };
      fetchItem();
    }, [article_id]);

    useEffect(() => {
        const fetchItem = () => {
          getComment(article_id).then((comments) => {
            setComments(comments);
           
            setLoading(false);
          });
        };
        fetchItem();
      }, [article_id]);

    
  
    return (
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <ArticleCard
              title={article.title}
              author={article.author}
              created_at={article.created_at}
              article_img_url={article.article_img_url}
              body={article.body}
              votes={article.votes}
              
            />
               
               
            <div className='comment-parent'>
            
            <h2>Comments</h2>
                {comments.map((comment)=>(
                  <CommentCard
                    key={comment.comment_id}
                    author={comment.author}
                    body={comment.body}
                    created_at={comment.created_at}
                    
                 />
                ))}  
            </div>
          </>
        )}
      </div>
    );






 
}

export default Article