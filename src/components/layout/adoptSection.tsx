import Image from "next/image"
import { BlueBg } from "../svg/blueBg"
import { Heart } from "lucide-react"

export const AdoptSection = () => {

  return (
    <section className="py-16 md:py-24">
      <div className="containerStyle w-full flex justify-center items-center">
        <div className="w-full md:w-4/5 min-h-96 relative flex justify-between items-center flex-col sm:flex-row rounded-3xl overflow-hidden shadow-2xl">
          <BlueBg />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-transparent z-0"></div>
          <div className="w-72 sm:w-fit sm:h-[90%] pl-0 sm:pl-10 relative z-10">
            <div className="relative">
              <Image src="/man-dog.png" alt="homem abraçando um cachorro"
                width={400} height={400}
                className="h-full w-fit object-cover rounded-tr-3xl sm:rounded-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent sm:hidden"></div>
            </div>
          </div>
          <div className="text-white text-center sm:text-end flex flex-col gap-4 w-full sm:max-w-[50%] pb-10 px-6 sm:pr-12 relative z-10">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-2">
                <Heart className="w-4 h-4 text-red-400 fill-red-400" />
                <span className="text-sm font-medium">Adote um amigo</span>
              </div>
              <h2 className="sourGummy text-4xl md:text-5xl font-extrabold leading-tight">
                Mais um amigo
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 ml-auto sm:mr-0 mx-auto sm:ml-auto rounded-full"></div>
              <p className="sourGummy text-2xl md:text-3xl font-bold text-amber-300">
                Milhares de memórias novas
              </p>
            </div>
            <p className="text-base text-blue-50 leading-relaxed backdrop-blur-sm bg-white/5 p-4 rounded-2xl">
              Se você quer um amigo leal e cheio de amor, adote um cachorro! Ao adotar, você oferece uma nova chance para um animal e é retribuído com amor incondicional e companhia.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}