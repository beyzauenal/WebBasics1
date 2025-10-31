import { Car, CarAPI } from "./CarAPI";

export class AutoGeschaeft2API implements CarAPI {
  private cars: Car[] = [
    { brand: "BMW", model: "320i", year: 2018 },
    { brand: "Tesla", model: "Model 3", year: 2022 },
    { brand: "Mercedes", model: "C200", year: 2019 }
  ];

  getAllCars(): Car[] {
    return this.cars;
  }

  findCars(searchText: string): Car[] {
    const text = searchText.toLowerCase();
    return this.cars.filter(
      c => c.brand.toLowerCase().includes(text) || c.model.toLowerCase().includes(text)
    );
  }
}
