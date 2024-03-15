let sub = document.getElementById('sub');
console.log("data submitted",sub);


sub.addEventListener('load',async function getuserdata(){
    let userData = await fetch ('http://localhost:3000/getData');
    console.log("userData : ",userData);
    
    let parsedData = await userData.json();
    console.log("parsedrData : ",parsedData);

    let tbody =document.getElementById('tableData');
    let table='';
    
    for(let i=0;i<parsedData.length;i++){
        content= content + `
      <tr>
      <td>${parsedData[i]._id}</td>
      <td><input type="text" name="mytext" id="name-${parsedData[i]._id}" value="${parsedData[i].mytext}" </td>
      <td><input type="email" name="email" id="email-${parsedData[i]._id}" value="${parsedData[i].email}"</td>
      <td><input type="password" name="pass"  id="password-${parsedData[i]._id}" value="${parsedData[i].pass}</td>
      </tr>
       `
 
    }
    
    tbody.innerHTML=table;
 }
 )


