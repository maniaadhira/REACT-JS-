
import { useState } from 'react'
import Child from './Child'




function App(){

  const[app,setapp] = useState('')

  const[data,setdata] = useState([])

  const[m,setm] = useState([])

  
  const childdata = (x) => {
    setdata([...data,x])
  }

const click = () => {
  setm([...m,app])
}

  return(

<div>

    <h1><u>PARENT TO CHILD COMMUNICATIONS</u></h1>

    <h2>PARENT INBOX</h2>

    {data.map((Element,index)=>{
      return(
        <p key={index}>{Element}</p>
      )
    })}

    <input type='text' placeholder="type here" onChange={((e)=> {setapp(e.target.value)})}></input>

    <button onClick={click}>child</button>

    <Child parentvalue={childdata} childvalue={m}></Child>

  </div>
   )
}
export default App;




