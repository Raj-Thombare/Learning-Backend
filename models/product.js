const fs = require("fs")
const path = require("path")

module.exports = class Product {

    constructor(t) {
        this.title = t;
    }

    save() {
        // C: \Users\rajth\Dev\Learning - Backend

        let products = [];
        const p = path.join(
            path.dirname(require.main.filename), "data", "products.json"
        )
        fs.readFile(p, (err, fileContent) => {
            if (!err) {
                products = JSON.parse(fileContent)
            }
            products.push(this)
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err)
            })
        })

    }

    static fetchAll(cb) {
        const p = path.join(
            path.dirname(require.main.filename), "data", "products.json"
        )
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                cb([])
            } else {
                cb(JSON.parse(fileContent))
            }
        })
    }
}