//16-01-2024

            //Functions
            console.log("FUNCTIONS")
//Function definition
    console.log("\n")

function printHello() {
    console.log("Hello World");
}
printHello();//Function Call

//Funtion with Return  (function which returns the log())
function printNum() {
    console.log(1);
    console.log(2);
    console.log(3);
    return;
    console.log(4);   //(after return a valie in a function, doesn't execute the next set of codes within the function.)
    console.log(5);
}
printNum();

//Function that retuns a value
function getNum() {
    console.log("Function that returns a Number or a Value");
    return 10;  //Here, the function always returns 10
}
let num = getNum();
console.log("num : ",num);

//Function with Parameters
function logNum(a,b,c) {
    console.log("a : ",a);
    console.log("b : ",b);
    console.log("c : ",c);  //a,b,c are the parameters here.
}
logNum(30,40,50)            //values are  assigned in declared order.

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


console.log("FIBONACCI SERIES")
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
//while(5 < 5) -> false -> loop stops   console.log (a);



//18-01-2024
console.log("MULTIPLICATION TABLE")
function MULTIPLICATION(){
    // let a = 1;
    // b = 1;
    // c = a*b;

    // for (b = 1; b <=10; b++){
    //     console.log(a*b)
    // }

    let a = 2;
    b = 1;
    c = a*b;

    for (b = 1; b <=10; b++){
        // console.log(a*b)
        console.log(`${a} * ${b} = ${a*b}`)
    }
}
MULTIPLICATION()

function multiplicationtable(limit){
    for(let i = 1; i<=limit;i++){
        for(let j = 1; j<=10;j++){
            console.log(`${i}*${j} = ${i*j}`);
        }
        console.log(`\nMultiplication Table Of`)
    }
}
multiplicationtable(10)


// // //Program to reverse a string
let str = "Hai";
let reverse = "";
for (let i =str.length - 1; i >= 0; i--){
    //i = 2 str.length -1 =(3-1 = 2)-> i >= 0 - true -> reverse = reverse + str[i] -> recerse = "" = str[2] = "" + "i" = "i" 
    //i = 1 -> i >= 0 - true -> reverse = reverse + str[i] -> reverse = "i" = str[1] = "i" + "a" = "ia"
    //i = 0 -> i >= 0 - true -> reverse = reverse + str[i] -> reverse = "ia" = str[0] = "ia" + "H" = "iaH"
    //i = -1 -> i >= 0 - false - loop stops
    reverse = reverse + str[i];
}
console.log("reverse : ", reverse);

{
    //Nested Loops
let str ='';
for(let i = 0; i<= 2; i++){
    for(let j = 0 ; j<=i ;j++){
        str = str + "*";

    }
    str = str +'\n';
}
console.log(str);  

//i = 0 -> i<=2 - true ->
        //j = 0 -> j<=i - true -> str = str + "*" = "" + "*" = "*"

        //j = 1 -> j<=i - false 
    //str = str + '\n' -> str = "*" + "\n" = "*\n"
// i=1 -> i<=2 - true ->
        //j = 0 -> j<=i -> 0 <= 1 -> true -> str = str + "*" = "*\n" + "*" = "*\n*"
        //j = 1 -> j<=i -> 1 <= 1 -> true -> str = str + "*" = "*\n*" + "*" = "*n\**"
        //j = 2 -> j<=i -> 2 <= 1 -> false -> inner loop stops
    //str = str + '\n' -> str = "*n\**" + "\n" = "*\n**\n"

//i = 2 -> i <= 2-> 2 <=2 -> true
        //j = 0 -> j<=i -> 0 <= 2 -> true -> str = str + "*" = "*\n**\n" + "*" = "*\n**\n*"
        //j = 1 -> j<=i -> 1 <= 2 -> true -> str = str + "*" = "*\n**\n*" + "*" = "*n\**\n**"
        //j = 2 -> j<=i -> 2 <= 2 -> true -> str = str + "*" = "*\n**\n**" + "*" = "*n\**\n***"
        //j = 3 -> j<=i -> 3 <= 2 -> false -> inner loop stops
    //str = str + '\n' -> = "*n\**\n***" + "\n" = "*n\**\n***\n"
// i =3 -> i <=2 -> 3 <= 2-> fasle -> outer loop stops   

}
{
    let str = "";
    for(let i = 3; i>=1; i--){
        for(let j = 0; j<i; j++){
            str = str + "*"
        }
    str = str + "\n"
    }
    console.log(str)
}
// {
//     let str = "";
//     for(let i = 5; i >= 1; i++){
//         for(j =0 ; j<= i; j++);
//         str = str + "*"
//     }
// }
{
    let no = '';
    for (let i = 1; i <= 4; i++) {
        for (let j = 1 ; j <= i; j++) {
            no = no + j;
        }
        no = no + '\n';
    }
    console.log(no);
}

//work
//find sum of first 50 odd and even number

{
    function oddSum() {
        let sum = 0;
        for (let i = 1, c = 0; c < 10; i += 2) {
          sum += i;
          c++;
        }
        console.log("oddSum:", sum);
    }
    oddSum()
}
{
    function evenSum() {
        let sum = 0;
        for (let i = 0, c = 0; c <= 50; i += 2) {
            sum += i;
            c++;
        }
        console.log("evenSum:", sum);
    }
    evenSum()
}
{
    console.log("New")
}
