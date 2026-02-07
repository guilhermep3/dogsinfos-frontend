"use client"
import { AsideDogs } from "./asideDogs"
import { useCallback, useState } from "react"
import { MainDogs } from "./mainDogs"
import { Loading } from "../loading"
import { QueryFilters, useDogs } from "@/api/useDogs"

type Filters = {
  breed: string[];
  classification: string[];
  color: string[];
  country: string[];
  size: string[];
  page: number;
  limit: number;
}

export const DogsSection = () => {
  const [filters, setFilters] = useState<QueryFilters>({
    classification: [],
    color: [],
    country: [],
    size: [],
    page: 1,
    limit: 20,
  });
  const { data, isLoading } = useDogs(filters);
  console.log("data", data);

  const updateFilter = useCallback((key: keyof Filters, value: string[]) => {
    setFilters(prev => ({
      ...prev,
      [key]: value,
      page: 1
    }));
  }, []);

  return (
    <section id="dogs">
      {isLoading || !data ? (
        <Loading />
      ) : (
        <div className="containerStyle">
          <div className="flex items-start">
            <AsideDogs
              data={data}
              selectedSize={filters.size ?? []}
              setSelectedSize={(sizes) => updateFilter('size', sizes)}
              selectedClassification={filters.classification ?? []}
              setSelectedClassification={(classifications) => updateFilter('classification', classifications)}
              selectedColor={filters.color ?? []}
              setSelectedColor={(colors) => updateFilter('color', colors)}
              selectedCountry={filters.country ?? []}
              setSelectedCountry={(countries) => updateFilter('country', countries)}
            />
            <MainDogs data={data}
              selectedSize={filters.size ?? []}
              selectedClassification={filters.classification ?? []}
              selectedColor={filters.color ?? []}
              selectedCountry={filters.country ?? []}
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