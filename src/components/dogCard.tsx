import { DogType } from "@/types/dogType";
import { Card, CardContent, CardTitle } from "./ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { PawPrint } from "lucide-react";
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
    if (dogData.size === 'Pequeno') {
      return 'P';
    } else if (dogData.size === 'Médio') {
      return 'M';
    } else if (dogData.size === 'Grande') {
      return 'G';
    };
  }

  return (
    <Card className="p-2 shadow-md shadow-zinc-300 hover:shadow-lg cursor-pointer transition" onClick={() => router.push(`/${dogData.id}`)}>
      <CardContent className="p-0 flex flex-col gap-4">
        <div className="w-full h-56 sm:h-48 md:h-40 2xl:h-52 rounded-md overflow-hidden">
          <Image
            src={`/dogs/${dogData.image}`}
            alt={'imagem do cachorro ' + dogData.breed}
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <CardTitle>{dogData.breed}</CardTitle>
            <div className="relative">
              <PawPrint className="text-yellow-400 fill-yellow-400" />
              <span className="absolute top-1/2 left-1/2 -translate-1/2 text-base font-extrabold text-blue-950">{pawSize()}</span>
            </div>
          </div>
          <p className="text-sm my-1">
            {flag && <span className="mr-1">{flag}</span>}
            {dogData.countryOrigin}
          </p>
        </div>
      </CardContent>
      <Link href={`/${dogData.id}`} className="flex gap-2 items-center border-b border-transparent hover:border-blue-900 w-fit">
        <p className="text-xs sm:text-sm text-blue-900 cursor-pointer">Ver mais</p>
        <PawPrint className="w-4 text-blue-900" />
      </Link>
    </Card>
  );
};
