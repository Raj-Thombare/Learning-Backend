const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

const uri = 'mongodb+srv://Raj:ogsFAMR9sJ5Rh1rW@cluster0.f7mohae.mongodb.net/shop?retryWrites=true&w=majority';

let _db;

const mongoConnect = (callback) => {
    mongoClient.connect(uri).then(client => {
        console.log("DB Connected!")
        _db = client.db('shop');
        callback();
    }).catch((err) => {
        console.log('util, db.js', err)
        throw err;
    })
}

const getDb = () => {
    if (_db) {
        return _db;
    }

    throw 'Database not found!'
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

// const { MongoClient } = require('mongodb');
// const Product = require('../models/product')

// const uri = 'mongodb+srv://Raj:ogsFAMR9sJ5Rh1rW@cluster0.f7mohae.mongodb.net/shop?retryWrites=true&w=majority';
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// async function connectToMongoDB() {
//     try {

//         await client.connect();

//         const db = client.db('shop');
//         const collection = db.collection('products');
//         const product = new Product('Rakaa', 98, 'very good', 'img url');
//         const result = await collection.insertOne(product);
//         console.log('Inserted document with _id:', result.insertedId);

//         client.close();
//         console.log('Connection closed.');
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//     }
// }

// connectToMongoDB();
