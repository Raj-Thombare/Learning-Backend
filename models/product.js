// const fs = require("fs")
// const path = require("path")

// const Cart = require('./cart')
const getDb = require('../util/database').getDb;

// const p = path.join(
//     path.dirname(require.main.filename), "data", "products.json"
// )

module.exports = class Product {
    constructor(title, price, description, imgUrl) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.imgUrl = imgUrl;
    }

    save() {
        const db = getDb();
        return db.collection('products').insertOne(this).then(result => {
            console.log('Product inserted:', result)
        }).catch(err => {
            console.log('Error inserting product:', err);
        });
    }
}

// const getProductsFromFile = (cb) => {
//     fs.readFile(p, (err, fileContent) => {
//         if (err) {
//             cb([])
//         } else {
//             cb(JSON.parse(fileContent))
//         }
//     })
// }

// module.exports = class Product {

//     constructor(id, title, imageUrl, description, price) {
//         this.id = id;
//         this.title = title;
//         this.imageUrl = imageUrl;
//         this.description = description;
//         this.price = price;
//     }
//     // C: \Users\rajth\Dev\Learning - Backend

//     save() {
//         getProductsFromFile((products) => {
//             if (this.id) {
//                 const existingProductIndex = products.findIndex(prod => prod.id === this.id);
//                 const updatedProducts = [...products];
//                 updatedProducts[existingProductIndex] = this;
//                 fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
//                     console.log(err)
//                 })
//             } else {
//                 this.id = Math.random().toString();
//                 products.push(this)
//                 fs.writeFile(p, JSON.stringify(products), (err) => {
//                     console.log(err)
//                 })
//             }
//         })
//     }

//     static deleteById(id) {
//         getProductsFromFile(products => {
//             const product = products.find(prod => prod.id === id);
//             const updatedProducts = products.filter(prod => prod.id !== id);
//             fs.writeFile(p, JSON.stringify(updatedProducts), err => {
//                 if (!err) {
//                     Cart.deleteProduct(id, product.price);
//                 }
//             });
//         });
//     }

//     static fetchAll(cb) {
//         getProductsFromFile(cb)
//     }

//     static findById(id, cb) {
//         getProductsFromFile(products => {
//             const product = products.find(p => p.id === id);
//             cb(product);
//         })
//     }
// }