let date = document.getElementById('date');
let msg = document.getElementById('error');

date.addEventListener('keyup',function () {
    let dateValue = date.value;
    console.log(dateValue);
    const regexpForDate = /^\d{1,2}-\d{1,2}-\d{4}$/i;
    const isValid = regexpForDate.test(dateValue);

        if(isValid){
            msg.innerHTML = '';
            return;
        } else {
            msg.innerHTML = "Invalid String";
            return;
        }
});