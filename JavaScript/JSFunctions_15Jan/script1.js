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
let a = 25;  //variable is a specefic memory location
console.log("\n a before: ",a);

function update(a) {  //a is the parameter  the corresponding value is passed. ie, only value is updated
    console.log("\n Inside function block");
    console.log("a :",a);
    a = 100;
    console.log("a :",a);

}

update(a);

console.log("\n a after : ", a);

//Call by Reference
let arr = [1,2,3];
console.log("\n arr : ",arr);

function updateArr(arr){            // Reference is passed , hence the 
    console.log("\nInside function");
    console.log("arr (after :",arr );

    arr[1] = 200;

    console.log("arr : ",arr);

}

updateArr(arr);
console.log("arr : ",arr);

let obj = {
    name : "Mike",
    email : "mike@gmail.com",
    isAdmin : true,
}
console.log("\n obj(before function call): ",obj);

function updateObj (obj) {
    console.log(" \n Inside function");
    console.log("obj : ,obj");
}

updateObj(obj);
console.log("\nobj (after function call):  ", obj)




//17-01-2024

//Closure (A Function along with its environment)

function outerFunction() {
    let outerVariable = 25;

    return function innerFunction() {
        return outerVariable;
    } 
}
// console.log("innerFunction() :",innerFunction());  !!Error

let result = outerFunction();
console.log("result : ",result);
console.log("result() : ", result());

let innerFunction = function innerFunction() {
    return outerVariable
}
// console.log("innerfuction : ", innerFunction)
// console.log("innerFunction() :",innerFunction());

//Fibonacci Series
//0 1 1 2 3 5 8

function fibonacci(limit) {
    let a = 0;
    console.log (a);
    let b =1;
    console.log(b)

    let sum = 0;

    while (sum < limit) {
        sum = a + b;
        console.log(sum);
        a = b;
        b = sum;
    }
}

fibonacci(5);
//limit = 5
//0
//1
//sum = 0
//while
//0 < 5 -> true -> sum = a + b -> sum = 0 + 1 = 1 -> log 1 a =1, b = 1
//while (1 < 5) -> true
//sum = a + b -> sum = 1 + 1 = 2 -> log(2) -> a = 1, b = 2
//while(2 < 5) sum = a + b -> sum = 1 + 2 = 3 -> log 3 -> a = 2, b = 3
//while(3 < 5) sum = a + b -> sum = 2 + 3 = 5 -> log 5 -> a = 3, b = 5
//while(5 < 5) -> false -> loop stops





