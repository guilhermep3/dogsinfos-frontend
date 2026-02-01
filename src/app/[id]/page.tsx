"use client"
import { DogDetails } from "@/components/layout/details/dogDetails";
import { Header } from "@/components/layout/header";
import { Loading } from "@/components/loading";
import { LogoPulsing } from "@/components/logoPulsing";
import { DogType } from "@/types/dogType";
import { containerStyle } from "@/utils/styles";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const { id } = useParams();
  const [dogData, setDogData] = useState<DogType | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_LINK}${id}`)
      .then(res => res.json())
      .then(data => setDogData(data))
      .catch(err => {
        console.log("Erro no fetch com id: ", err)
      });
  }, [])

  return (
    <div className="bg-zinc-100">
      <Header />
      <div className={containerStyle}>
        <div className="flex gap-3 pt-14 text-sm text-blue-900">
          <Link href={'/'} className="hover:underline">/Início</Link>
          <Link href={`/${id}`} className="hover:underline">/{dogData?.breed || 'Cachorro'}</Link>
        </div>
        {!dogData
          ? <Loading/>
          : <DogDetails dogData={dogData!} />
        }
      </div>
    </div>
  )
}

export default Page;