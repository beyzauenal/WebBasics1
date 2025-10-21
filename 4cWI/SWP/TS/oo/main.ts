import { Car } from "./car";
import { Engine } from "./engine";

const car: Car = new Car("13", "bmw", new Engine(100));

console.log(car.getColor());
console.log(car.getMake());
