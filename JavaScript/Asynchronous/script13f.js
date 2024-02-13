//Synchronuous Singlr Threaded Language
console.log("First")
console.log("Second")
console.log("Third")

//asynchronous operations
//Timers
setTimeout(function () {
    console.log("from setTimeOut..")
},3000)

setTimeout(function () {
    console.log("from setTimeOut..")
},5000)

setTimeout(function () {
    console.log("from setTimeOut..")
},1000)

console.log("Fourth")
