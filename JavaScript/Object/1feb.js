//this keyword
//this - refers current object

console.log("window : ",window);
console.log("this : ",this);
console.log("\n");

let obj = {
    firstName : "John",
    lastName : "Doe",
    age : 32,
    printAge : function() {
        console.log("age : ", this.age);
    }
}

console.log("firstName :",obj.firstName);
console.log("lastName :",obj.lastName);
obj.printAge();
console.log("\n");

function greet (person1, person2) {
    console.log(`Hello ${person1} and ${person2} , my name is ${this.firstName} ${this.lastName}`);
}

greet('Athin', "Athul"); //passing person1 and person2
greet.call(obj,'Athin', "Athul"); //passing obj -> .call establish relation between obj and greet function
greet.apply(obj, ['Athin', "Athul"]); //parameters should be passed as arrays
let result = greet.bind(obj,'Athin', "Athul");  //.bind returns a function, here it is stored in a variable 'result'
console.log("result :",result);
result(); //calling the function



//02-02-2024
//Constructor function
function Person(name,age,mark) {
    this.name = name;
    this.age = age;
    this.mark = mark;
    this.printAge = function( ) {
        console.log(`I am ${this.name} and my age is ${this.age}`);
    }
}

let person1 = new Person("Jack",25,95);  //when new is given, it refers to thee recently created object.
console.log("Person1 :",person1);
person1.printAge();

let person2 = new Person("Rose",23,95);
console.log("Person2 :",person2);
person2.printAge();

//Prototype
Person.prototype.printMark = function () {
    console.log(`I am ${this.name} and my mark is ${this.mark}`)
}
person1.printMark();
person2.printMark();


//Classes
class Persons {
    name;
    age;
    mark;

    constructor(name,age,mark) {
        this.name = name;
        this.age = age;
        this.mark = mark;
    }

    printAge() {
        console.log(`I am ${this.name} and my mark is ${this.age}`)
    }
}

let person3 = new Persons('Jack',35,95);
console.log('person3 : ',person3);
person3.printAge();

let person4 = new Persons('Rose',32,95);
console.log('person4 : ',person4);
person4.printAge();

//Prototype
Persons.prototype.printMark = function () {
    console.log(`I am ${this.name} and my mark is ${this.mark}`);
}
person3.printMark();
person4.printMark();


class Animal {
    name;

    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log(`${this.name} is an animal and ${this.name} is walking...`);
    }
}
let animal = new Animal ("Zebra")
console.log("animal :",animal);
animal.walk();

class Dog extends Animal {          //Here Animal class becomes parent class of Dog Class
    color;

    constructor (name,color) {
        super (name);       //Calls parent class constructor
        this.color = color;
    }


    //Method overriding
    walk() {
        console.log(`${this.name} is a Dog and ${this.name} is walking...`);
    }

    eat () {
        console.log(`${this.name} is eating...`);
  
    }

    printColor () {
        console.log(`${this.name} is a ${this.color} Dog`);

    }
}

let dog = new Dog("Kaiser", "Black");
console.log("Dog :",dog);
dog.walk()
dog.eat()
dog.printColor()
