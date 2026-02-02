import { Linkedin } from "lucide-react"
import Link from "next/link"

export const Footer = () => {

  return (
    <footer className="bg-gray-300">
      <div className="containerStyle">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <p className="text-sm text-zinc-800">&copy; Copyright</p>
          <p className="text-sm text-zinc-800">Desenvolvido por <a href="https://github.com/guilhermep3" target="_blank" className="underline">Guilherme Pereira</a>
          </p>
          <Link href={'https://www.linkedin.com/in/guilherme-pereira3/'} target="_blank">
            <Linkedin size="lg" className="text-blue-600" />
          </Link>
        </div>
      </div>
    </footer>
  )
}