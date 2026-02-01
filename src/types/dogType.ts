export interface DogType {
  id: number;
  breed: string;
  image: string;
  size: 'Pequeno' | 'Médio' | 'Grande';
  countryOrigin: string;
  colors: string[];
  lifeExpectancy: string;
  adultWeightKg: string;
  classification: string[];
  description: string;
};
