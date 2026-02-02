import { DogType } from "@/types/dogType";
import { Card, CardContent, CardTitle } from "./ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { PawPrint, ArrowRight } from "lucide-react";
import Link from "next/link";
import { countryToCode } from "@/utils/countryToCode";
import flags from "emoji-flags";

type props = {
  dogData: DogType;
};

export const DogCard = ({ dogData }: props) => {
  const router = useRouter();

  const code = countryToCode[dogData.countryOrigin];
  const flag = (flags as unknown as Record<string, typeof flags.AD>)[code]?.emoji;

  const pawSize = () => {
    if (dogData.size === 'Pequeno') return 'P';
    if (dogData.size === 'Médio') return 'M';
    if (dogData.size === 'Grande') return 'G';
  }

  return (
    <Card
      className="group overflow-hidden p-0! border shadow-md hover:shadow-2xl hover:shadow-zinc-400 cursor-pointer
      transition-all duration-300 hover:scale-105 bg-white rounded-xl"
      onClick={() => router.push(`/${dogData.id}`)}
    >
      <CardContent className="p-0 flex flex-col">
        <div className="relative w-full h-56 sm:h-48 md:h-40 2xl:h-52 overflow-hidden">
          <Image src={`/dogs/${dogData.image}`} alt={'imagem do cachorro ' + dogData.breed}
            width={400} height={400}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-4 flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <CardTitle className="text-lg font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
              {dogData.breed}
            </CardTitle>
            <div className="flex items-center justify-between gap-5">
              <div className="flex items-center gap-2 text-slate-600">
                {flag && <span className="text-lg">{flag}</span>}
                <p className="text-sm font-medium">{dogData.countryOrigin}</p>
              </div>
              <div className="relative w-8 h-8 flex items-center justify-center">
                <PawPrint className="text-amber-400 fill-amber-400 w-7 h-7" />
                <span className="absolute text-base font-extrabold text-blue-900">{pawSize()}</span>
              </div>
            </div>
          </div>
          <Link href={`/${dogData.id}`}
            className="flex gap-2 items-center text-blue-600 hover:text-blue-700 font-medium group/link mt-2"
          >
            <span className="text-sm">Ver detalhes</span>
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};