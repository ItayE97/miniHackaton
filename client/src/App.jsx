import { useState } from 'react'
import './App.css'
import Axios from "axios"
import { Button } from "@mui/material";
function App() {
  const [data, SetData] = useState("");
  const fetchData = ()=>{
    Axios.get("https://excuser-three.vercel.app/v1/excuse/gaming/").then(
      (res)=>{
        // console.log(res.data[0].excuse)
        SetData(res.data[0].excuse)
      }
    )
  }
  return (
    <div>
      <button onClick={()=>fetchData()} >Fetch Data</button>
      <Button>awesome button</Button>
      <h1>Data: {data}</h1>
    </div>
  )
}
export default App;
