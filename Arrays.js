let arr=[12,44,77,996,4456,5]

for(let i=0;i<=arr.length-1;i++){
    console.log(arr[i])
}

console.log("-------------------------")
for(let i=arr.length-1;i>=0;i--){
    console.log(arr[i])
}


//reverse array

let ex=[100,200,300,400,500,600]

let revEx=[]

for(let i=ex.length-1;i>=0;i--){

    revEx.push(ex[i])

}

console.log(revEx)

//sepreate number and string from array

let re=["abc",78,"data",9,"yrt",4528,null,undefined,NaN]

let num=[]
let char=[]
let extra=[]
for(let i=0;i<re.length;i++){

    if(typeof re[i]==='number'){
        num.push(re[i])
    }

    else if(typeof re[i]==='string'){
        char.push(re[i])
    }

    else{
        extra.push(re[i])
    }
}

console.log(num)
console.log(char)
console.log(extra)


//find largest element

let rem=[37,89,234,87,45,678,75,456]

let largest=rem[0]

for(let i=0;i<=rem.length-1;i++){
    if(rem[i]>largest){
        largest=rem[i]
    }
}

console.log(largest)


//find smallest element

let rem2=[37,789,234,87,45,678,75,456,9]

let smallest=Infinity
let smallestVar=null

for(let i=0;i<=rem2.length-1;i++){
    if(rem2[i]<smallest){
        smallest=rem2[i]
        smallestVar=smallest
    }
}

console.log(smallestVar)


//ascending and descending order in array

//ascending
let arr2=[34,67,899,32,567,24,4,56,8,65]
let temp=null

for(let i=0;i<arr2.length-1;i++){
    for(let j=0;j<arr2.length-1;j++){
        if(arr2[j]>arr2[j+1]){
            temp=arr2[j]
            arr2[j]=arr2[j+1]
            arr2[j+1]=temp


        }
    }
}

console.log("Array in ascending order:",arr2)

//descending 
let arr3=[2,5,7,9,8,12,34,56,78]

for(let i=0;i<arr3.length-1;i++){
    for(let j=0;j<arr3.length-1;j++){
        if(arr3[j]<arr3[j+1]){
            let temp=arr3[j]
            arr3[j]=arr3[j+1]
            arr3[j+1]=temp


        }
    }
}

console.log("Array in descending order:",arr3)









