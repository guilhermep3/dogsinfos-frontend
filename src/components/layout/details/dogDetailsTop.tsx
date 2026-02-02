import { BlueBg } from "../../svg/blueBg"
import { DogType } from "@/types/dogType"
import Image from "next/image";
import { ArrowUpNarrowWide, Cake, Weight } from "lucide-react";
import { countryToCode } from "@/utils/countryToCode";
import flags from "emoji-flags";

type props = {
  dogData: DogType;
}
export const DogDetailsTop = ({ dogData }: props) => {

  const code = countryToCode[dogData.countryOrigin];
  // const flag = (flags as unknown as Record<string, typeof flags.AD>)[code].emoji;

  return (
    <div className="w-full h-fit md:h-[400px] relative flex justify-between flex-col md:flex-row z-[1]">
      <BlueBg />
      <div className="flex justify-between flex-col md:flex-row w-full">
        <div className="text-white p-6 md:p-8 flex flex-col gap-5">
          <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
            {/* {dogData.breed} <span title={dogData.countryOrigin}>{flag}</span> */}
          </h1>
          <p>{dogData.classification?.join(' / ')}</p>
          <div className="flex items-end gap-2 text-xs md:text-sm">
            <ArrowUpNarrowWide />
            <p>Tamanho: <span className="font-semibold">{dogData.size}</span></p>
          </div>
          <div className="flex items-end gap-2 text-xs md:text-sm">
            <Weight />
            <p>Peso: <span className="font-semibold">{dogData.adultWeightKg}</span></p>
          </div>
          <div className="flex items-end gap-2 text-xs md:text-sm">
            <Cake />
            <p>Expectativa de vida: <span className="font-semibold">{dogData.lifeExpectancy}</span></p>
          </div>
        </div>
        <div className="p-6 md:p-8">
          <Image src={`/dogs/${dogData.image}`} alt={dogData.breed ?? 'imagem do cachorro'}
            className="w-fit h-full object-cover ml-auto rounded-lg md:rounded-2xl"
            width={500} height={360}
          />
        </div>
      </div>
    </div>
  )
}