import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { getAllArticles } from '../api/api';
import { useParams } from "react-router-dom";

import ArticlesCard from "../components/ArticlesCard";

const Topic = () => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true);
    const [sort_by, setSort_by] = useState('votes')
    const [order, setOrder] = useState('ASC')
   
    

    const { topic } = useParams()
    

    useEffect(() => {
        const fetchArticles = () => {
          getAllArticles(topic, sort_by, order).then((articles) => {
            setArticles(articles);
         
            setLoading(false);
          });
        };
        fetchArticles();
      }, [topic, sort_by, order]);

      return (
        <>
      
          <div>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <>
              <h2 className='lists'>List of {topic} articles</h2>
              
              <form className='select'>
               <select
                  value={order}
                  onChange={(e)=>setOrder(e.target.value)}
                  className='select-option'
                  >
                    
                    <option value="ASC">Ascending</option>
                    <option value="DESC">Descending</option>
                  </select>

                  
                  <select  value={sort_by}
                  onChange={(e)=>setSort_by(e.target.value)} className='select-option'>
                    
                    <option value="votes">Votes</option>
                    <option value="comment_count">Comment count</option>
                    <option value="created_at">Date</option>

                  </select>
                  </form>
              
               <div className='articles-list'>
               
                
                {articles.map((article)=>(
                  <ArticlesCard 
                    key={article.article_id}
                    title={article.title}
                    author={article.author}
                    created_at={article.created_at}
                    article_img_url={article.article_img_url}
                    comment_count={article.comment_count}
                    article_id={article.article_id}
                 />
                ))}  
              </div>
             </>
            )}
          </div>
        </>
      );
}

export default Topic