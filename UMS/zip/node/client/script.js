console.log("Hello javascript");

async function getData() {

let user_data = await fetch('http://localhost:3000/getFormData');
console.log("user_data : ", user_data.response);//Network response
console.log("typeOf(user_data) : ", typeof(user_data));

let parsed_user_data = await user_data.json();
console.log("parsed_user_data : ", parsed_user_data);
console.log("typeOf(parsed_user_data) : ", typeof(parsed_user_data));

let content = document.getElementById('content');
let dataComponent = '';

for(let i=0; i<parsed_user_data.length; i++) {
    // let edit_datas = {id : parsed_user_data[i]._id,name : parsed_user_data[i].name,email : parsed_user_data[i].email,password : parsed_user_data[i].password};
    // let id = parsed_user_data[i]._id;
    let editTag = `<td value=${parsed_user_data[i]._id}>Edit</td>`;
    console.log("editTag : ", editTag);
    dataComponent = dataComponent + `
    <tr>
    <td>${parsed_user_data[i]._id}</td>
    <td><input type="text" name="name" id="name-${parsed_user_data[i]._id}" value="${parsed_user_data[i].name}" disabled="true"></td>
    <td><input type="email" name="email" id="email-${parsed_user_data[i]._id}" value="${parsed_user_data[i].email}" disabled="true"></td>
    <td><input type="password" name="password" id="password-${parsed_user_data[i]._id}" value="${parsed_user_data[i].password}" disabled="true"></td>
    <td><button onclick="handleEdit('${parsed_user_data[i]._id}')">Edit</button></td>
    <td><button onclick="handleSave('${parsed_user_data[i]._id}')">Save</button></td>
    <td><button onclick="handleDelete('${parsed_user_data[i]._id}')">Delete</button></td>
    </tr>
    `;
}

console.log("dataComponent : ", dataComponent);

console.log("content : ", content);
content.innerHTML = dataComponent;

}

// getData();

function handleEdit(id) {
    console.log("id : ", id);

    let name = document.getElementById(`name-${id}`);
    name.disabled = false;

    let email = document.getElementById(`email-${id}`);
    email.disabled = false;

    let password = document.getElementById(`password-${id}`);
    password.disabled = false;

}


async function handleSave(id) {
    console.log("Id : ", id);

    let name = document.getElementById(`name-${id}`).value;
    console.log("name : ", name);

    let email = document.getElementById(`email-${id}`).value;
    console.log("email : ", email);

    let password = document.getElementById(`password-${id}`).value;
    console.log("password : ", password);

    let data = {
        id,
        name,
        email,
        password
    }

    let json_data = JSON.stringify(data);
    console.log("json_data : ", json_data);

    let response = await fetch(`/editData`,{
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

async function handleDelete(id) {
    console.log("id : ", id);

     let response = await fetch("http://localhost:3000/deleteData",{
        method : "DELETE",
        headers : {
            "Content-Type" : "text/plain"
        },
        body : id,
    });

    let parsed_response = await response.text();
    console.log("parsed_response : ", parsed_response);

    if(parsed_response === "success") {
        alert("Deletion Success")
    }else {
        alert("Deletion failed");
    }
    
}
