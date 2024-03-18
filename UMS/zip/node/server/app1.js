const http = require('http');
const { MongoClient } = require('mongodb');

const server = http.createServer(async (req, res) => {
    if (req.method === 'POST') {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', async () => {
            try {
                // Parse the JSON data received from the client
                const data = JSON.parse(body);

                // Connect to MongoDB
                const client = new MongoClient('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });
                await client.connect();

                // Access the database and collection
                const db = client.db('your-database-name');
                const collection = db.collection('your-collection-name');

                // Insert the data into the collection
                await collection.insertOne(data);

                // Close the database connection
                await client.close();

                // Send a response to the client
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('Data saved to the database!');
            } catch (error) {
                console.error('Error:', error);
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
