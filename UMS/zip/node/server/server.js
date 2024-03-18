const http = require('http');
const url = require('url');
const fs = require('fs');
const querystring = require('querystring');
const { MongoClient, ObjectId } = require('mongodb');
const { error } = require('console');
const port = 3000;


  //Open a connection to a local mongodb instance
  const client = new MongoClient("mongodb://127.0.0.1:27017");

const server = http.createServer(async (req, res) => {
  // Access the database and collection
  const db = client.db("ums");
  const collection = db.collection("users");

  console.log("url : ", req.url);
  // Parse the request URL
  const parsedUrl = url.parse(req.url);
  console.log("parsedUrl : ", parsedUrl);

  // Serve the HTML file on root request
  if (parsedUrl.pathname === "/") {

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(fs.readFileSync("../client/index.html"));

  }else if(parsedUrl.pathname === "/script.js") {

    res.writeHead(200,{"Content-Type" : "text/javascript"});
    res.end(fs.readFileSync("../client/script.js"));

  }else if(parsedUrl.pathname === "/add_user.html") {

    res.writeHead(200,{"Content-Type" : "text/html"});
    res.end(fs.readFileSync("../client/add_user.html"));

  }else if(parsedUrl.pathname === "/get_users.html") {

    res.writeHead(200,{"Content-Type" : "text/html"});
    res.end(fs.readFileSync("../client/get_users.html"));
    
  }else if(parsedUrl.pathname === "/style.css") {

    res.writeHead(200,{"Content-Type" : "text/css"});
    res.end(fs.readFileSync("../client/style.css"));
    
  }else if(parsedUrl.pathname === "/edit_user.html") {

    res.writeHead(200,{"Content-Type" : "text/html"});
    res.end(fs.readFileSync("../client/edit_user.html"));
    
  }else if(parsedUrl.pathname === "/edit_user.js") {

    res.writeHead(200,{"Content-Type" : "text/javascript"});
    res.end(fs.readFileSync("../client/edit_user.js"));
    
  }

  // Handle form submission on POST request to /submit
  if (req.method === "POST" && parsedUrl.pathname === "/submit") {
    console.log("reached here...");
    let body = "";

    // Collect data as it comes in chunks
    req.on("data", (chunk) => {
      console.log("Reached data event emmitter");
      console.log("chunk : ", chunk);
      console.log(`chunk.toString() : ${chunk} : `, chunk.toString());
      body += chunk.toString();
    });

    // Process the form data on end of the request
    req.on("end", async () => {
      try {
        console.log("body : ", body);
        const formData = querystring.parse(body);
        console.log("formData : ", formData);

        // Do something with the submitted data (e.g., save to a database)
        console.log(
          `Received data: Name - ${formData.name}, Email - ${formData.email}`
        );

        //Format data
        let name = formData.name;
        console.log("name : ", name);
        let email = formData.email;
        console.log("email : ", email);
        let password = formData.password;
        console.log("password : ", password);

        let data = {
          name: name,
          email: email,
          password: password,
        };

        console.log("data : ", data);

        // let json_data = JSON.stringify(data);
        // console.log("json_data : ", json_data);

        // Insert the data into the collection
        await collection
          .insertOne(data)
          .then((messaage) => {
            console.log("Document inserted successfully : ", messaage);
          })
          .catch((error) => {
            console.log("Document not inserted : ", error);
          });

        //    await MongoClient.connect("mongodb://127.0.0.1:27017",(err, client)=> {
        //         console.log("Mongodb connected...")
        //         if(err) {

        //             console.error('Error connecting to mongodb : ', err);
        //             return;
        //         }else {
        //             console.log("Mongodb connected successfully");
        //         }
        //     })

        // Send a response (you can customize this based on your needs)
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Form submitted successfully!");
      } catch (error) {
        console.log("Error : ", error);
      }
    });
  }

  //Handle Get request to retrieve form data
  if(req.method === "GET" && parsedUrl.pathname === "/getFormData") {

    //Retrieve form data from the collection
    const formDataArray = await collection.find().toArray();
    console.log("formDataArray : ", formDataArray);

    //Convert formDataArray to string
    const jsonFormData = JSON.stringify(formDataArray);
    console.log("jsonFormData : ", jsonFormData);

    res.writeHead(200,{"Content-Type" : "text/json"});
    res.end(jsonFormData);
  }

    //Handle Get request to retrieve form data
    if(req.method === "GET" && parsedUrl.pathname === "/getSingleUserData/:id") {

      let id = req.params.id;
      console.log("id : ", id);

      //Retrieve form data from the collection
      const formDataArray = await collection.find().toArray();
      console.log("formDataArray : ", formDataArray);
  
      //Convert formDataArray to string
      const jsonFormData = JSON.stringify(formDataArray);
      console.log("jsonFormData : ", jsonFormData);
  
      res.writeHead(200,{"Content-Type" : "text/json"});
      res.end(jsonFormData);
    }

    if(req.method === "PUT" && parsedUrl.pathname === "/editData") {

      let body;
      let id;
      let updateDatas;
      req.on('data', (chunks)=> {
        console.log("chunks : ", chunks);
        let datas = chunks.toString();
        console.log("datas : ", datas);
        body = JSON.parse(datas);
        console.log("body : ", body);

        id = body.id;
        console.log("id : ", id);
        console.log("type (id) : ", typeof(id))
        //Converting string id to mongodb object id
        let _id = new ObjectId(id);
        console.log("_id : ", _id);
        console.log("type (_id) : ", typeof(_id));

        updateDatas = {
          name : body.name,
          email : body.email,
          password : body.password,
        }

        console.log("updateDatas : ", updateDatas);

      });

      req.on('end',async ()=> {

        console.log("id : ", id);
        console.log("typeOf(id) : ", typeof(id))
        //Converting string id to mongodb object id
        let _id = new ObjectId(id);
        console.log("_id : ", _id);
        console.log("type (_id) : ", typeof(_id));

        await collection.updateOne({_id},{$set : updateDatas})
          .then((message)=> {
            console.log("Document updated successfully : ", message);
            res.writeHead(200,{"Content-Type" : "text/plain"});
            res.end("success");
          })
          .catch((error)=> {
            console.log("Document not updated : ", error);
            res.writeHead(200,{"Content-Type" : "text/plain"});
            res.end("failed");
          })
      })

    }

    if(req.method === "DELETE" && parsedUrl.pathname === "/deleteData") {

      let body = "";
      req.on('data', (chunks) => {
        console.log("chunks : ", chunks);
        body = body + chunks.toString();
        console.log("body : ", body);
      });

      req.on('end',async()=> {
        let _id = new ObjectId(body);
        console.log("_id : ", _id);

        await collection.deleteOne({_id})
          .then((messaage) => {
            console.log("Document deleted successfully : ", messaage);
            res.writeHead(200, {"Content-Type" : "text/plain"});
            res.end("success");
          })
          .catch((error) => {
            console.log("Document deletion failed");
            res.writeHead(200, {"Content-Type" : "text/plain"});
            res.end("failed");

          })
      })
    }

});


// Connect to mongodb
async function connect() {
    try {
        await client.connect();
        console.log("Database connection established");
    } catch (error) {
        console.log("Database not connected");
        console.log("Database error : ", error);  
    }finally {
        server.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    }

}

connect();


 




