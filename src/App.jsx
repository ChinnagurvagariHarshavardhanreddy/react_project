import { useState } from 'react'
import './App.css'

function App() {
  const [data,setdata] = useState("");
  const handled =async ()=>{
  try{
    const respond =(await fetch('https://dummyjson.com/products?limit=5&select=title,price'));
    const information = await respond.json();
    setdata(JSON.stringify(information,null,2));
  }
  catch(error){
    console.log('error is there');
  }
  };
  return (
    <>
      <h1>this is json fetch</h1>
      <button type="submit" onClick={handled} >click to fetch</button>
      <pre>{data}</pre>
    </>
  );
}

export default App;