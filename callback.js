/*const delivery=(cName)=>{
    console.log(`it is your delivery Ms/Miss : ${cName}`)

}

const signIn=(cName,delivery)=>{
    console.log(`enter your signature Mr/Miss: ${cName}`)
    console.log("Signature")
    delivery(cName)


}

const customer=(cName,signIn)=>{
    console.log("enter your name:")
    console.log(`Welcome Ms/Miss: ${cName}`)
    signIn(cName,delivery)

}

customer("Garima",signIn)

console.log("             ")

customer("code better",signIn)


const chef=(order)=>{
    return `your order is completed : ${order}`
    return `your bill amount is ${price}`

}

const waiter=(order,chef,billing)=>{
    return chef(order)
    return billing(78)

}
const billing=(price)=>{

    return waiter(billing,customer)

}

const customer=(order,waiter)=>{
    return waiter(order,chef)
}

console.log(customer("Kachori",waiter))

*/

console.log("Engine started")
setTimeout(()=>{
    console.log("this is set time out called 1s",)
},1000)

setTimeout(()=>{
    console.log("this is set time out called 3s",)
},3000)
setTimeout(()=>{
    console.log("this is set time out called 5s",)
},5000)
setTimeout(()=>{
    console.log("this is set time out called 10s",)
},10000)




console.log("Engine stopped")
