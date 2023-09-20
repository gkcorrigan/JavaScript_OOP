console.log("Hello World!\n==========\n");
class Person {
    name
    pets
    residence
    hobbies
 
    
    constructor(name, pets, residence, hobbies){
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }
    addHobby(hobby){
        this.hobbies.push(hobby);
    }
    removeHobby(hobbyToRemove){
        for (let i = 0; i < this.hobbies.length; i++){
            if (this.hobbies[i] == hobbyToRemove) {
                this.hobbies.splice(i, 1);
                break;
            }
        }
    }
    
    greeting() {
        console.log("Good morning weary traveler!");
}
}
const person = new Person("Sirius Black", ["cat"], "Grimmold Place", ["sulks", "advises", "inspires"]);

console.log(person);
person.removeHobby("inspires");
person.removeHobby("inspires");
person.addHobby("kayaking");
console.log("EXERCISE 1:\n==========\n");

class Coder extends Person {
    
constructor(name, pets, residence, hobbies) {
super(name, pets, residence, hobbies);

this.occupation = "Full Stack Web Developer";    
}
greeting(){
    console.log ("Hello Gamer");
}
}

const coder = new Coder("Wade", ["dog"], "162 Fake Street", ["gaming", "hacking", "surfing"]);
console.log(coder);
coder.greeting();
console.log("EXERCISE 2:\n==========\n");


const personExample = new Person("Fred");
const coderExample = new Coder("Hacker John Doe");

console.log(personExample);
console.log(coderExample);





console.log("EXERCISE 3:\n==========\n");


class Calculator {

constructor(){  
this.result= 0;
}

add(a,b){
    if(b == undefined){
        this.result = this.result + a;
    }
    else {
this.result = a + b;
 return this.result;
}
}
subtract(a,b){
    if(b == undefined){
    this.result = this.result - a;
    }
    else {
this.result = a - b;
 return this.result;
}
}
multiply(a,b){
    if(b == undefined){
        this.result = this.result * a;
    }
    else {
this.result = a * b;
 return this.result;
}
}

divide(a,b){
    if(b == undefined){
        this.result = this.result / a;
    }
    else {
this.result = a / b;

return this.result;
}
}

displayResult() {
    console.log(this.result)
}

}



const calc = new Calculator();
calc.add(5,7)
calc.displayResult();

calc.subtract(3,5)
calc.displayResult();

calc.multiply(2,7)
calc.displayResult();

calc.divide(6,5)
calc.displayResult();


calc.add(.8);
calc.displayResult();

calc.subtract(1);
calc.displayResult();

calc.multiply(3);
calc.displayResult();

calc.divide(5);
calc.displayResult();
console.log("EXERCISE 4:\n==========\n");