import { Car } from "./car";
import { Engine } from "./engine";
import { Owner } from "./owner";

const engine = new Engine("Mercedes", 200, "Benzin");
const owner = new Owner("Beyza", "Ünal", 18);
const car = new Car("C-Klasse", "Mercedes", engine, owner);

console.log("Farbe:", car.getColor());
console.log("Marke:", car.getMake());
console.log("Leistung (PS):", car.getHorsePower());

// Zugriff auf Daten über Engine/Owner
console.log("Motor-Hersteller:", engine.getManufacturer());
console.log("Kraftstoff:", engine.getFuelType());
console.log("Besitzer:", owner.getFirstName(), owner.getLastName(), "-", owner.getAge());

