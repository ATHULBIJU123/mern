const http = require('http');
const url = require('url');
const port = 3000;
const fs = require('fs');
const querystring = require('querystring');
const { MongoClient } = require('mongodb');
const { error } = require('console');

const mongodb_url = 'mongodb://localhost:27017';
const client = new MongoClient(mongodb_url);

const dbName = 'users';
const collName = 'todo';

async function connect() {
    //Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    return 'done';
}

const server = http.createServer((req, res) => 
{

    const db = client.db(dbName);
    const collection = db.collection(collName);

    const req_url = req.url;
    console.log("req_url :", req_url);

    let parsed_url = url.parse(req.url);
    console.log("parsed_url : ", parsed_url);

    if (parsed_url.pathname === '/' && req.method === "GET") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(fs.readFileSync('../Client/index.html'));
    } else if (parsed_url.pathname === '/style.css' && req.method === "GET") {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(fs.readFileSync('../Client/style.css'));
    } else if (parsed_url.pathname === '/scr.js' && req.method === "GET") {
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.end(fs.readFileSync('../Client/scr.js'));
    }
})
