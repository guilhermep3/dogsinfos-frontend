import { BlueBg } from "../../svg/blueBg"
import { DogType } from "@/types/dogType"
import Image from "next/image";
import { ArrowUpNarrowWide, Cake, Weight, MapPin } from "lucide-react";
import { countryToCode } from "@/utils/countryToCode";
import flags from "emoji-flags";

type props = {
  dogData: DogType;
}

const coatMap: Record<number, string> = {
  1: "Baixa",
  2: "Média",
  3: "Alta"
};

export const DogDetailsTop = ({ dogData }: props) => {

  const code = countryToCode[dogData.countryOrigin];
  const flag = (flags as unknown as Record<string, typeof flags.AD>)[code]?.emoji;

  const image_url = `${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_URL}${dogData.image}`;

  function getCoat(value: number): string {
    return coatMap[value] || "Desconhecida";
  }

  function getCoatColor(value: number): string {
    switch (value) {
      case 1:
        return "#34D399";
      case 2:
        return "#FBBF24";
      case 3:
        return "#EF4444";
      default:
        return "#9CA3AF";
    }
  }

  return (
    <div className="w-full h-fit relative flex justify-between flex-col lg:flex-row rounded-3xl overflow-hidden shadow-2xl">
      <BlueBg />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/85 to-blue-900/95 z-0"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="flex justify-between flex-col lg:flex-row w-full relative z-10">
        <div className="text-white p-6 md:p-8 lg:p-10 flex flex-col gap-6 justify-center">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full w-fit">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span className="text-xs md:text-sm font-medium">{dogData.countryOrigin}</span>
              {flag && <span className="text-lg md:text-xl">{flag}</span>}
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              {dogData.breed}
            </h1>
            <div className="w-24 h-1 md:h-1.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
          </div>
          <div className="flex flex-wrap gap-2">
            {dogData.classification?.map((cat, index) => (
              <span key={index}
                className="px-3 md:px-4 py-1.5 md:py-2 bg-white/15 backdrop-blur-md rounded-full text-xs md:text-sm
                  font-medium border border-white/20 hover:bg-white/25 transition-colors"
              >
                {cat}
              </span>
            ))}
          </div>
          <div className="relative block lg:hidden bg-white/10 backdrop-blur-sm p-2 rounded-3xl border border-white/20">
            <Image src={image_url} alt={dogData.breed ?? 'imagem do cachorro'}
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
              width={500} height={400}
              priority
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="card-white-blur">
              <div className="flex items-center gap-3 mb-4 md:mb-3">
                <div className="p-2 bg-blue-500/30 rounded-lg">
                  <ArrowUpNarrowWide className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <p className="text-xs md:text-sm text-white font-bold uppercase tracking-wide">Tamanho</p>
              </div>
              <p className="text-base md:text-lg">{dogData.size}</p>
            </div>
            <div className="card-white-blur">
              <div className="flex items-center gap-3 mb-4 md:mb-3">
                <div className="p-2 bg-amber-500/30 rounded-lg">
                  <Weight className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <p className="text-xs md:text-sm text-white font-bold uppercase tracking-wide">Peso</p>
              </div>
              <p className="text-base md:text-lg">
                ♂️ {dogData.adultWeightKg.male.min} - {dogData.adultWeightKg.male.max} kg
              </p>
              <p className="text-base md:text-lg">
                ♀️ {dogData.adultWeightKg.female.min} - {dogData.adultWeightKg.female.max} kg
              </p>
            </div>
            <div className="card-white-blur">
              <div className="flex items-center gap-3 mb-4 md:mb-3">
                <div className="p-2 bg-green-500/30 rounded-lg">
                  <Cake className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <p className="text-xs md:text-sm text-white font-bold uppercase tracking-wide">Expectativa</p>
              </div>
              <p className="text-base md:text-lg">
                {dogData.lifeExpectancy.min} - {dogData.lifeExpectancy.max} anos
              </p>
            </div>
          </div>
          <div>
            <div className="card-white-blur">
              <div className="flex items-center gap-3 mb-4 md:mb-3">
                <div className="p-2 bg-blue-500/30 rounded-lg">
                  <ArrowUpNarrowWide className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <p className="text-xs md:text-sm text-white font-bold uppercase tracking-wide">Pelugem</p>
              </div>
              <div className="flex gap-1 flex-col flex-wrap">
                <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                  <p className="text-xs md:text-sm font-semibold">Densidade:</p>
                  <div className="flex gap-1">
                    <div className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: getCoatColor(dogData.coat.density) }}>

                    </div>
                    <p className="text-xs md:text-sm">{getCoat(dogData.coat.density)}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                  <p className="text-xs md:text-sm font-semibold">Comprimento:</p>
                  <div className="flex gap-1">
                    <div className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: getCoatColor(dogData.coat.length) }}>
                    </div>
                    <p className="text-xs md:text-sm">{getCoat(dogData.coat.length)}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                  <p className="text-xs md:text-sm font-semibold">Queda de pelos:</p>
                  <div className="flex gap-1">
                    <div className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: getCoatColor(dogData.coat.shedding) }}>
                    </div>
                    <p className="text-xs md:text-sm">{getCoat(dogData.coat.shedding)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 lg:p-8 mx-auto flex items-center justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-blue-500/20
              rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500">
            </div>
            <div className="relative hidden lg:block bg-white/10 backdrop-blur-sm p-2 rounded-3xl
              border border-white/20"
            >
              <Image src={image_url} alt={dogData.breed ?? 'imagem do cachorro'}
                className="object-cover rounded-2xl shadow-2xl"
                width={600} height={500}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}