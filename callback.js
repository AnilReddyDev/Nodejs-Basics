console.log("callback async function")
function func1(cbf){
    console.log("inside func1")
    setTimeout(()=>{
        cbf(null,"this is cbf function")
    },0);
}

func1((error,data)=>{
    if (error) {
        console.log(error)
    } else {
        console.log(data)
    }
})

console.log("callback function end")