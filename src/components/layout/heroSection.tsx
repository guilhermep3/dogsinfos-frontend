import { Button } from "../button"
import Image from "next/image"
import { ChevronDown, PawPrint } from "lucide-react"

export const HeroSection = () => {

  return (
    <section id="hero"
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50 pt-12 md:pt-0 relative overflow-hidden"
    >
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
      <div className="containerStyle flex flex-col gap-6 md:flex-row h-full min-h-screen pb-0 md:pb-0 relative z-10">
        <div className="flex-1 flex flex-col justify-center gap-8 text-center md:text-start">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-800 leading-tight">
              Seja bem-vindo(a) à <br />
              <span className="text-5xl md:text-7xl lg:text-8xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                DOGSINFOS!
              </span>
            </h1>
            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-amber-500 mx-auto md:mx-0 rounded-full"></div>
          </div>
          <p className="text-slate-600 md:w-4/5 text-base md:text-lg leading-relaxed">
            Descubra informações valiosas sobre nossos fiéis companheiros e dedicados guardiões aqui na <span className="font-semibold text-blue-700">DogsInfos</span>.
            Explore diferentes raças e conheça o comportamento único de cada um deles.
          </p>
          <Button label="Explorar raças"
            icon={<ChevronDown className="w-5 h-5" />}
            className="mx-auto md:mx-0 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300"
            onClick="#dogs"
          />
        </div>
        <div className="relative md:flex-1 flex items-end justify-center">
          <PawPrint className="absolute text-4xl md:text-5xl text-blue-600/30 top-10 left-12 md:top-28 md:left-14 animate-pulse" />
          <PawPrint className="absolute text-3xl text-amber-500/30 bottom-32 right-8 md:bottom-40 md:right-20 animate-pulse delay-150" />
          <div className="absolute -bottom-4 bg-gradient-to-br from-blue-700 to-blue-900 left-1/2 -translate-x-1/2 w-4/5 h-4/5 max-w-[480px] max-h-[360px] lg:max-h-[480px] rounded-[64px] rotate-12 shadow-2xl"></div>
          <div className="absolute -bottom-10 bg-gradient-to-br from-amber-400 to-amber-600 left-1/2 -translate-x-1/2 w-4/5 h-4/5 max-w-[520px] max-h-[400px] lg:max-h-[520px] rounded-[64px] rotate-[30deg] shadow-2xl"></div>

          <div className="w-10/12 md:w-full z-[1] drop-shadow-2xl">
            <Image src={'/hero-image.png'} alt="informações sobre cachorros"
              className="w-full"
              width={600} height={600}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}