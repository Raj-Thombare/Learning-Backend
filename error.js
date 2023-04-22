
const error = false;

// if (error) {
//     throw new Error("Error Occured!")
// } else {
//     console.log("nothing")
// }

const error2 = new Error("Something went wrong!")
// console.log(error2.stack)
// console.log(error2.message)

// * Custom Error 

const { customError } = require('./customError')

// throw new customError("Good day to me! Buh Buh!!")

// * Try & Catch

// try {
//     doSomething();
// } catch (e) {
//     console.log("Error 2X")
//     console.log(e)
// }

function doSomething() {
    console.log("doSomething called")
    const data = fetch('localhost:500/api')
    // const data = "i am from doSomething"
    return data
}

// * uncaught exception

// process.on("uncaught exception", (err) => {
//     console.log("uncaught exception occured!", err)
//     process.exit(1)
// })

// * exceptions with promises

// const promise = new Promise((resolve, reject) => {
//     if (true) {
//         resolve(doSomething())
//     } else {
//         reject(doSomething())
//     }
// })

// promise.then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log("error occured")
//     console.log(err)
// })

// * exceptions with Async Await

const xyz = async () => {
    try {
        await doSomething()
    } catch(err) {
        throw new Error(err.message)
    }
}

xyz();