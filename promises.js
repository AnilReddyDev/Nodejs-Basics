// const promise = new Promise((resolve,reject)=>{
//     console.log("Async task excution")
//     if(true){
//         resolve()
//     }else{
//         reject();
//     }
// })

// promise.then(
//     ()=>{
//         console.log("success!!")
//     },
//     ()=>{
//         console.log("failed!!")
//     }
// )


const promise = new Promise((resolve, reject) => {
    console.log("Async task excution")
    if (false) {
        const name = { name: "Anil" }
        resolve(name)
    } else {
        const err = { errCode: 401 }
        reject(err);
    }
})

promise.then(
    (val) => {
        console.log(val)
    },
    // (err)=>{
    //     console.log(err)
    // }if error is not handled here it goes to catch 
)
.catch((err) => console.log("failed!",err))
.finally(()=> console.log("clean up"))


//async using promises
function asyncTask(){
    return Promise.resolve()
}

asyncTask().then(()=>console.log(name1)).catch(()=>console.log("Name not found!!"))
const name1 = "Anil Reddy"

//promises chain ..
//while writing multiple then we should alway return something in order to excute next then
const p = Promise.resolve("task-1")

p.then((val)=>{
    console.log(val);//task-1
    return "task-2"
})
.then((val)=>{
    console.log(val)//task-2
    return "task-3"
})
.then((val)=>{
    console.log(val)//task-3
}).catch((err)=>console.log(err))

//using the promises all and race 

const makeApiCall = (time)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("This Api executed in: "+time)
        },time)
    })
}

let mutliApical = [makeApiCall(1000),makeApiCall(2000),makeApiCall(500)]

Promise.all(mutliApical).then((values)=>{
    console.log(values)
})

Promise.race(mutliApical).then((val)=>{
    console.log(val) //returns the value of function which executed first 
})