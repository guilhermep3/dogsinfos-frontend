import { useQuery } from "@tanstack/react-query";
import { DogType } from "@/types/dogType";

export function useDog(slug: string) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL!;

  return useQuery<DogType, Error>({
    queryKey: ['dog', slug],
    queryFn: async () => {
      const res = await fetch(`${API_URL}/dogs/${slug}`);

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      return res.json();
    }
  });
}
