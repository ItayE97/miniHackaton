import { useEffect, useState } from 'react'
import './App.css'
import Axios from "axios"
import { Button, TextField } from "@mui/material";
function App() {
  const [data, SetData] = useState("opt");
  const [user, SetUser] = useState("no users");
  const [text, setText] = useState("");
  const fetchMessage = ()=>{
    Axios.get("http://localhost:5001/api").then(
      (res)=>{
        SetData(res.data.message)
      }
    )
  }
  const fetchUser = (props)=>{
    Axios.get(`http://localhost:5001/users?id=${props.id}&name=${props.name}`)
    .then(
      (res)=>{
        SetUser(res.data.age)
        // console.log(res.data)
      }
    )
  }
  const fetchExcuse = (props)=>{
    console.log(props)
    Axios.get(`http://localhost:5001/excuse?theme=${props}`)
    .then(
      (res)=>{
        // SetUser(res.data)
        console.log(res.data[0].excuse);
      }
    )
  }
  // useEffect(() =>{

  // }, [])

  return (
    <div>
      <Button onClick={()=>fetchMessage()} >Fetch simple massage:</Button>
      <h1>{data}</h1>
      <Button onClick={()=>fetchUser({id:"1", name:"yosi"})} >Fetch user using user ID</Button>
      <h1>{user}</h1>
      <TextField id="standard-basic" label="Standard" variant="standard" onChange={(Event) => {
        setText(Event.target.value)
      }} />
            <Button onClick={()=>fetchExcuse(text)} sx={{height:"250"}} >Fetch excuse</Button>
            <h4>{text}</h4>
    </div>
  )
}
export default App;
