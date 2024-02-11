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

//Prototype                     creating a new property to a object  outside the define area.
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

            //03-02-2024
            //Without Setters and Getters
// class Car {
//     color;

//     constructor(color) {
//         this.color = color;
//     }

//     setColor(color) {
//         this.color = color;
//     }

//     getColor() {
//         return this.color;
//     }
// }   

// const myCar = new Car("Green");
// console.log("myCar :", myCar);

// myCar.setColor("Red");
// console.log("myCar :", myCar);

// let color = myCar.getColor();
// console.log("color :",color);

// console.log(`I have a ${color} color`);



//Getters and Setters
class Car {
    color;

    constructor(color) {
        this.color = color;
    }

    set Color(color) {
        this.color = color;
    }

    get Color() {
        return this.color;
    }
} 

const myCar = new Car("Green");
console.log("myCar :", myCar);

myCar.Color= "Red";             //myCar.setColor() -> not required function call in getters and setters
console.log("myCar :", myCar); 

let color = myCar.color;        //myCar.getColor
console.log("color :",color);

console.log(`I have a ${color} color`);

class Button {
    button;
    constructor(content) {
        this.button = document.createElement ('button');
        this.button.innerHTML = content;
        document.body.appendChild(this.button);
    }

    set height(height) {
        this.button.style.height = height + "px";
    }

    get height () {
        return this.button.style.height;
    }

    set width(width) {
        this.button.style.width = width + "px";
    }

    get width () {
        return this.button.style.width;
    }

    onclick (fn) {
        this.button.onclick = fn;
    }
}
const myButton = new Button("Click Here");

myButton.height = 50;
const height = myButton.height;
console.log("height :",height);

myButton.width = 150;
const width = myButton.width;
console.log("width :",width);

myButton.onclick(function () {
    console.log("Button Clicked");
});

class YellowButton extends Button {
    onclick(fn) {
        this.button.onclick = function () {
            this.button.style.background = 'YELLOW';
            fn();
        }.bind(this);
    }
}

const myYellowButton = new YellowButton("Click me");
myYellowButton.onclick(function() {
    console.log("Yellow Button Clicked")
});

class Paragraph {
    paragraph;
    constructor(content) {
        this.paragraph = document.createElement ('p');
        this.paragraph.innerHTML = content;
        document.body.appendChild(this.paragraph);

    }
    set border(border) {
        this.button.style.border = border + "px";
    }

    get border () {
        return this.button.style.border;
    }
    set margin(margin) {
        this.button.style.margin = margin + "px";
    }

    get margin () {
        return this.button.style.margin;
    }

    set padding(padding) {
        this.button.style.padding = padding + "px";
    }

    get padding () {
        return this.button.style.padding;
    }

    // set line-height(line-height) {
    //     this.button.style.line-height = line-height + "px";
    // }

    // get line-height () {
    //     return this.button.style.line-height;
    // }
}
class ColoredParagraph extends Paragraph {
    constructor(content, border, margin, padding, lineHeight, color) {
      super(content, border, margin, padding, lineHeight);
      this._color = color;
  
      this.element.style.color = this._color;
  
      this.element.addEventListener('mouseenter', () => {
        this.changeColor('blue');
      });
      this.element.addEventListener('mouseleave', () => {
        this.changeColor(this._color);
      });
    }
  
    changeColor(newColor) {
      this.element.style.color = newColor;
    }
  }
  const newParagraph = new Paragraph('p1 asfhsfhufhufhafh');
