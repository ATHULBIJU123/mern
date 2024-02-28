const http = require('http');
const url = require('url');
const port = 3000;
const fs = require('fs');

const server = http.createServer((req, res) => {

    const req_url = req.url;
    console.log("req_url :", req_url);

    let parsed_url = url.parse(req.url);
    console.log("parsed_url : ", parsed_url);

    if (parsed_url.pathname === '/' && req.method === "GET") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(fs.readFileSync('../client/index.html'));
    } else if (parsed_url.pathname === '/style.css' && req.method === "GET") {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(fs.readFileSync('../client/style.css'));
    } else if (parsed_url.pathname === '/script.js' && req.method === "GET") {
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.end(fs.readFileSync('../client/script.js'));
    }

    if (req.method === "POST" && parsed_url.pathname === "/submit") {

        let body = "";

        req.on('data', (chunks) => {
            console.log("Chunks :", chunks);
            body = chunks.toString();
            console.log("body : ", body);
        });

        req.on('end', () => {
            let formDatas = querystring.parse(body);
            console.log("formDatas :", formDatas);

            //Do something with the submitted Data ( Eg: Save to a database)
            console.log("Name : ", formDatas.name);
            console.log("Email : ",formDatas.email);
            console.log("Password : ", formDatas.password);

            let response = {
                success : true,
                statusCode : 200,
                data : formDatas,
                message : "Form Datas submitted Successfully"
            }

            let json_response = JSON.stringify(response);
            console.log("json_response : ", json_response);

            res.writeHead(200, {"Content - Type" : "text/json"});
            res.end(json_response);
        });


    }

})

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});