 interface Car {
    brand: string;
    model: string;
    price: number;
    year: number;
}
 
 
// Sample: mithilfe chatgpt
const cars: Car[] = [
    { brand: "Toyota", model: "Corolla", price: 18000, year: 2020 },
    { brand: "BMW", model: "3 Series", price: 35000, year: 2022 },
    { brand: "Ford", model: "Focus", price: 22000, year: 2021 },
    { brand: "Tesla", model: "Model 3", price: 45000, year: 2023 }
];
 
 
 
//preis
function getTotalPrice(cars: Car[]): number {
    let total = 0;
    cars.forEach(car => {
        total += car.price;
    });
    return total;
}
 
 
 
//Liste der autos
function printCars(cars: Car[]): void {
    cars.forEach(car => {
        console.log(`${car.brand} ${car.model} (${car.year}) - $${car.price}`);
    });
}
 
 
 
//Filter mit forEach
function getExpensiveCars(cars: Car[], minPrice: number): Car[] {
    const result: Car[] = [];
    cars.forEach(car => {
        if (car.price > minPrice) {
            result.push(car);
        }
    });
    return result;
}
 
 
//Gesamter Preis
function getTotalPriceReduce(cars: Car[]): number {
    return cars.reduce((sum, car) => sum + car.price, 0);
}