import { useQuery } from "@tanstack/react-query";
import { DogType } from "@/types/dogType";

export type QueryFilters = {
  classification?: string[];
  color?: string[];
  country?: string[];
  size?: string[];
  page: number;
  limit?: number;
};


export type DogsResponse = {
  dogs: DogType[];
  page: number;
  totalPages: number;
  total: number;
  availableOptions?: {
    sizes: string[];
    classifications: string[];
    colors: string[];
    countries: string[];
    allSizes: string[];
    allClassifications: string[];
    allColors: string[];
    allCountries: string[];
  };
};

export function useDogs(filters: QueryFilters) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL!;

  return useQuery<DogsResponse, Error>({
    queryKey: ['dogs', filters],
    queryFn: async () => {
      const params = new URLSearchParams({
        page: filters.page.toString(),
        limit: (filters.limit || 20).toString(),
      });

      if (filters.classification && filters.classification.length > 0 && filters.classification[0] !== '') {
        params.append('classification', filters.classification.join(','));
      }
      if (filters.color && filters.color.length > 0 && filters.color[0] !== '') {
        params.append('color', filters.color.join(','));
      }
      if (filters.country && filters.country.length > 0 && filters.country[0] !== '') {
        params.append('country', filters.country.join(','));
      }
      if (filters.size && filters.size.length > 0 && filters.size[0] !== '') {
        params.append('size', filters.size.join(','));
      }

      const res = await fetch(`${API_URL}/dogs/home?${params.toString()}`);

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      return res.json();
    },
    placeholderData: (prev) => prev,
  });
}