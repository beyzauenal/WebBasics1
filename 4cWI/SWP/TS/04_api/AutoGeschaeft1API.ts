import { Car, CarAPI } from "./CarAPI";

export class AutoGeschaeft1API implements CarAPI {
  private cars: Car[] = [
    { brand: "VW", model: "Golf", year: 2020 },
    { brand: "Audi", model: "A3", year: 2021 },
    { brand: "Skoda", model: "Octavia", year: 2019 }
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
