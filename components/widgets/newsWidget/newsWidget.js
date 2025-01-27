import { useEffect, useState } from 'react';

// api
import { NEWS_API_KEY } from '@/services/config';

// components
import NewsArticle from './newsArticle';

// store
import { useMainContext } from "@/store/MainProvider";

// styles
import styles from '../widgets.module.css'

async function getNews(languageCode) {
   let url = `https://newsapi.org/v2/top-headlines?language=${languageCode}&apiKey=${NEWS_API_KEY}&pageSize=3`;
   return await fetch(url).then(news => news.json());
}

export default function NewsWidget() {

   const {language} = useMainContext()
   const [news, setNews] = useState([]);

   useEffect(() => {
      getNews(language.code).then(response => {
         setNews(response.articles);
      })
   }, [])

   const renderNews = (article, i) => {
      return <NewsArticle key={i} article={article} />
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