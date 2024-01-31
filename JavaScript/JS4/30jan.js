function putZero(value) {
    return value < 10? "0" + value : value;
}

function show() {
    let date = new Date();
    console.log("date : ", date);
    let hours = date.getHours();
    console.log("hours : ", hours);
    let minute = date.getMinutes();
    console.log("minutes :",minute);
    let seconds = date.getSeconds();
    console.log("seconds : ", seconds);

    let dateString = putZero(hours) + ":" + putZero(minute) + ":" + putZero(seconds);
    console.log("dateString : ", dateString);

    document.getElementById('time').innerHTML = dateString;

    // show()   gives the time for every millisecond

    setTimeout(function(){
        show();         //Recursive call
    },1000);            //gives the time for every 1000ms ie, every seconds

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
console.log("fruit2 : ",fruit2);


{
//31-01-2024
let details = {
    firstName : "Jack",
    lastNAme : "Doe",
    email : "jackdoe@gmail.com",
    address : {
        street : "myStreet",
        city : "myCity",
        houseNo : 10,
    }
}

let fruits = ["Apple",'Mango', "Orange",["Avocado", "Pineapple", "Grapes"]];

//Destructuring  -> Extracting raw data 
let{firstName,lastNAme,email,address : {street,city,houseNo}} = details;
console.log("firstname : ",firstName);
console.log("lastNAme : ",lastNAme);
console.log("email : ",email);

console.log("street :",street)
console.log("city :",city)
console.log("houseNo :",houseNo)

let [fruit1,fruit2,fruit3] = fruits;
console.log("fruit1 :", fruit1)
console.log("fruit2 :", fruit2)
console.log("fruit3 :", fruit3)

}

//          Array Functions
let cars = ["Benz","BMW","Maruthi","Audi","BMW"];

//forEach
cars.forEach((element)=>{
    console.log(element);
});

//Find
let findResult = cars.find((element)=> {
    return element === "BMW";
});
console.log("findResult : ",findResult);

//Filter
let filterResult = cars.filter((element)=> {
    return element === "BMW"
});

console.log("filterResult : ",filterResult);

//Map
let mapResult = cars.map ((element)=> {
    return element = "my-" + element;
    // return element === "BMW";
});
console.log("mapResult : ",mapResult);

//Reduce
let nums = [1,2,3,4,5];
let reduceResult = nums.reduce((sum,element)=> {
    return sum + element;
},0)

console.log('reduceResult : ',reduceResult);