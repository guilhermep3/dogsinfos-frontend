import { useDogs } from "@/api/useDogs";
import { DogCard } from "@/components/dogCard";
import { getSimilarDogs } from "@/utils/getSimilarDogs";
import type { DogType } from "@/types/dogType";
import { useEffect, useState } from "react";

type Props = {
  currentDog: DogType;
};

export const SimilarDogs = ({ currentDog }: Props) => {
  const { data, isLoading, isError } = useDogs({
    classification: [],
    color: [],
    country: [],
    size: [],
    page: 1,
    limit: 20,
  });
  const [similarDogs, setSimilarDogs] = useState<DogType[]>([]);

  useEffect(() => {
    if (data) {
      const similar = getSimilarDogs(currentDog, data.dogs);
      setSimilarDogs(similar);
    }
  }, [currentDog, data]);

  if (isError) {
    return <p>Erro ao carregar raças semelhantes.</p>;
  }

  return (
    <section className="w-full rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100 shadow-xl">
      <div className="p-8 md:p-10">
        <h2 className="mb-5 text-xl font-bold text-slate-800 md:text-2xl">
          Raças semelhantes
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          { !isLoading &&
            similarDogs.map((dog) => (
              <DogCard key={dog.id} dogData={dog} />
            ))
          }
        </div>
      </div>
    </section>
  );
};