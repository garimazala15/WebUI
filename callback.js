const delivery=(cName)=>{
    console.log(`it is your delivery Ms/Miss : ${cName}`)

}

const signIn=(cName,delivery)=>{
    console.log(`enter your signature Mr/Miss: ${cName}`)
    console.log("Signature")
    delivery(cName)


}

const custm=(cName,signIn)=>{
    console.log("enter your name:")
    console.log(`Welcome Ms/Miss: ${cName}`)
    signIn(cName,delivery)

}

custm("Garima",signIn)

console.log("             ")

custm("code better",signIn)

console.log("                          ")



const menu={           //menu in js object  storing key value pair
    "kachori":50,
    "Samosa": 40,
    "Chole Bhature": 120,
    "Pav Bhaji": 90,
    "Masala Dosa": 100,
    "Coke":50

}

const chef=(order)=>{
    return `your order ${order} is prepared and ready to serve!`

}

const bill=(order)=>{
    const price=menu[order]
    if(!price)
        return `sorry  ${order} not available in menu!`

    return `your total bill for ${order} is ${price}`
}

const waiter=(order,chef,bill)=>{
    if(!menu[order])
        return `sorry, ${order} is not on today's menu!`
    return `${chef(order)}\n${bill(order)}`

}

const customer=(order,waiter)=>{
    return waiter(order,chef,bill)
}

console.log(customer("Pav Bhaji",waiter))

console.log("                          ")

console.log(customer("Samosa",waiter))

console.log("                          ")

console.log(customer("Coke",waiter))

console.log("                          ")

console.log(customer("frutie",waiter))






