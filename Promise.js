/*states of promise :
1.resolve
2.reject
3.pending
*/

const myPromise=new Promise((resolve,reject)=>{
    //resolve()
   // reject()
})

//console.log(myPromise)
//console.log(typeof myPromise)


/*
new Promise((resolve,reject)=>{
    resolve("promise resolved")
    //reject("promise rejected")
}).then((res)=>console.log(res))
.catch((error)=>console.log(error))
.finally(()=>console.log("promise ended "))



const getData=async ()=>{
    console.log("async get data here")
    return await new Promise((resolve,reject)=>{
        console.log("async inside set timeout")
        setTimeout(() => {
            resolve("resolve called inside async set timeout")
            
        }, 5000);
    })
}
getData().then((res)=>console.log(res))
console.log("out of the function")
*/

const data=async ()=>{
    console.log("asdfghjukytrd")
    const myData=await new Promise((resolve,reject)=>{
        let isAvailable=false
        setTimeout(()=>{
            if(isAvailable){
                resolve("my data called after await")
            }
            else{
                reject("promise failed")
            }
        },5000)
    })

    console.log("hii")

    return myData
}

data().then((res)=>console.log(res)).catch((error)=>console.log(error))




const myFetch=fetch()

console.log(myFetch)
console.log(typeof myFetch)

