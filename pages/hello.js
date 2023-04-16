// components
import Layout from '@/components/layout';
import NavigationBar from '@/components/ui/navigationBar';
import DuolingoWidget from '@/components/widgets/duolingoWidget';
import NewsWidget from '@/components/widgets/newsWidget/newsWidget';

// modules
import { useRouter } from 'next/router';

// utils
import { languages } from '@/utils/globalVariables';

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
            <p>You've chosen: {language.name}</p>
            <DuolingoWidget />
            {/* <Button label={"next"} href={"/hello"} /> */}
            <NewsWidget language={code} />
         </div>
      </Layout>
   )
}
