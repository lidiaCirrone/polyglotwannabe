export default function Button({ href, label }) {
   return (
      <div className={"button"}><Link href={href}>{label}</Link></div>
   )
}