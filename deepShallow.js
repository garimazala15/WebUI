//shallow copy
//it dosen't create new object both the object refers to same memory address
//whenever we make any change in shallow copy it will be reflect in original object also

let obj={
    nme:"code better",
    add:{
        street:27
    }
}


let my={...obj}

my.add.street=45
console.log(my)
console.log(obj)


console.log(obj.nme===my.nme)


//deep copy
//it will create new object for copy so both object refers to diff memory address
//change made in copy will not be reflected in original object 

let objc={
    age:3355,
    read:{
        book:"the idea of you"
    }
}

let deep=structuredClone(objc)
deep.age=25
deep.read.book="xyz"

console.log(deep)
console.log(objc)

let mine={
    data:"yes",
    type:{
        name:"abc"
    }
}

let deeper= JSON.parse(JSON.stringify(mine))
deeper.type.name="dfgg"
console.log(deeper)
console.log(mine)