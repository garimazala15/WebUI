const user_data=()=>{
    console.log("this is user data function")

    setTimeout(()=>{
        setTimeout(()=>{
            console.log("internal timeout")
        },2000)
        console.log("external timeout")
    },5000)
    console.log("this is end of user data")
}

user_data()