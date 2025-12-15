import React, { useState } from "react";
import { Button, Checkbox, Label, TextInput,Card } from "flowbite-react";

const App=()=>{


  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")
  const [password,setPassword]=useState("")
  const [Repeat,setRepeat]=useState("")

  const [data,setData]=useState({})

  const handleSubmit=(e)=>{
    e.preventDefault()
    const obj={name,email,phone,password,Repeat}

    setData(obj)
    console.log(obj)


  }


  return(
    <>   

     <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
      <div>
        
        <div className="mb-2 block">
          <Label>Enter Name</Label>
        </div>
        <TextInput type="text" value={name}  onChange={(e)=>setName(e.target.value)} required  />
      </div><div>
        
        <div className="mb-2 block">
          <Label>Enter email</Label>
        </div>
        <TextInput type="email" value={email}  onChange={(e)=>setEmail(e.target.value)} required   />
      </div>
      <div>
        
        <div className="mb-2 block">
          <Label>Enter Phone</Label>
        </div>
        <TextInput type="number" value={phone}  onChange={(e)=>setPhone(e.target.value)} required  />
      </div>
      <div>
        <div className="mb-2 block">
          <Label >Enter password</Label>
        </div>
        <TextInput  type="password"  value={password}  onChange={(e)=>setPassword(e.target.value)}required   />
      </div>
      <div>
        <div className="mb-2 block">
          <Label >Repeat Password</Label>
        </div>
        <TextInput  type="password" value={Repeat}  onChange={(e)=>setRepeat(e.target.value)} required   />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label>Remember me</Label>
      </div>
      <Button type="submit">Submit</Button>
    </form> 

    {data.Repeat ?<>

     <Card className="max-w-sm mt-10">
      <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">User Info</h5>
     
      <ul className="my-7 space-y-5">
        <li className="flex space-x-3">
          <svg
            className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Name:{name}</span>
        </li>
        <li className="flex space-x-3">
          <svg
            className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
            Email:{email}
          </span>
        </li>
        <li className="flex space-x-3">
          <svg
            className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Phone:{phone}</span>
        </li>
        <li className="flex space-x-3 line-through decoration-gray-500">
          <svg
            className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500">Password:{password}</span>
        </li>
        <li className="flex space-x-3 line-through decoration-gray-500">
          <svg
            className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500">Repeat Password:{Repeat}</span>
        </li>
        
       
      </ul>
      <button
        type="button"
        className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
      >
        Choose plan
      </button>
    </Card>
    
    </>:"loading"}
    </>
  )
}
export default App;