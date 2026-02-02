import { Linkedin } from "lucide-react"
import Link from "next/link"

export const Footer = () => {

  return (
    <footer className="border-t border-blue-500 bg-zinc-100">
      <div className="containerStyle py-6">
        <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between">
          <p className="text-sm text-zinc-700">
            © {new Date().getFullYear()} Todos os direitos reservados
          </p>
          <p className="text-sm text-zinc-700">
            Desenvolvido por{" "}
            <a href="https://github.com/guilhermep3" target="_blank"
              className="font-medium  transition-colors hover:text-blue-900"
            >
              Guilherme Pereira
            </a>
          </p>
          <Link href="https://www.linkedin.com/in/guilherme-pereira3/" target="_blank"
            className="rounded-full p-2 text-blue-600 transition-all hover:bg-blue-200"
          >
            <Linkedin size={20} />
          </Link>
        </div>
      </div>
    </footer>
  )
}
