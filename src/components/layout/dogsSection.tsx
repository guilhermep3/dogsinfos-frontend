"use client"
import { AsideDogs } from "./asideDogs"
import { useState } from "react"
import { MainDogs } from "./mainDogs"
import { Loading } from "../loading"
import { useDogs } from "@/api/useDogs"

export const DogsSection = () => {
  const [selectedSize, setSelectedSize] = useState<string[]>([]);
  const [selectedClassification, setSelectedClassification] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string[]>([]);
  const [filters, setFilters] = useState({
    breed: [''], color: [''], country: [''],
    size: [''], page: 1, limit: 20,
  });
  const { data, isLoading } = useDogs(filters);
  console.log("data", data);

  return (
    <section id="dogs">
      {isLoading || !data ? (
        <Loading />
      ) : (
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
              onNext={() =>
                setFilters(prev => ({ ...prev, page: Math.min(prev.page + 1, data.totalPages) }))
              }
              onPrev={() =>
                setFilters(prev => ({ ...prev, page: Math.max(prev.page - 1, 1) }))
              }
            />
          </div>
        </div>
      )}
    </section>
  )
}