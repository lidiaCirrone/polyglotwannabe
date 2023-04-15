// modules
import { useRouter } from 'next/router';

export default function Button({ href, label, query }) {
   const router = useRouter();

   const goTo = () => {
      let args = {
         pathname: `${href}`,
      }
      if (query) args.query = query;
      router.push(args)
   }

   return (
      <div className={"button"} onClick={goTo}>{label}</div>
   )
}