let xhr = new XMLHttpRequest();

//Open a request to server
xhr.open("get", 'https://jsonplaceholder.typicode.com/users');

btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    //Send opened request
    xhr.send();
});

xhr.onreadystatechange = function () {
    console.log("readyState : ", xhr.readyState);

    if (xhr.readyState === 4) {

        if (xhr.status === 200) {
            let response = xhr.response;
            console.log("response : ", response);
            console.log("typeof(response) : ", typeof (response));

            //Parsing
            let parsed_response = JSON.parse(response);
            console.log("parsed_response : ", parsed_response);
            console.log("typeof(parsed_response) : ", typeof (parsed_response));

            let content = document.getElementById('content');
            let rows = "";

            for (let i = 0; i < parsed_response.length; i++) {
                rows = rows + `
                <tr>
                <td>${parsed_response[i].id}</td>
                <td>${parsed_response[i].name}</td>
                <td>${parsed_response[i].username}</td>
                <td>${parsed_response[i].email}</td>
                </tr>
                `;
            }

            console.log("rows : ", rows);
            content.innerHTML = rows;
        }
    }
}