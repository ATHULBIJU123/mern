function putZero(value) {
    return value < 10? "0" + value : value;
}

function show() {
    let date = new Date();
    console.log("date : ", date);
    let hours = date.getHours();
    console.log("hours : ", hours);
    let minutes = date.getMinutes;
    console.log("minutes :",minutes);
    let seconds = date.getSeconds();
    console.log("seconds : ", seconds);

    let dateString = putZero(hours) + ":" + putZero(minutes) + ":" + putZero(seconds);
    console.log("dateString : ", dateString);

    document.getElementById('time').innerHTML = dateString;

    // show()

    setTimeout(function(){
        show();         //Recursive call
    },1000);

}
// show();

//Callback function
function execute(callback) {
    callback();
}

function printHello () {
    console.log("Hello");
}
// seconds
// seconds
execute(printHello);

//Anonymous Function
let printHai = function () {
    console.log("Hai");
}
printHai();

//Arrow Function
let printHelloWorld = () => {
    console.log("Hello World");
}
printHelloWorld();


//Spread Operator - (...)
const obj1 = {
    name : "John",
    email : "john@gmail.com"
}
console.log("obj1 :",obj1);

let obj2 = {...obj1,password : "John!123"};
console.log("obj2 :",obj2);

const fruit1 = ['apple','mango', 'orange'];
console.log("fruit1 :",fruit1);

let fruit2 = [...fruit1, 'jackfruit',"pine apple"] 
console.log("fruit2 : ",fruit2)