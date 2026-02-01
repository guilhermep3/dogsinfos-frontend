import { DogType } from "@/types/dogType";
import { useQuery } from "@tanstack/react-query";

export function useDogs() {
  return useQuery({
    queryKey: ['dogs'],
    queryFn: async () => {
      const API_URL = process.env.NEXT_PUBLIC_API_URL!;
      const res = await fetch(`${API_URL}/dogs?page=1&limit=40`);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      return data as DogType[];
    }
  })
}