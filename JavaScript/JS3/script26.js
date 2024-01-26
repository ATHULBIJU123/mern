let btn = document.getElementById('btn');
console.log("btn : ", btn);

// btn.addEventListener('click', function () {
//     let valuel = Number (document.getElementById("value1").value)
//     console.log("value", valuel)
//     console.log("type of (values): ", typeof (value1));

//     let value2 = Number(document.getElementById('value2').value);
//     console.Log("Value2", value2)
//     console.log("type of (value)", typeof (value2));

//     let output1 = document.getElementById("output1");
//     console.log("output1: ", output1);

//     let output2 = document.getElementById("output2");
//     console.log("output2: ", output2);

//     output1.innerHTML = value1;
//     output2.innerHTML = value2;

// })
function handleClick() {
let value1 = Number(document.getElementById('value1').value);
console.log("value1 : ", value1)
console.log("type of (value1): ", typeof (value1));

let value2 = Number(document.getElementById('value2').value);
console.log("value2 : ", value2)
console.log("type of (value2) : ", typeof (value2));

let output1 = document.getElementById("output1");
console.log("output1: ", output1);

let output2 = document.getElementById("output2");
console.log("output2: ", output2);

output1.innerHTML = value1;
output2.innerHTML = value2;
}

// setTimeout (function () {
//     alert ("From setTimeout...");
// },5000);

// setInterval( function () {
//     i++;
//     console.log ("From setInterval");
// },2000);

// let i = 0;
// let x =setInterval (function (){

// })


