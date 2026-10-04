export interface DogType {
  id: number;
  slug: string;
  breed: string;
  image: string;
  size: 'Pequeno' | 'Médio' | 'Grande';
  countryOrigin: string;
  colors: string[];
  lifeExpectancy: { min: number; max: number };
  adultWeightKg: {
    male: { min: number; max: number };
    female: { min: number; max: number }
  };
  classification: string[];
  description: string;
};
