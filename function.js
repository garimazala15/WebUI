add()
add()
function add(){
    console.log("welcome to life cycle of function")
}
add()


function SI(){
    let p=10
    let si=p*p*p/100
    console.log(si)
}

SI()


//function with no name is called anonymus function 

//when we assign a function to a varibale it is called function expression

let anonymus=function(){
    console.log("anonymus function")
}

anonymus()

//aero function where introduced in ES6
let aero=()=>{
    console.log("aero function")
}

aero()

let area= ()=>{
    let l=4
    let w=5
    let a=l*w
    console.log("Area of rectangle is :",a)
}

area()

//