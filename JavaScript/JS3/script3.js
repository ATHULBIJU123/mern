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
//Factoral of a number using recursive method
//Do some research about DOM

//DOM Methods

let headings = document.getElementsByTagName('h1');
console.log('headings[0] : ', headings[0].textContent);
console.log('headings[1] : ', headings[1]);

let containers








let button = document.getElementById('btn');
console.log("button : ",button);


button.addEventListener('Click', function() {
    // alert("Button Clicked");
    console.log("Click event fired...")
});