"use client"
import { MainDogsTop } from "./mainDogsTop";
import { DogCard } from "../dogCard";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DogsResponse } from "@/api/useDogs";

type Props = {
  data: DogsResponse;
  selectedSize: string[];
  selectedClassification: string[];
  selectedColor: string[];
  selectedCountry: string[];
  onNext: () => void;
  onPrev: () => void;
};

export const MainDogs = ({
  data, selectedSize, selectedClassification, selectedColor, selectedCountry,
  onNext, onPrev,
}: Props) => {
  const [sortBy, setSortBy] = useState('');

  const filteredDogs = data.dogs.filter(dog => {
    const sizeMatch =
      selectedSize.length === 0 || selectedSize.includes(dog.size);

    const classificationMatch =
      selectedClassification.length === 0 ||
      dog.classification.some(c => selectedClassification.includes(c));

    const colorMatch =
      selectedColor.length === 0 ||
      dog.colors.some(c => selectedColor.includes(c));

    const countryMatch =
      selectedCountry.length === 0 ||
      selectedCountry.includes(dog.countryOrigin);

    return sizeMatch && classificationMatch && colorMatch && countryMatch;
  });

  const sortedDogs = [...filteredDogs].sort((a, b) => {
    if (sortBy === 'id') return a.id - b.id;
    if (sortBy === 'breed') return a.breed.localeCompare(b.breed);
    if (sortBy === 'country') return a.countryOrigin.localeCompare(b.countryOrigin);
    return 0;
  });

  return (
    <div className="flex flex-col gap-6 w-full p-2 sm:p-4">
      <MainDogsTop setSortBy={setSortBy} />
      {sortedDogs.length > 0 ? (
        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
          {sortedDogs.map(dog => (
            <DogCard key={dog.id} dogData={dog} />
          ))}
        </main>
      ) : (
        <div className="text-center text-zinc-600">
          Nenhum dog encontrado
        </div>
      )}
      <div className="flex justify-center gap-5">
        <button onClick={onPrev}
          disabled={data.page === 1}
          className="w-full flex justify-center p-2 bg-blue-500 disabled:opacity-40
          hover:bg-blue-700 hover:text-white rounded-sm transition-all cursor-pointer"
        >
          <ChevronLeft />
        </button>
        <button onClick={onNext}
          disabled={data.page === data.totalPages}
          className="w-full flex justify-center p-2 bg-blue-500 disabled:opacity-40
          hover:bg-blue-700 hover:text-white rounded-sm transition-all cursor-pointer"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};