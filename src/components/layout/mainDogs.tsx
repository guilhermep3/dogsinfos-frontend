import { DogType } from "@/types/dogType";
import { MainDogsTop } from "./mainDogsTop";
import { DogCard } from "../dogCard";
import { useState } from "react";

type props = {
  dogsData: DogType[];
  selectedSize: string[];
  selectedClassification: string[];
  selectedColor: string[];
  selectedCountry: string[];
}

export const MainDogs = ({ dogsData, selectedSize, selectedClassification, selectedColor, selectedCountry }: props) => {
  const [sortBy, setSortBy] = useState('');

  const filteredDogs = dogsData.filter(dog => {
    const sizeMatch = selectedSize.length === 0 || selectedSize.includes(dog.size);
    const colorMath = selectedClassification.length === 0 || dog.classification.some(c => selectedClassification.includes(c));
    const colorMatch = selectedColor.length === 0 || dog.colors.some(c => selectedColor.includes(c));
    const countryMatch = selectedCountry.length === 0 || selectedCountry.includes(dog.countryOrigin);
    return sizeMatch && colorMath && colorMatch && countryMatch;
  });

  const sortedDogs = [...filteredDogs].sort((a, b) => {
    if(sortBy === 'id'){
      return a.id - b.id;
    } else if (sortBy === 'breed') {
      return a.breed.localeCompare(b.breed);
    } else if (sortBy === 'country') {
      return a.countryOrigin.localeCompare(b.countryOrigin);
    }
    return 0;
  });

  return (
    <div className="flex flex-col gap-6 w-full p-2 sm:p-4">
      <MainDogsTop setSortBy={setSortBy} />
      {sortedDogs.length > 0
        ?
        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
          {sortedDogs.map(i => (
            <DogCard key={i.id} dogData={i} />
          ))}
        </main>
        :
        <div className="text-center text-zinc-600">Nenhum dog foi encontrado nessas condições</div>
      }
    </div>
  );
};
