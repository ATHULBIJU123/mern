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
        }
    }
}