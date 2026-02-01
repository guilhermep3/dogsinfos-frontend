"use client"
import { containerStyle } from "@/utils/styles"
import { AsideDogs } from "./asideDogs"
import { useEffect, useState } from "react"
import { MainDogs } from "./mainDogs"
import { Loading } from "../loading"
import { useDogs } from "@/hooks/useDogs"

export const DogsSection = () => {
  const [selectedSize, setSelectedSize] = useState<string[]>([]);
  const [selectedClassification, setSelectedClassification] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string[]>([]);
  const { data, isLoading, isError } = useDogs()

  useEffect(() => {
    if (data) {
      console.log("data", data);
    }
  }, [data])
  return (
    <section id="dogs">
      {!data || isLoading
        ? <Loading />
        :
        <div className={containerStyle}>
          <div className="flex items-start">
            <AsideDogs dogsData={data}
              selectedSize={selectedSize} setSelectedSize={setSelectedSize}
              selectedClassification={selectedClassification} setSelectedClassification={setSelectedClassification}
              selectedColor={selectedColor} setSelectedColor={setSelectedColor}
              selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry}
            />
            <MainDogs
              dogsData={data}
              selectedSize={selectedSize}
              selectedClassification={selectedClassification}
              selectedColor={selectedColor}
              selectedCountry={selectedCountry}
            />
          </div>
        </div>
      }
    </section>
  )
}