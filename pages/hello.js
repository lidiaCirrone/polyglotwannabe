// components
import Layout from '@/components/layout';
import NavigationBar from '@/components/ui/navigationBar';
import DuolingoWidget from '@/components/widgets/duolingoWidget';
import NewsWidget from '@/components/widgets/newsWidget/newsWidget';

// redux
import { useSelector } from 'react-redux';

// utils
import Link from 'next/link';

export default function Hello() {
   const language = useSelector((state) => state.user.language);

   return (
      <Layout>
         <div className={"margin"}>
            <NavigationBar />
            <p>You've chosen: <span className={"underline"}>{language.name}</span></p>
            <p className={"small"}>— <Link href={`https://lingvo.info/en/lingvopedia/${language.slug}`} target={"_blank"}>find out more here!</Link> (in English)</p>
            <h2>Duolingo Stats</h2>
            <DuolingoWidget />
            {/* <Button label={"next"} href={"/hello"} /> */}
            <h2>News</h2>
            <NewsWidget />
         </div>
      </Layout>
   )
}
