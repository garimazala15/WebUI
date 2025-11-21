//fetch return promise
//stream
//response object

//https://jsonplaceholder.typicode.com/todos?userId=3
let data=fetch("https://jsonplaceholder.typicode.com/todos/3")

data.then(res=>res.json())
.then(res=>console.log(res))
.then(res=>console.log(res.title))
.catch(err=>console.log(err))