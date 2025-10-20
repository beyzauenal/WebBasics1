interface Person{
    id: number;
    firstname : string;
    lastname:string;
    age:number;
    email: string;
    isMarried: boolean;
    address:{
        street: string;
        city: string;
        postalCode: string;
        country: string;
    }
    phoneNumbers: {
        type: string;
        number: string;
    }[];
    hobbies: string;
}
 
const person:Person = {
    id: 1,
    firstname: "Hans",
    lastname: "Nüller",
    age: 60,
    email: "hansmüller60",
    isMarried: true,
    address: {
        street: "",
        city: "",
        postalCode: "",
        country: ""
    },
    phoneNumbers: [],
    hobbies: ""
}
 
function printName(person: Person){
    console.log(person.firstname);
}
 
printName(person);