// The ways to throw the error and error handling

function doSomething(){
    // throw new customError("This is customError in dosomething function")
    fetch("localhost:5000")
    console.log("This is do something function")
}
//1st
// const error = new Error("This is error object")
// console.log(error)

//2nd
// throw new Error("This is error object 2")

//3rd way writing customError
// const {customError} = require('./customError')
// throw new customError("This is error object 3")

//4th 
// try{
//     doSomething()

// }catch(e){
//     console.log(e) 
// }

//5th uncaught exception
// process.on("uncaughtException",(error)=>{
//     console.log("uncaught exception")
//     process.exit(1)
// })
// doSomething()

//6th 
// const async = async ()=>{
//     try{
//         await doSomething()
//     }catch(e){
//         throw new customError(e.message)
//     }
// }

//7th we can also handle exception using promises