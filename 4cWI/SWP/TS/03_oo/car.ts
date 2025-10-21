import { Engine } from "./engine";
import { Owner } from "./owner";

export class Car {
  private color: string = "white";

  constructor(
    private model: string,
    private make: string,
    private engine: Engine,
    private owner: Owner
  ) {}

  getColor(): string {
    return this.color;
  }

  getMake(): string {
    return this.make;
  }

  getHorsePower(): number {
    return this.engine.getHorsePower();
  }
}

