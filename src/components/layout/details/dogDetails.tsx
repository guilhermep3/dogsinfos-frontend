import { DogType } from "@/types/dogType"
import { DogDetailsTop } from "./dogDetailsTop";
import { DogDetailsDesc } from "./dogDetailsDesc";
import { SimilarDogs } from "./similarDogs";

type props = {
  data: DogType;
}
export const DogDetails = ({ data }: props) => {

  return (
    <main className="pt-4 flex flex-col gap-4">
      <DogDetailsTop dogData={data} />
      <DogDetailsDesc dogData={data} />
      <SimilarDogs currentDog={data} />
    </main>
  )
}