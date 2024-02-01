let counter = 0;
counterValue = document.getElementById('counter-value');
 

//increment 
incrementBtn = document.getElementById('increment-btn');
incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.innerHTML = counter;
});

//decrement
decrementBtn = document.getElementById('decrement-btn');
decrementBtn.addEventListener('click', () => {
    counter--;
    counterValue.innerHTML = counter;
});

//reset
resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', reset);
 
function reset() {
    counter = 0;
    counterValue.innerHTML = counter;
}