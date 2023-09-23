import {useState} from 'react'

function Hooks(){
const[text, setText]=useState("This is just a test run")

    let handleClicks=()=>{
        setText(text==="This is just a test run? And this is great stuff:This is just a test run")
    }

return (
    <div>

        <h1>{text}</h1>
        <button onClick={handleClicks}>Click me</button>


    </div>
)

}

export default Hooks