
import {useState} from 'react'

function Form(){
const[todolist, setTodoList]=useState("")

let handleclick=(event)=>{
    setTodoList(event.target.value)
}

    return <div>
{todolist}
<input type="text" onChange={handleclick} />


    </div>

}

export default Form