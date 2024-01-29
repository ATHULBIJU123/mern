let btn1 = document.getElementById('b1')
console.log("Click Bait Button :" ,btn1)
let p1 = document.getElementsByClassName('p1')


console.log("Para1 :" ,p1)
btn1.addEventListener('click', function(){
    console.log('Click Event Fired')
})



let btn2 = document.getElementById('addTask')
console.log("Add Task Button :" ,btn2)
let newTask = document.getElementById('task')
console.log("New Task Added :" ,newTask)
let taskList = document.getElementsByTagName('ul')
console.log("List :" ,taskList)




