const http = require('http');
const url = require('url');
const port = 3000;
const fs = require('fs');
const querystring = require('querystring');
const { MongoClient } = require('mongodb');
const { error } = require('console');

//Connection URL
const mongodb_url = 'mongodb://localhost:27017';
const client = new MongoClient(mongodb_url);

//Database Name
const dbName = 'users';
const collName = 'users_coll';

async function connect() {
    //Use connect method to connect to the server
    await client.connect();

    console.log('Connected successfully to server');
    return 'done';
}

const server = http.createServer(async (req, res) => {

    const db = client.db(dbName);
    const collection = db.collection(collName);

    const req_url = req.url;
    console.log("req_url :", req_url);

    let parsed_url = url.parse(req.url);
    console.log("parsed_url : ", parsed_url);

    if (parsed_url.pathname === '/' && req.method === "GET") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(fs.readFileSync('../client/index.html'));
    } else if (parsed_url.pathname === '/sty.css' && req.method === "GET") {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(fs.readFileSync('../client/sty.css'));
    } else if (parsed_url.pathname === '/script.js' && req.method === "GET") {
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.end(fs.readFileSync('../client/script.js'));
    }


    //Post
    if (req.method === "POST" && parsed_url.pathname === "/submit") {

        let body = "";

        req.on('data', (chunks) => {
            console.log("Chunks :", chunks);
            body = chunks.toString();
            console.log("body : ", body);
        });

        req.on('end', async () => {
            let formDatas = querystring.parse(body);
            console.log("formDatas :", formDatas);

            //Do something with the submitted Data ( Eg: Save to a database)
            console.log("Name : ", formDatas.mytext);
            console.log("Email : ", formDatas.email); http://localhost:3000
            console.log("Password : ", formDatas.pass);

            //Inserting formDatas to the database
            await collection.insertOne(formDatas)
                .then((message) => {
                    console.log("Document inserted successfully")

                    let response = {
                        success: true,
                        statusCode: 200,
                        data: formDatas,
                        message: "Form Datas submitted Successfully"
                    }

                    let json_response = JSON.stringify(response);
                    console.log("json_response : ", json_response);

                    res.writeHead(200, { "Content-Type": "text/json" });
                    res.end(json_response);
                })

                .catch((error) => {
                    console.log("Document insertion failed");

                    let response = {
                        success: false,
                        statusCode: 400,
                        data: formDatas,
                        message: "Failed"
                    }

                    let json_response = JSON.stringify(response);
                    console.log("json_response : ", json_response);

                    res.writeHead(200, { "Content-Type": "text/json" });
                    res.end(json_response);
                })
        });

    }

    //Get
    if (req.method === "GET" && parsed_url.pathname === "/getData") {


        let formDatas = await collection.find().toArray();
        console.log("datas : ", formDatas);

        if (formDatas) {
            let response = {
                "success": true,
                statusCode: 200,
                datas: formDatas,
                message: "Success",
            }
            let json_response = JSON.stringify(response);

            res.writeHead(200, { 'Content-Type': 'text/json' });
            res.end(json_response);

        } else {
            let response = {
                "success": true,
                statusCode: 200,
                datas: formDatas,
                message: "Success",
            }

            let json_response = JSON.stringify(response);


            res.writeHead(200, { 'Content-Type': 'text/json' });
            res.end(json_response);
        }

    }

    //Update
    if (req.method === "PUT" && parsed_url.pathname === "/update") {
        let body = "";
    
        req.on('data', (chunks) => {
            body += chunks.toString();
        });
    
        req.on('end', async () => {
            let formDatas = querystring.parse(body);
    
            const updateQuery = { _id: formDatas._id };
            const updateData = {
                $set: {
                    mytext: formDatas.mytext,
                    email: formDatas.email,
                    pass: formDatas.pass
                }
            };
    
            await collection.updateOne(updateQuery, updateData)
                .then((result) => {
                    if (result.modifiedCount > 0) {
                        console.log("Document updated successfully");
    
                        let response = {
                            success: true,
                            statusCode: 200,
                            data: formDatas,
                            message: "Document updated successfully"
                        };
    
                        let json_response = JSON.stringify(response);
                        res.writeHead(200, { "Content-Type": "application/json" });
                        res.end(json_response);
                    } else {
                        console.log("Document not found");
    
                        let response = {
                            success: false,
                            statusCode: 404,
                            data: formDatas,
                            message: "Document not found"
                        };
    
                        let json_response = JSON.stringify(response);
                        res.writeHead(404, { "Content-Type": "application/json" });
                        res.end(json_response);
                    }
                })
                .catch((error) => {
                    console.log("Error updating document:", error);
    
                    let response = {
                        success: false,
                        statusCode: 500,
                        data: formDatas,
                        message: "Failed to update document"
                    };
    
                    let json_response = JSON.stringify(response);
                    res.writeHead(500, { "Content-Type": "application/json" });
                    res.end(json_response);
                });
        });
    }



//Delete
if (req.method === "DELETE" && parsed_url.pathname === "/delete") {
    let body = "";

    req.on('data', (chunks) => {
        body += chunks.toString();
    });

    req.on('end', async () => {
        let formDatas = querystring.parse(body);

        // For example, an '_id' field
        const deleteQuery = { _id: formDatas._id };

        await collection.deleteOne(deleteQuery)
            .then((result) => {
                if (result.deletedCount > 0) {
                    console.log("Document deleted successfully");

                    let response = {
                        success: true,
                        statusCode: 200,
                        message: "Document deleted successfully"
                    };

                    let json_response = JSON.stringify(response);
                    res.writeHead(200, { "Content-Type": "application/json" });
                    res.end(json_response);
                } else {
                    console.log("Document not found");

                    let response = {
                        success: false,
                        statusCode: 404,
                        message: "Document not found"
                    };

                    let json_response = JSON.stringify(response);
                    res.writeHead(404, { "Content-Type": "application/json" });
                    res.end(json_response);
                }
            })
            .catch((error) => {
                console.log("Error deleting document:", error);

                let response = {
                    success: false,
                    statusCode: 500,
                    message: "Failed to delete document"
                };

                let json_response = JSON.stringify(response);
                res.writeHead(500, { "Content-Type": "application/json" });
                res.end(json_response);
            });
    });
}
})

connect()
    .then((message) => {
        console.log('message :', message);
    })
    .catch((error) => {
        console.log("error : ", error);
    })
    .finally(() => {
        server.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        })

    });