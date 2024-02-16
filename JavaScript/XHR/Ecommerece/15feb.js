
let xhr = new XMLHttpRequest();

xhr.open("get", 'https://fakestoreapi.com/products');
xhr.send();

xhr.onreadystatechange = function () {
    console.log('Ready State :',xhr.readyState);
    console.log("Status :",xhr.status);

    if (xhr.readyState === 4) {
        if (xhr.status === 200); {
            let result = xhr.response;
            console.log("result :",xhr.response);
            console.log("type of(result) :",typeof(result));

            let parsed_result = JSON.parse(result);
            console.log("parsed_result : ",parsed_result);
            // console.log('typeof(parsedresult) :',typeof(parsed_result))

            let container = document.getElementById('container');
            let box = "";

            for (let i = 0; i < parsed_result.length; i++) {
                box = box +`
                <p class="id">${parsed_result[i].id}</p>`
                
            }

            console.log("box :",box)
            container.innerHTML = box;
        }
    }
}