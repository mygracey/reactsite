import { useState } from 'react'

function About(){
    let[age, setAge]=useState(0)
    let[newage, setnewage]=useState(0)
    let[value, setValue]=useState("test this")
    let[textColor, setTextColor]=useState("")
    

    let increaseAge=()=>{
        setAge(age+=1)
    }

    let decreaseAge=()=>{
        setnewage(newage-=1)
    }

    let handleValue=(event)=>{
        setValue(event.target.value)
    }

    let handleTextColor=()=>{
        setTextColor(textColor==="black"?"red":"black")
    }

    
return (
    <div>

        <h1 style={{color:textColor}}>This is a test Color thingy</h1>
        <button onClick={handleTextColor}>changeTextColor</button>
        <h2>This is the About us Page</h2>
        <p>You are currently browsing the about us page</p>



        <button onClick={increaseAge}>{age}</button>
        <button onClick={decreaseAge}>{newage}</button>
        <br />

        <input type="text" onChange={handleValue}/>{value}

    </div>

    
)



}

export default About