export interface Car {
  brand: string;
  model: string;
  year: number;
}

export interface CarAPI {
  getAllCars(): Car[];
  findCars(searchText: string): Car[];
}
