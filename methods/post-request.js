const requestBodyParser = require('../utils/body-parser')
const crypto = require('crypto')

module.exports = async (req, res) => {
    if (req.url === "/api/movies") {
        try {
            const body = await requestBodyParser(req);
            console.log("Request Body: ", body)
        } catch (error) { }
    }
};