const path = require("path")

const filePath = "/Users/YusufAnsari/Rakaa/dev/learning-nodejs/files/sample.txt"

//dirname
// console.log(path.dirname(filePath)) // /Users/YusufAnsari/Rakaa/dev/learning-nodejs/files
// //basename
// console.log(path.basename(filePath)) // sample.txt
// //extention
// console.log(path.extname(filePath)) // .txt
// console.log("___________________________")
// // * Join paths

// const rakaa = "rakaa.txt"

// console.log(path.join(path.dirname(filePath), rakaa))

// ! Reading File

const fs = require("fs")
const fsPromise = require("fs").promises;

// ? Reading from a file - Async
// fs.readFile(filePath, "utf-8", (err, data) => {

//     if (err) throw new Error("Something went wrong!")
//     console.log(data)
// })

// ? Reading from a file - sync
// try {
//     const data = fs.readFileSync(path.join(__dirname, "files", "text.txt"), "utf-8")
//     console.log(data)
// } catch (err) {
//     console.log(err)
// }

// ? Reading from a file using async await
// const fileReading = async () => {
//     try {
//         const data = await fsPromise.readFile(filePath, { encoding: 'utf-8' })
//         console.log("FS Promise: " , data)
//     } catch (err) {
//         console.log(err)
//     }
// }
// fileReading();

// ! Writing to a file

const textFile = path.join(__dirname, "files", "text.txt")
const content = "This text file is modified by Rakaa"

// ? writing to a file asynchronously!

// fs.writeFile(textFile, content, (err) => {
//     if (err) throw new Error("Something went wrong!")
//     console.log("Write operation completed successfully!")

//     fs.readFile(textFile, "utf-8", (err, data) => {
//         if (err) throw new Error("Something went wrong while reading file")
//         console.log(data)
//     })
// })

// ? writing to a file synchronously!

// try {
//     const data = fs.writeFileSync(textFile, content)
//     console.log("file modified successfully!")
//        fs.readFile(textFile, "utf-8", (err, data) => {
//         if (err) throw new Error("Something went wrong while reading file")
//         console.log(data)
//     })
// }catch(err){
//     console.log(err)
// }

// ? writing to a file using async await

// const fileWriting = async () => {
//     try {
//         await fsPromise.writeFile(textFile, content)
//         console.log("file modified successfully!")
//         const data = await fsPromise.readFile(textFile, "utf-8")
//         console.log(data)
//     } catch (err) {
//         console.log(err)
//     }
// }

// fileWriting()

// ! appending into a file

// const appendingFile = async () => {
//     try {
//         // * appending using writeFile - 
//         await fsPromise.writeFile(textFile, "\n This text is appended using writeFile", {
//             flag: "a+", // * flag takes head position at the end of the file!
//         })

//         // await fsPromise.appendFile(textFile, "\n This is a new line appended!")
//         const data = await fsPromise.readFile(textFile, "utf-8")
//         console.log(data)
//     } catch (err) {
//         console.log(err)
//     }
// }

// appendingFile();

// ! renaming a file

const renameFile = async () => {
    try {
        await fsPromise.writeFile(textFile, "\n This file is renamed to text2.txt from text.txt", {
            flag: "a+",
        })

        await fsPromise.rename(textFile, path.join(__dirname, "files", "text2.txt"))

        const data = await fsPromise.readFile(textFile, "utf-8")
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}

renameFile();