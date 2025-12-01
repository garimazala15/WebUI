let form=document.getElementById("handleForm")

let email=document.getElementById("email")
let password=document.getElementById("password")
let first_name=document.getElementById("first_name")
let last_name=document.getElementById("last_name")
let phone=document.getElementById("phone")
let company=document.getElementById("company")


email.addEventListener("blur",(e)=>{
    e.preventDefault()

    let emailError=document.getElementById("emailError")

    if(!email.value){
        emailError.innerText="please enter proper email"

    }
    else{
        emailError.innerText=""
    }
})


//password
password.addEventListener("blur",()=>{
    let password=document.getElementById("passwordError")
    if(!password.value){
        passwordError.innerText="please enter proper password"
    }
    else{
        passwordError.innerText=""
    }
})

//name
first_name.addEventListener("blur",()=>{
    let nameError=document.getElementById("nameError")
    let name=nameError.value

    if(name.length<=3){
        nameError.innerText="please enter proper name of more than 3 chars"
    }
    else{
        nameError.innerText=""
    }
})

//last_name
last_name.addEventListener("blur",()=>{
    let nameError=document.getElementById("nameError")
    let name=nameError.value

    if(name.length<=3){
        nameError.innerText="please enter proper name of more than 3 chars"
    }
    else{
        nameError.innerText=""
    }
})

//phone
first_name.addEventListener("blur",()=>{
    let nameError=document.getElementById("nameError")
    let name=nameError.value

    if(name.length<=3){
        nameError.innerText="please enter proper name of more than 3 chars"
    }
    else{
        passwordError.innerText=""
    }
})
//company
first_name.addEventListener("blur",()=>{
    let nameError=document.getElementById("nameError")
    let name=nameError.value

    if(name.length<=3){
        nameError.innerText="please enter proper name of more than 3 chars"
    }
    else{
        passwordError.innerText=""
    }
})

form.addEventListener("submit",(e)=>{
    e.preventDefault()


    console.log(email.value,password.value,first_name.value,last_name.value,phone.value,company.value)
    
})


let tr=document.createElement("tr")

let td1=document.createElement("td1")
let td2=document.createElement("td2")
let td3=document.createElement("td3")
let td4=document.createElement("td4")
let td5=document.createElement("td5")
let td6=document.createElement("td6")


td1.innerText=email.value
td2.innerText=password.value
td3.innerText=first_name.value
td4.innerText=last_name.value
td5.innerText=phone.value
td6.innerText=company.value


tr.appendChild(td1)
tr.appendChild(td2)
tr.appendChild(td3)
tr.appendChild(td4)
tr.appendChild(td5)
tr.appendChild(td6)

t_body.appendChild(tr)