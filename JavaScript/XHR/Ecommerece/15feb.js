
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

            let box = document.getElementById('box');
            let box1 = " ";

            for (let i = 0; i < parsed_result.length; i++) {
                box1 = box1 + `
                <div class="box">
                    <p class="id">${parsed_result[i].id}</p>
                    <h3 class="title">${parsed_result[i].title}</h3>
                    <p class="price">${parsed_result[i].price}</p>
                    <p class="description">${parsed_result[i].description}</p>
                    <p class="category">${parsed_result[i].category}</p>
                    <img src="" alt="" class="picture">${parsed_result[i].picture}
                    <div class="rating">
                        <p class="rate">${parsed_result[i].rate}</p>
                        <p class="count">${parsed_result[i].count}</p>
                    </div>
                </div>`
                
            }

            console.log("box :",box1)
            box.innerHTML = box1;
        }

    }
}