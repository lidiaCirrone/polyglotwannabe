import { useEffect, useState } from 'react';

// api
import { NEWS_API_KEY } from '@/services/config';

// styles
import styles from '../widgets.module.css'

// utils
import NewsArticle from './newsArticle';

async function getNews(language) {
   let url = `https://newsapi.org/v2/top-headlines?language=${language}&apiKey=${NEWS_API_KEY}&pageSize=3`;
   return await fetch(url).then(news => news.json());
}

export default function NewsWidget({ language }) {

   const [news, setNews] = useState([]);

   useEffect(() => {

      getNews(language).then(response => {
         console.log(language, response);
         setNews(response.articles);
         // setNews(response.articles.slice(0,3)); // shows only 3 articles, replace with number chosen by the user
      })

   }, [])

   if (news.length === 0) return <p>No data...</p>

   return (
      <section className={"margin-bottom"}>
         <div className={styles["flex"]}>
            {
               news.map((article, i) => {
                  return <NewsArticle key={i} article={article} />
               })
            }
         </div>
      </section>

   )
}