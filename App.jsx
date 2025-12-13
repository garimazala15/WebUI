import React from "react";
import { useRef } from "react";
import { useState } from "react";

const App=()=>{

  let [data,setData]=useState({})  

  let name=useRef()

  const handleinput=()=>{
    console.log(name.current.value)
    let nm=name.current.value

    setData({nm})
  }
  return(
    <>

   <form onSubmit={handleinput}>
   
   
<input type="text" ref={name} /> 

<input type="submit" value="submit" />
   
   </form>

   <h1>name:{data.nm}</h1>
</>

  )
}
export default App;