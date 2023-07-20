import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { getAllArticles } from '../api/api';
import Header from '../components/Header'
import ArticlesCard from "../components/ArticlesCard";

const Articles = () => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true);
   

    useEffect(() => {
        const fetchArticles = () => {
          getAllArticles().then((articles) => {
            setArticles(articles);
         
            setLoading(false);
          });
        };
        fetchArticles();
      }, []);

      return (
        <>
        <Header/>
          <div>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <>
              
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

export default Articles
