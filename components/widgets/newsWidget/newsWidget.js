import { useEffect, useState } from 'react';

// api
import { NEWS_API_KEY } from '@/services/config';

// components
import NewsArticle from './newsArticle';

// styles
import styles from '../widgets.module.css'

// utils
import { languages } from '@/utils/globalVariables';

async function getNews(language) {
   let url = `https://newsapi.org/v2/top-headlines?language=${language}&apiKey=${NEWS_API_KEY}&pageSize=3`;
   return await fetch(url).then(news => news.json());
}

export default function NewsWidget({ languageCode }) {

   const language = languages.find(item => item.code === languageCode)
   const [news, setNews] = useState([]);

   useEffect(() => {
      getNews(languageCode).then(response => {
         console.log(languageCode, response);
         setNews(response.articles);
         // setNews(response.articles.slice(0,3)); // shows only 3 articles, replace with number chosen by the user
      })
   }, [])

   const renderNews = (article, i) => {
      return <NewsArticle key={i} article={article} locale={language.locale} />
   }

   if (news.length === 0) return <p>No data...</p>

   return (
      <section className={"margin-bottom"}>
         <div className={styles["flex"]}>
            {news.map(renderNews)}
         </div>
      </section>
   )
}