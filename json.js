//json:json stands for javascript object notation
//it is language independent
//we use json mostly for data flow from frontend to backend and vice-versa
//before json xml was used 
//key and value both are string



let jsonObject=`{
           "name":"garima",
           "age":23
           
           }`

console.log(jsonObject)

//convert into js object

let jsObj=JSON.parse(jsonObject)

console.log(jsObj)

console.log(typeof jsObj)


let javascriptobj={
    code:"hii",
    git:"2345"
}

console.log("              ")
console.log(javascriptobj)

//change js object into json

let jsobj=JSON.stringify(javascriptobj)

console.log(jsobj)

console.log(typeof jsobj)


