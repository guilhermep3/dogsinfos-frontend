import { Button } from "../button"
import Image from "next/image"
import { ChevronDown, PawPrint } from "lucide-react"

export const HeroSection = () => {

  return (
    <section id="hero" className="h-screen sm:h-full md:h-screen bg-zinc-100 pt-12 md:pt-0">
      <div className="containerStyle flex flex-col gap-6 md:flex-row h-full pb-0 md:pb-0 overflow-hidden">
        <div className="flex-1 flex flex-col justify-center gap-8 text-center md:text-start">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900">
            Seja bem-vindo(a) á <br /> <span className="textl-4xl md:text-6xl font-extrabold">DOGSINFOS!</span>
          </h1>
          <p className="text-black md:w-4/5 text-sm md:text-base">Descubra informações valiosas sobre nossos fiéis companheiros e dedicados guardiões aqui na <span>DogsInfos</span>.
            Descubra diferentes raças e o comportamentos de cada um deles.
          </p>
          <Button label="Ver mais"
            icon={<ChevronDown />}
            className="mx-auto md:mx-0"
            onClick="#dogs"
          />
        </div>
        <div className="relative md:flex-1 flex items-end">
          <PawPrint className="absolute text-2xl md:text-3xl text-blue-900 top-10 left-12 md:top-28 md:left-14" />
          <div className="absolute -bottom-4 bg-blue-900 left-1/2 -translate-x-1/2 w-4/5 h-4/5 max-w-[480px] max-h-[360px] lg:max-h-[480px] rounded-[64px] rotate-12"></div>
          <div className="absolute -bottom-10 bg-[var(--caramel)] left-1/2 -translate-x-1/2 w-4/5 h-4/5 max-w-[520px] max-h-[400px] lg:max-h-[520px] rounded-4xl rotate-[30deg]"></div>
          <div className="w-10/12 md:w-full z-[1]">
            <Image src={'/hero-image.png'} alt="informações sobre cachorros"
              className="w-full"
              width={600} height={600}
            />
          </div>
        </div>
      </div>
    </section>
  )
}