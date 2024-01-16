//16-01-2024

//Functions
//Function definition

function printHello() {
    console.log("Hello World");
}
printHello();//Function Call

//Funtion with Return
function printNum() {
    console.log(1);
    console.log(2);
    console.log(3);
    return;
    console.log(4);
    console.log(5);
}
printNum();

//Function that retuns a value
function getNum() {
    console.log("Function that returns a Number or a Value");
    return 10;
}
let num = getNum();
console.log("num : ",num);

//Function with Parameters
function logNum(a,b,c) {
    console.log("a : ",a);
    console.log("b : ",b);
    console.log("c : ",c);
}

logNum(30,40,50)

//Call by Values
let a = 25;
console.log("\n a before: ",a);

function update(a) {
    console.log("\n Inside function block");
    console.log("a :",a);
    a = 100;
    console.log("a :",a);

}

update(a);

console.log("\n a aftyer : ", a);

//Call by Reference
let arr = [1,2,3]
