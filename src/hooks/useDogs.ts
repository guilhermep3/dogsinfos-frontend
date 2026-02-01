import { DogType } from "@/types/dogType";
import { useInfiniteQuery } from "@tanstack/react-query";

export type DogsResponse = {
  dogs: DogType[];
  page: number;
  totalPages: number;
};

export function useDogs() {
  return useInfiniteQuery<
    DogsResponse, Error, { pageParams: number[], pages: DogsResponse[] }, string[], number
  >({
    queryKey: ['dogs'],
    queryFn: async ({ pageParam }: { pageParam: number }) => {
      const API_URL = process.env.NEXT_PUBLIC_API_URL!;
      const res = await fetch(`${API_URL}/dogs?page=${pageParam}&limit=20`);

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json() as DogsResponse;
      console.log('Fetched data:', data);
      return data;
    },
    getNextPageParam: (lastPage: DogsResponse) => {
      if (lastPage.page < lastPage.totalPages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
    getPreviousPageParam: (firstPage: DogsResponse) => {
      if (firstPage.page > 1) {
        return firstPage.page - 1;
      }
      return undefined;
    },
    initialPageParam: 1,
  });
}
