let btn1 = document.getElementById('b1')
console.log("Click Bait Button :" ,btn1)
let p1 = document.getElementsByClassName('p1')

console.log("Para1 :" ,p1)
btn1.addEventListener('click', function(){
    // console.log('Click Event Fired');
    p1.textContent = 'Para1 changed';
})



let btn2 = document.getElementById('addTask')
let newTask = document.getElementById('task')
console.log("New Task Added :" ,newTask)
console.log("Add Task Button :" ,btn2)
btn2.addEventListener('click', function(){
    newTask = newTask.value.trim;
    if (newTask !== '') {
        listItem = document.createElement('li');
        listItem.textContent = newTask;
        // Append
        taskList.appendChild;
        newTask.value = '';

    }
    
    console.log('Task Added ')
})

let taskList = document.getElementsByTagName('ul')
console.log("List :" ,taskList)

//Form
myForm = document.getElementById('myForm');
errorMessage = document.getElementById('error-message');

myForm.addEventListener('submit', function (event) {
    event.preventDefault();

    errorMessage.textContent = '';

    nameField = document.getElementById('name');
    emailField = document.getElementById('email');
    passwordField = document.getElementById('password');

    if (nameField.value.trim() === '' || emailField.value.trim() === '' || passwordField.value.trim() === '') {
        errorMessage.textContent = 'Please fill out all required fields.';
    } else {
        myForm.submit();
    }
});




