import { DogType } from "@/types/dogType";

export function getSimilarDogs(
  selected: DogType,
  dogs: DogType[],
  limit: number = 4
) {
  const sameSizeDogs = dogs.filter(
    (dog) => dog.size === selected.size && dog.id !== selected.id
  )
  return sameSizeDogs.slice(0, limit);
}