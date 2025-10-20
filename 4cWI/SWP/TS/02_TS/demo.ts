 //Beispiele Array Functions
//Map
 
const number = [1, 2, 3, 4];
const verdoppelt = number.map(n => n * 2);
 
console.log(verdoppelt);
/* wird verwendet um aus jedem Element eines Arrays
ein neues Element zu erstellen */
 
 
//Filter
const gefiltert = number.filter(n => n > 2);
console.log(gefiltert);
/* wird verwendet um Elemente zu filtern*/
 
//Sort
const Sort = number.sort((a, b) => b - a);
console.log(Sort);
/* wird verwendet um Elemente eines Arrays zu sortieren*/
 
//Find
const finden = number.find(n => n === 3);
console.log(finden);
/* wird verwendet um ein bestimmtes Element zu finden*/
 
//Reduce
const sum = number.reduce((acc, n) => acc + n, 0);
console.log(sum);
/* wird verwendet um alle Elemente eines Arrays auf einen einzigen Wert zu reduzieren*/
 
//Some
const number1 = number.some(n => n > 3);
console.log(number1);
/* wird verwendet um zu überprüfen ob mindestens ein Element
eines Arrays ein bestimmtes Kriterium erfüllt*/
 
//Every
const number2 = number.every(n => n > 0);
console.log(number2);
/* wird verwendet um zu überprüfen ob alle Elemente
ein bestimmtes Kriterium erfüllen*/