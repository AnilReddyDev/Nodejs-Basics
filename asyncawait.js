const prompt = require('prompt-sync')()
const userlogin = () => {
    console.log("Enter your username and password")
    let userName = prompt("Enter your username : ")
    let password = prompt("Enter your password : ")
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("performing the Authentication")
        if (userName === "anil" && password === "12345678"){
            resolve("Authentication success")
        }else{
            reject("Authentication failed!")
        }
        },1000)
    })
}

const goToHomePage = (userauthstatus) =>{
    return Promise.resolve(`Go to HomePage as : ${userauthstatus}`)
}

// userlogin().then((response)=>{
//     console.log("validate user")
//     return gotohome(response)
// }).then((userauthstatus)=>{
//     console.log(userauthstatus)
// }) this can be done in better way using async& await

async function performtask(){
    try {
        const response = await userlogin();
    console.log("Validated User")
    const userAuthStatus = await goToHomePage(response)
    console.log(userAuthStatus)
    } catch (err) {
        console.log(err)
    }
}

performtask()