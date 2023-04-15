import React from 'react';

// styles
import styles from '../widgets.module.css'

function NewsArticle({ article, locale = "en-GB" }) {

   let options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
   };
   let date = new Date(Date.parse(article.publishedAt)).toLocaleDateString(locale, options);

   return (
      <>
         <div className={styles["flex-item"]}>
            <a href={article.url}><img src={article.urlToImage} /></a>
            <p className={styles["date"]}>{date}</p>
            <h4><a href={article.url}>{article.title}</a></h4>
            <p>{article.description}</p>
            <p>{article.source.name}</p>
         </div>
      </>
   )
}

export default NewsArticle;