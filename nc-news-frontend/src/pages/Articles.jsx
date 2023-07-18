import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { getAllArticles } from '../api/api';

import ArticleCard from "../components/ArticleCard";

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
          <div>
            {loading ? (
              <p>Loading...</p>
            ) : (
               <div className='articles-list'>
                {articles.map((article)=>(
                  <ArticleCard 
                    key={article.article_id}
                    title={article.title}
                    author={article.author}
                    created_at={article.created_at}
                    article_img_url={article.article_img_url}
                    comment_count={article.comment_count}
                 />
                ))}  
              </div>
            )}
          </div>
        </>
      );
}

export default Articles
