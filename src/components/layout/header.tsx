import { Search, Send } from "lucide-react"
import Link from "next/link"

export const Header = () => {

  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-white/80 backdrop-blur-md shadow-md shadow-zinc-200">
      <div className={'container mx-auto p-3 flex justify-center items-center gap-10'}>
        <Link href={'/'} className="flex items-center gap-2">
          <div className="w-10 md:w-16">
            <img src="/dogsinfos.png" alt="dogsinfos logo" className="w-full" />
          </div>
          <p className="hidden sm:block sourGummy text-3xl font-extrabold text-blue-900 uppercase">DogsInfos</p>
        </Link>
        {/* <div className="flex items-center gap-2 border border-zinc-400 py-2 px-4 rounded-full focus-within:border-blue-600">
          <Search className="text-zinc-500" />
          <input type="text" id="search" placeholder="Pesquisar uma raça" className="w-40 md:w-52 outline-none text-sm md:text-base" />
          <Send className="text-blue-900 hover:text-blue-700 cursor-pointer transition" />
        </div> */}
      </div>
    </header>
  )
}