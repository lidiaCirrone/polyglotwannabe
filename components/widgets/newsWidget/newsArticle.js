import React from 'react';

// modules
import clsx from 'clsx';

// store
import { useMainContext } from "@/store/MainProvider";

// styles
import styles from '../widgets.module.css'

function NewsArticle({ article }) {

   const {language} = useMainContext()
   let options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
   };
   let date = new Date(Date.parse(article.publishedAt)).toLocaleDateString(language.locale, options);

   return (
      <>
         <div className={styles["flex-item"]}>
            {article.urlToImage && <a href={article.url}><img src={article.urlToImage} /></a>}
            <p className={clsx(styles["date"], article.urlToImage && styles["right-text"])}>{date}</p>
            <h4><a href={article.url}>{article.title}</a></h4>
            <p>{article.description}</p>
            <p>{article.source.name}</p>
         </div>
      </>
   )
}

export default NewsArticle;