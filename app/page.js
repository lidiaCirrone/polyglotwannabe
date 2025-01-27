// components
import LanguageTiles from '@/components/languageTiles';

export const metadata = {
  title: "polyglot wannabe",
  description: "unsolicited facts about languages"
}

export default function Home() {
  return (
    <div className='relative'>
      <LanguageTiles />
    </div>
  )
}
