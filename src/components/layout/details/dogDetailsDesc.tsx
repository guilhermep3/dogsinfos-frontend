import { GrayBg } from "@/components/svg/grayBg";
import { DogType } from "@/types/dogType";

type props = {
  dogData: DogType;
}
export const DogDetailsDesc = ({ dogData }: props) => {

  return (
    <div className="w-full h-fit relative bg-gray-300 rounded-2xl z-[1]">
      <GrayBg />
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-6">
        <div className="flex-1 flex flex-col gap-3 ">
          <p className="text-xl font-bold">Descrição</p>
          <p>{dogData.description}</p>
        </div>
        <div className="flex min-w-full min-h-[2px] md:w-[1px] md:min-h-full md:min-w-[2px] md:max-w-[2px] bg-zinc-400"></div>
        <div className="flex-1 flex flex-col gap-3 ">
          <p className="text-xl font-bold">Cores</p>
          <p>{dogData.colors?.join(', ')}</p>
        </div>
      </div>
    </div>
  )
}