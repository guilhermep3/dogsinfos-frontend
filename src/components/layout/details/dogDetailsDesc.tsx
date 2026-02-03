import { GrayBg } from "@/components/svg/grayBg";
import { DogType } from "@/types/dogType";
import { FileText, Palette } from "lucide-react";

type props = {
  dogData: DogType;
}

export const DogDetailsDesc = ({ dogData }: props) => {

  return (
    <div className="w-full h-fit relative rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-slate-50 to-slate-100">
      <GrayBg />
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-slate-200/30 z-0"></div>
      <div className="flex flex-col lg:flex-row gap-0 relative z-10">
        <div className="flex-1 p-8 md:p-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-800">Descrição</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mt-1"></div>
              </div>
            </div>
            <div className="bg-white backdrop-blur-sm p-6 rounded-2xl border shadow-sm">
              <p className="text-slate-800 leading-relaxed text-base md:text-lg">
                {dogData.description}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center px-8 lg:px-0">
          <div className="w-full h-px lg:w-px lg:h-full bg-gradient-to-r lg:bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
        </div>
        <div className="flex-1 p-8 md:p-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl shadow-lg">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-800">Cores</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mt-1"></div>
              </div>
            </div>
            <div className="bg-white backdrop-blur-sm p-6 rounded-2xl border shadow-sm">
              <div className="flex flex-wrap gap-3">
                {dogData.colors?.map((color, index) => (
                  <span key={index}
                    className="inline-flex items-center px-4 py-2.5 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl text-slate-700 font-medium border shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200"
                  >
                    <span className="w-3 h-3 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 mr-2"></span>
                    {color}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}