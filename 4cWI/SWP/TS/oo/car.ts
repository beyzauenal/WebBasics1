import { Engine } from "./engine";

export class Car {
  private color: string = "red";

  constructor(
    private model: string,
    private make: string,
    private engine: Engine
  ) {}

  getHorsePower(): number {
    return this.engine.getHorsePower();
  }

  getColor(): string {
    return this.color;
  }

  getMake(): string {
    return this.make;
  }
}
