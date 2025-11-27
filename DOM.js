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


form.addEventListener("submit",(e)=>{
    e.preventDefault()


    console.log(email.value,password.value,first_name.value,last_name.value,phone.value,compamy.value)






})