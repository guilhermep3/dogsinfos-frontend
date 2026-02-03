import { BlueBg } from "../../svg/blueBg"
import { DogType } from "@/types/dogType"
import Image from "next/image";
import { ArrowUpNarrowWide, Cake, Weight, MapPin } from "lucide-react";
import { countryToCode } from "@/utils/countryToCode";
import flags from "emoji-flags";

type props = {
  dogData: DogType;
}

export const DogDetailsTop = ({ dogData }: props) => {

  const code = countryToCode[dogData.countryOrigin];
  const flag = (flags as unknown as Record<string, typeof flags.AD>)[code]?.emoji;

  return (
    <div className="w-full h-fit md:h-[480px] relative flex justify-between flex-col md:flex-row rounded-3xl overflow-hidden shadow-2xl">
      <BlueBg />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/85 to-blue-900/95 z-0"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="flex justify-between flex-col md:flex-row w-full relative z-10">
        <div className="text-white p-8 md:p-12 flex flex-col gap-6 md:w-1/2 justify-center">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full w-fit">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium">{dogData.countryOrigin}</span>
              {flag && <span className="text-xl">{flag}</span>}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {dogData.breed}
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
          </div>
          <div className="flex flex-wrap gap-2">
            {dogData.classification?.map((cat, index) => (
              <span key={index}
                className="px-4 py-2 bg-white/15 backdrop-blur-md rounded-full text-sm font-medium border border-white/20 hover:bg-white/25 transition-colors"
              >
                {cat}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-blue-500/30 rounded-lg">
                  <ArrowUpNarrowWide className="w-5 h-5" />
                </div>
                <p className="text-xs text-white font-medium uppercase tracking-wide">Tamanho</p>
              </div>
              <p className="text-xl font-bold">{dogData.size}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-amber-500/30 rounded-lg">
                  <Weight className="w-5 h-5" />
                </div>
                <p className="text-xs text-white font-medium uppercase tracking-wide">Peso</p>
              </div>
              <p className="text-xl font-bold">{dogData.adultWeightKg}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-green-500/30 rounded-lg">
                  <Cake className="w-5 h-5" />
                </div>
                <p className="text-xs text-white font-medium uppercase tracking-wide">Expectativa</p>
              </div>
              <p className="text-xl font-bold">{dogData.lifeExpectancy}</p>
            </div>
          </div>
        </div>
        <div className="p-6 md:p-8 md:w-1/2 flex items-center justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-blue-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            <div className="relative bg-white/10 backdrop-blur-sm p-2 rounded-3xl border border-white/20">
              <Image src={`/dogs/${dogData.image}`} alt={dogData.breed ?? 'imagem do cachorro'}
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
                width={500} height={400}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}