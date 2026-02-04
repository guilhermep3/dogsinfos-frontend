"use client"
import { DogDetails } from "@/components/layout/details/dogDetails";
import { Header } from "@/components/layout/header";
import { Loading } from "@/components/loading";
import { useDog } from "@/hooks/useDog";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const { id } = useParams();
  const { data } = useDog(Number(id));

  return (
    <div className="bg-zinc-100">
      <Header />
      <div className="containerStyle">
        <div className="flex gap-3 pt-14 text-sm text-blue-900">
          <Link href={'/'} className="hover:underline">/Início</Link>
          <Link href={`/${id}`} className="hover:underline">/{data?.breed || 'Cachorro'}</Link>
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