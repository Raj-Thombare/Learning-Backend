const http = require('http');
// require('dotenv').config();

const PORT = process.env.PORT || 5001;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json")
    res.write(JSON.stringify({
        message: 'Hello, I am Raj Thombare'
    }))
    res.end();
})

server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})