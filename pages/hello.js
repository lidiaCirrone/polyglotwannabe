// components
import Layout from '@/components/layout';
import NavigationBar from '@/components/ui/navigationBar';
import DuolingoWidget from '@/components/widgets/duolingoWidget';
import NewsWidget from '@/components/widgets/newsWidget/newsWidget';

// modules
import { useRouter } from 'next/router';

// utils
import { languages } from '@/utils/globalVariables';
import Link from 'next/link';

export default function Hello() {
   const router = useRouter();
   // To-DO: get language from global
   const code = router?.query?.language ?? "en";
   const language = languages.find(item => item.code === code)
   console.log(JSON.stringify(router?.query, null, 2));

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
            <NewsWidget languageCode={code} />
         </div>
      </Layout>
   )
}
