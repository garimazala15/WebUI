//objects in JS
//object can store all type of data inside it 
//object store data in key value pair .key is always unique
//we can obtain data from object using it's key 

/*
let  userDetails={
    name:"Garima",
    age:25,
    work:"Student",
    address:"Indore",
    gender:"Female",
    friends:["abc","xyz","qwr","dvfdgf"]
}

//accessing data from object using key 
console.log(userDetails.name)
console.log(userDetails.age)
//accesing array inside object
console.log(userDetails.friends[1])
console.log(typeof userDetails)


//nested object :object inside another object

let myData={
    name:"Garima",
    address:{
        houseNo:12,
        street:5,
        area:"indore"
    },
    number:["9098673927","7389511258"],
    age:25,

}

console.log(myData.number[1])
console.log(myData.address.street)
//update key value
myData.name="Gargi"
myData.address.street=410
console.log(myData.name)
console.log(myData.address.street)

//insert new key value pair in object
myData.college="DAVV"
console.log(myData.college)

//delete key from  object
delete myData.name
console.log(myData)

let data={
    name:"John",
    age:35
}

console.log(data)
let a=data

a.name="abhay"

console.log(data)

/*let x={age:1}
let y={age:1}
let z=y

//comapred using address both are at different memory
console.log(x==y)
console.log(x===y)
console.log(x!=y)


let x={age:1}
let y={age:1}
let z=y

//comapred using address both are at different memory
console.log(y==z)
console.log(y===z)
console.log(y!=z)

console.log("        ")

let a1=[1,2,3,4,5,6]
let b1=[4,5,6,2,9,97]

console.log(a1==b1)
console.log(a1===b1)
console.log("         ")
console.log(a1==b1===true)


let emp={
    nam:"john",
    salary:45000,
    designation:"devloper"
}

console.log(Object.keys(emp))
console.log(Object.values(emp))
console.log(Object.entries(emp))


//this keyword

//let name="Garima zala"

let a={
    name:"code better",
    age:25,
    info:()=>{
        console.log(`Welcome ms/miss ${this.name}`)
    }
}



let b={
    name:"code better",
    age:25,
    info:function(){
        console.log(`Welcome ms/miss ${this.name}`)
    }
}

console.log(name)
a.info()
b.info()

*/


//object destructure

let obj={
    name:"garima",
    age:25,
    add:"indore"
}

const {name,age,add}=obj

console.log(name,age,add)

//nested object destructure
let obje={
    nm:"code better",
    lname:"coching",
    address:{
        street:47,
        area:"indore"
    }
}

const {address}=obje

console.log(address)

const {street,area}=address

console.log(street)
console.log(area)


let eleme={
    lo:"indore",
    role:{
        modle:"all",
        designation:"sotware developer"
    }
}

const {lo ,role:{modle,designation}}=eleme

console.log(lo)
console.log(modle)
console.log(designation)

//looping on objects


let your={
    direct:true,
    time:"anytime",
    sucess:"asfdfg",
    durability:"aFJTK"
}

for(let key in your){
    console.log(`${key}:${your[key]}`)
}

//freeze key not full object

let eassy={
    ag:35467,
    nation:"indian"
}

Object.defineProperty(eassy,"ag",{
    writable:false
})

eassy.ag=25
eassy.nation="uae"

console.log(eassy)
delete  eassy.ag
console.log(eassy)





