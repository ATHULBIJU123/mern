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
