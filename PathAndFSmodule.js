const path = require('path')

// const filePath = "/home/anil/nodejslearning/nodejsff/repl.js"

// //This gives the directory name
// console.log(path.dirname(filePath))

// //This gives the extension path name
// console.log(path.extname(filePath))

// //This gives the base path name
// console.log(path.basename(filePath))

// const filepath = "sample.txt"
// //This gives the join path name
// console.log(path.join(path.dirname(filePath),filepath))

const fpath = "files/sample.txt"
const fs = require('fs')
const fsPromises = require('fs').promises

// fs.readFile(fpath,"utf-8",(err,data)=>{
//     if (err) throw new Error("Something went wrong")
//     console.log(data)
// })

// try {
//     const data = fs.readFileSync(path.join(__dirname,"files","sample1.txt"),"utf-8");
// console.log(data)
// } catch (error) {
//     console.log(error)
// }

// const filereading = async ()=>{
//     try {
//         const data = await fsPromises.readFile(fpath,{encoding:"utf-8"});
//         console.log(data)
//     } catch (error) {
//     console.log(error)        
//     }
// }
// filereading()

// writing into the file
const textFile = path.join(__dirname,"files","text.txt")
const content = "I am writing the data into file."

// fs.writeFile(textFile,content,(err)=>{
//     if (err) throw new Error("Something went wrong")
//     console.log("data written")
// })

//writing and reading using fspromises

const readAndWriteFile = async ()=>{
    try {
        await fsPromises.writeFile(textFile,content);
        await fsPromises.writeFile(textFile,"we have changed the name of the file",{
            flag:"a+"
        });//with this we can append data to file instead of overwriting it.
    // await fsPromises.appendFile(textFile,"Writing data using appendFile.");
    await fsPromises.rename(textFile,path.join(__dirname,"files","newtext.txt"))
    const data = await fsPromises.readFile(path.join(__dirname,"files","newtext.txt"));
    console.log(data.toString())
    } catch (error) {
        console.log(error)
    }
}
readAndWriteFile()