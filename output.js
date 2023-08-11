const x = "1";
const y = "2";

console.log(x,y)

//%s to format the string
//%d to format the number 
//%i for integer 
//%o for the object

// console.log("I name is %s and my age is %d","Anil Reddy",20)
// console.count("Anil")
// console.count("Anil")
// console.count("Anil")
// console.countReset("Anil")
// console.count("Anil")


const f1= ()=> console.log("function 1")
const f2= ()=> console.log("function 2")

const measureTime = ()=>{
    console.time("f1()");
    f1();
    console.timeEnd("f1()")
    console.time("f2()");
    f2();
    console.timeEnd("f2()")
}
measureTime()