import React from 'react';

const App = () => {
  let name = "Garima";
  let age = 25;
  let mobile="9098673927";
  let rating=5;

  let data=true;

  if(data ===true){
    return (<h1>loading......</h1>)
  }

  let design={
    color:"red",
    backgroundColor:"green",
    fontSize:"56px",
    fontWeight:"900"
  }

  return (
    <div>
      <h1 style={{color:"red"}}>Name: {name}</h1>
      <h2 style={{backgroundcolor:"green"}}>Age: {age}</h2>
      <h2 style={design}>Mobile:{mobile}</h2>
      <h3>Hey welcome you all </h3>

      <h1 style={{color:(age>3)?"red":"green"}}>age:{age}</h1>
<h1 style={{color:(rating>=7)?"red":"green"}}>rating:{rating}</h1>

    </div>
  );
};

export default App;
