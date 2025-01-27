// components
import NavigationBar from '@/components/ui/navigationBar';
import DuolingoWidget from '@/components/widgets/duolingoWidget';
// import NewsWidget from '@/components/widgets/newsWidget/newsWidget';

export default function Hello() {

   return (
         <div className='absolute'>
            <div className='container min-h-100'>
               <header>
                  <NavigationBar />
                  <DuolingoWidget />
               </header>
               <main>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel eros eget risus rhoncus interdum egestas in odio. Proin sodales metus ut orci ultricies, in lobortis dui laoreet. Quisque placerat aliquet consectetur. Pellentesque erat sem, dignissim vitae lorem ac, maximus efficitur ex. Suspendisse quis magna eu dolor ornare tristique nec id mauris.</p>

                  <p>Pellentesque vel quam ut ligula blandit pellentesque vitae in justo. Phasellus efficitur id neque ac luctus. Vestibulum elementum feugiat arcu, vitae pharetra metus tincidunt id. Nam pharetra porttitor diam eget finibus. Donec interdum quam arcu, vitae mattis lectus sodales eget.</p>

                  <p>Donec luctus libero vel lacus sollicitudin accumsan. Quisque aliquam lacus ac lacus vulputate pellentesque. Cras consectetur ullamcorper mi, sed consequat diam vestibulum eu. Integer elementum ipsum nec nisi tristique lobortis. Aliquam consequat ornare erat eu imperdiet. Quisque elementum, neque at pharetra lacinia, ante eros ultrices nibh, in feugiat nunc nisl ac velit. Sed sodales justo mattis eros eleifend, eu suscipit lectus congue. Ut ornare est convallis, sollicitudin velit a, suscipit nulla. Proin rutrum, eros at viverra congue, felis nulla ultricies neque, ac volutpat metus nunc sed elit. Fusce consectetur ipsum sit amet libero consectetur suscipit.</p>
               </main>
            </div>
         </div>
   )

   //    return (<div className={"margin"}>
   //    <NavigationBar />
   //    <p>You've chosen: <span className={"underline"}>{language.name}</span></p>
   //    <p className={"small"}>— <Link href={`https://lingvo.info/en/lingvopedia/${language.slug}`} target={"_blank"}>find out more here!</Link> (in English)</p>
   //    <h2>Duolingo Stats</h2>
   //    <DuolingoWidget />
   //    {/* <Button label={"next"} href={"/hello"} /> */}
   //    <h2>News</h2>
   //    <NewsWidget />
   // </div>)
}
