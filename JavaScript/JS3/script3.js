//25-01-2024

function countDown(n) {

    if ( n== 0) {
        console.log("Done");

    }else {
        console.log(n);
        countDown(n-1); //Recursive Call (A function calling itself)
    }
}

countDown(3); //Normal Function Call

//n=3 -> else block -> logs 3 -> recursive call countDown(2)
            //n=2 -> else block -> logs 2 -> recursive call countDown(1)
                    //n=1 -> else block -> logs 1 -> recursive call countDown(0)
                            //n=0 -> if block -> logs Done

//Work
//Factorial of a number using recursive method
//Do some research about DOM

// function factorial (n){
//     if (n == 1){
//         console.log(n)
//     }else {
//         factorial(n-1);
//         console.log("n! = ", n * factorial(n-1));
//     }
// }
// factorial(5)

function factorial(n){
    if(n == 1  || n == 0){
        console.log(1);
    } else{
        console.log(n*factorial(n-1));
    }
}
factorial(2)

//DOM Methods

let headings = document.getElementsByTagName('h1');
console.log('headings[0] : ', headings[0].textContent); //console without any tags  //calling by index will console each of the div separately
console.log('headings[1] : ', headings[1]); // calling by index is only possible if the elements are stored in an array. 

let containers = document.getElementsByClassName('container');
console.log("containers : ", containers);
console.log("containers[0] : ",containers[0].textContent);
console.log("containers[1] : ",containers[1].textContent);

let first = document.getElementById('first'); //by calling the id, it will gives the very first element which is first in the program.
console.log("first : ",first.textContent);

let element = document.querySelector('ul li');
console.log("element : ",element.textContent)

let divElement = document.querySelector('.outer-container #inner-container1');
console.log("divElement : ",divElement.textContent);

let divElement1 = document.querySelector('.outer-container #inner-container2');
console.log("divElement1 : ",divElement1.textContent);




let button = document.getElementById('btn');
console.log("button : ",button);


button.addEventListener('click', function() {
    // alert("Button Clicked");

    console.log("Click event fired...");    
});

button.addEventListener('mouseover',function(){
    console.log("Mouseover event fired...")
});

button.addEventListener('mouseout',function () {
    console.log("Mouseout event fired...")
});

button.addEventListener('mousedown',function () {
    console.log("Mousedown event fired...")
});

button.addEventListener('mouseup',function () {
    console.log("Mouseup event fired...")
});

button.addEventListener('keydown',function(){
    console.log("keydown event fired...")
});

button.addEventListener('keyup',function () {
    console.log("keyup event fired...")
});

let inp = document.getElementById('inp');
console.log("inp : ", inp);

inp.addEventListener('keyup', function () {
    console.log(inp.value)
});


