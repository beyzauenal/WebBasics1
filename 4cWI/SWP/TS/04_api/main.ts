import { AutoGeschaeft1API } from "./AutoGeschaeft1API";
import { AutoGeschaeft2API } from "./AutoGeschaeft2API";

const api1 = new AutoGeschaeft1API();
const api2 = new AutoGeschaeft2API();

console.log("=== Autogeschäft 1 ===");
console.log("Alle Autos:", api1.getAllCars());
console.log("Suche nach 'Audi':", api1.findCars("Audi"));

console.log("\n=== Autogeschäft 2 ===");
console.log("Alle Autos:", api2.getAllCars());
console.log("Suche nach 'Tesla':", api2.findCars("Tesla"));
