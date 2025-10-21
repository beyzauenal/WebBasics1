export class Engine {
  constructor(
    private manufacturer: string,
    private horsepower: number,
    private fuelType: string
  ) {}

  getManufacturer(): string {
    return this.manufacturer;
  }

  getHorsePower(): number {
    return this.horsepower;
  }

  getFuelType(): string {
    return this.fuelType;
  }
}


