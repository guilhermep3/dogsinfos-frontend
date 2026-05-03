"use client"
import { DogDetails } from "@/components/layout/details/dogDetails";
import { Header } from "@/components/layout/header";
import { Loading } from "@/components/loading";
import { useDog } from "@/api/useDog";
import Link from "next/link";
import { useParams } from "next/navigation";

const Page = () => {
  const { id } = useParams();
  const { data } = useDog(Number(id));

  return (
    <div className="bg-zinc-100">
      <Header />
      <div className="containerStyle">
        <div className="flex items-center gap-2 pt-14 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600 hover:underline">
            Início
          </Link>
          <span>/</span>
          <Link href={`/${id}`} className="text-gray-700 font-medium hover:text-blue-600">
            {data?.breed || 'Cachorro'}
          </Link>
        </div>
        {!data
          ? <Loading />
          : <DogDetails data={data!} />
        }
      </div>
    </div>
  )
}

export default Page;