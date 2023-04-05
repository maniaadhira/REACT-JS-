import { useState } from "react"

function Child(parameter){

    const[child,setchild] = useState('')

    const submit = () => {
        parameter.parentvalue(child)
        setchild('')
    }
    

    return(

        <div>

        <h2>CHILD INBOX</h2>

        {parameter.childvalue.map((Element,index)=> {
            return(
                <p key={index}>{Element}</p>
            )
        })}
       
        <input type='text' placeholder="type here" onChange={((e) => {setchild(e.target.value)})}></input>

        <button onClick={submit}>click</button>

        </div>
    )
}
export default Child;





