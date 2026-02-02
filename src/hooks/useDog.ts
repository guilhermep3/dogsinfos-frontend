import { useQuery } from "@tanstack/react-query";
import { DogType } from "@/types/dogType";

export function useDog(id: number) {
  return useQuery<DogType, Error>({
    queryKey: ['dog'],
    queryFn: async () => {
      const API_URL = process.env.NEXT_PUBLIC_API_URL!;
      const res = await fetch(`${API_URL}/dogs/${id}`);

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      return res.json();
    }
  });
}
