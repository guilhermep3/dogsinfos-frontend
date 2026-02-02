"use client"
import { AsideDogs } from "./asideDogs"
import { useState } from "react"
import { MainDogs } from "./mainDogs"
import { Loading } from "../loading"
import { useDogs } from "@/hooks/useDogs"

export const DogsSection = () => {
  const [selectedSize, setSelectedSize] = useState<string[]>([]);
  const [selectedClassification, setSelectedClassification] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const { data, isLoading } = useDogs(page)

  return (
    <section id="dogs">
      {!data || isLoading
        ? <Loading /> :
        <div className="containerStyle">
          <div className="flex items-start">
            <AsideDogs data={data}
              selectedSize={selectedSize} setSelectedSize={setSelectedSize}
              selectedClassification={selectedClassification} setSelectedClassification={setSelectedClassification}
              selectedColor={selectedColor} setSelectedColor={setSelectedColor}
              selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry}
            />
            <MainDogs data={data}
              selectedSize={selectedSize}
              selectedClassification={selectedClassification}
              selectedColor={selectedColor}
              selectedCountry={selectedCountry}
              onNext={() => setPage(p => Math.min(p + 1, data.totalPages))}
              onPrev={() => setPage(p => Math.max(p - 1, 1))}
            />
          </div>
        </div>
      }
    </section>
  )
}