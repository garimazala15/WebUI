/*let count=0
const stop=setInterval(()=>{
    console.log("this is set interval")
    count++
    if(count===10)  clearInterval(stop)
    },2000)

let count=0
const stop=setInterval(()=>{
    count++
    let date=new Date()
    console.log(date.toLocaleTimeString())
    if(count===10)  clearInterval(stop)
    },2000)

*/
let count=0
    for(var i=1;i<=3;i++){
        count++
        let set=setInterval(()=>{
            console.log(i)
            if(count===3) clearInterval(set)
        },1000)
    }