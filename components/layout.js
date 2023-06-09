import Head from "next/head";

export default function Layout({
   pageName = "polyglot wannabe",
   pageDescription = "unsolicited facts about languages",
   children
}) {
   return (
      <>
         <Head>
            <title>{pageName}</title>
            <meta name="description" content={pageDescription} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         {children}
      </>
   )
}