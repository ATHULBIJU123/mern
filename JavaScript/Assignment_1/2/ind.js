//form
jsonForm = document.getElementById('jsonForm');
errorMessage = document.getElementById('errorMessage');

jsonForm.addEventListener('submit', function (event) {
    event.preventDefault();

    //JSON data
    jsonData = document.getElementById('jsonData').value;

    
    try {
        //parsing the JSON data
        parsedData = JSON.parse(jsonData);
        errorMessage.textContent = 'not valid';
        console.log(parsedData);
    } catch (error) {
        //  error message
        errorMessage.textContent = 'Error parsing JSON: ' + error.message;
    }
});
jsonData = jsonData.innerHTML