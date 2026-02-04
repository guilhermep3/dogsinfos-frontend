import { useQuery } from "@tanstack/react-query";
import { DogType } from "@/types/dogType";

export type DogsResponse = {
  dogs: DogType[];
  page: number;
  totalPages: number;
};

export function useDogs(page: number) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL!;

  return useQuery<DogsResponse, Error>({
    queryKey: ['dogs', page],
    queryFn: async () => {
      const res = await fetch(`${API_URL}/dogs?page=${page}&limit=20`);

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      return res.json();
    },
    placeholderData: (prev) => prev
  });
}
