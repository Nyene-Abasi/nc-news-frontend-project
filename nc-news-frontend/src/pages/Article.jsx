import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getComment, getOneArticle, postComment } from '../api/api';
import ArticleCard from '../components/ArticleCard';
import CommentCard from '../components/CommentCard';

const Article = () => {

    const  { article_id }  = useParams();
   

    const [article, setArticle] = useState({});
    const [comments, setComments] = useState([])
    const [username, setUsername] = useState('')
    const [body, setBody] = useState('')
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)
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

      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!username || !body) {
          alert("Please fill in all the fields before submitting!!!!!");
          return;
      }

      setLoading(true)
  
        const requestedBody = {
          username,
          body,
        };
       
        postComment(requestedBody, article_id)
          .then((data) => {
          alert("Comment posted successfully!");
           setComments((currComments)=>{
            return [data, ...currComments]
           })
           setUsername('')
           setBody('') 
        setLoading(false);

      }).catch(() => {
        setLoading(false); 
        setError(true)
      
      });
       
      };
    

 
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

              <h2>Add Comments</h2>

                <form className='form' onSubmit={handleSubmit}>
                    <label htmlFor="username"></label>
                    <input type="text" id='username' placeholder='Enter username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    <label htmlFor="comments"></label>
                    <textarea  id="comments" cols="30" className='textarea' rows="10" placeholder="What's your thought?" value={body} onChange={(e)=>setBody(e.target.value)} ></textarea>
                    <button type='submit' disabled={loading } className='submit-comment'>Submit</button>
                    {error ? <p>Failed to post comment. Please try again!</p> : null}
                </form>  

            <div className='comment-parent'>
            <h2 className='commment-header'>Comments</h2>

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