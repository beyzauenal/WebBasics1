//Map
const number = [1, 2, 3, 4];
const verdoppelt = number.map(n => n * 2);
 
console.log(verdoppelt);
/* wird verwendet um aus jedem Element eines Arrays
ein neues Element zu erstellen */
 
 

const gefiltert = number.filter(n => n > 2);
console.log(gefiltert);
/* wird verwendet um Elemente zu filtern*/
 

const Sort = number.sort((a, b) => b - a);
console.log(Sort);
/* wird verwendet um Elemente eines Arrays zu sortieren*/
 

const finden = number.find(n => n === 3);
console.log(finden);
/* wird verwendet um ein bestimmtes Element zu finden*/
 

const sum = number.reduce((acc, n) => acc + n, 0);
console.log(sum);
/* wird verwendet um alle Elemente eines Arrays auf einen einzigen Wert zu reduzieren*/
 

const number1 = number.some(n => n > 3);
console.log(number1);
/* wird verwendet um zu überprüfen ob mindestens ein Element
eines Arrays ein bestimmtes Kriterium erfüllt*/
 

const number2 = number.every(n => n > 0);
console.log(number2);
/* wird verwendet um zu überprüfen ob alle Elemente
ein bestimmtes Kriterium erfüllen*/