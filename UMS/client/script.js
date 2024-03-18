console.log("Hello javascript");

async function getData() {

let user_data = await fetch('http://localhost:3000/getData');
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
    </tr>
    `;
}

console.log("dataComponent : ", dataComponent);

console.log("content : ", content);
content.innerHTML = dataComponent;

}
