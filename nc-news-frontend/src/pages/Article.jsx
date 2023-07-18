import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneArticle } from '../api/api';
import ArticleCard from '../components/ArticleCard';

const Article = () => {

    const  { article_id }  = useParams();
   

    const [article, setArticle] = useState({});
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
          </>
        )}
      </div>
    );






 
}

export default Article