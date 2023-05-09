import { useState } from 'react'
import './App.css'
import Axios from "axios"
import { Button } from "@mui/material";
function App() {
  const [data, SetData] = useState("");
  const fetchData = ()=>{
    Axios.get("http://localhost:5001/api").then(
      (res)=>{
        console.log(res.data)
        // SetData(res.data.massage)
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
