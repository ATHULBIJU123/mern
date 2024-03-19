console.log("Hello javascript");

async function getData() {

let user_data = await fetch('http://localhost:3000/getData');
console.log("user_data : ", user_data.response);//Network response
console.log("typeOf(user_data) : ", typeof(user_data));

let parsed_user_data = await user_data.json();
console.log("datas : ", parsed_user_data);
console.log("typeOf(datas) : ", typeof(parsed_user_data));

let datas = parsed_user_data.datas;

let content = document.getElementById('content');
let dataComponent = '';

for(let i=0; i<datas.length; i++) {
    // let edit_datas = {id : datas[i]._id,name : datas[i].name,email : datas[i].email,password : datas[i].password};
    // let id = datas[i]._id;
    let editTag = `<td value=${datas[i]._id}>Edit</td>`;
    console.log("editTag : ", editTag);
    dataComponent = dataComponent + `
    <tr>
    <td>${datas[i]._id}</td>
    <td><input type="text" name="name" id="name-${datas[i]._id}" value="${datas[i].mytext}" disabled=false></td>
    <td><input type="email" name="email" id="email-${datas[i]._id}" value="${datas[i].email}" disabled="true"></td>
    <td><input type="password" name="password" id="password-${datas[i]._id}" value="${datas[i].password}" disabled="true"></td>
    <td><button onclick="handleEdit('${datas[i]._id}')">Edit</button></td>
    <td><button onclick="handleSave('${datas[i]._id}')">Save</button></td>
    <td><button onclick="handleDelete('${datas[i]._id}')">Delete</button></td>
    </tr>
    `;
}

console.log("dataComponent : ", dataComponent);

console.log("content : ", content);
content.innerHTML = dataComponent;

}

function handleEdit(id) {
    console.log("id : ",id);

    let name = document.getElementById(`name-${id}`);
    name.disabled = false;

    let email = document.getElementById(`email-${id}`);
    email.disabled = false;

    let password = document.getElementById(`password-${id}`)
    password.disabled = false;

}

async function handleSave(id) {
    console.log("Id :",id);

    let name = document.getElementById(`name-${id}`).value;
    console.log("name : ", mytext);

    let email = document.getElementById(`email-${id}`).value;
    console.log("email : ", email);

    let password = document.getElementById(`password-${id}`).value;
    console.log("password : ", pass);

    let data = {
        id,
        mytext,
        email,
        pass
    }

    let json_data = JSON.stringify(data);
    console.log("json_data : ", json_data);

    let response = await fetch(`/update`,{
        method : "PUT",
        headers : {
            "Content-Type" : "application/json"
        },
        body : json_data,
    }
    )

    let response_data = await response.text();
    console.log("response_data : ", response_data);

    if(response_data === "success") {
        alert("Updation Success");
    }else {
        alert("Updation failed");
    }
    return response_data;
}