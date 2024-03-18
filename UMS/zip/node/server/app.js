const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {

    console.log("url : ", req.url);
    // Parse the request URL
    const parsedUrl = url.parse(req.url);
    console.log("parsedUrl : ", parsedUrl);

    // Serve the HTML file on root request
    if (parsedUrl.pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(require('fs').readFileSync('../client/index.html'));
    }

    // Handle form submission on POST request to /submit
    if (req.method === 'POST' && parsedUrl.pathname === '/submit') {
        console.log("reached here...");
        let body = '';

        // Collect data as it comes in chunks
        req.on('data', (chunk) => {
            console.log("chunk : ", chunk);
            console.log(`chunk.toString() : ${chunk} : `, chunk.toString())
            body += chunk.toString();
        });

        // Process the form data on end of the request
        req.on('end', () => {
            console.log("body : ", body);
            const formData = querystring.parse(body);
            console.log("formData : ", formData);

            // Do something with the submitted data (e.g., save to a database)
            console.log(`Received data: Name - ${formData.name}, Email - ${formData.email}`);

            // Send a response (you can customize this based on your needs)
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Form submitted successfully!');
        });
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
