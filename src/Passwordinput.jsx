import { useRef, useState } from "react"

export default function PasswordInput(props){

console.log(props.minimum);

const inputElement = useRef(null)


const [error,setError]=useState(false)




    function inputHandler(event){





const value= inputElement.current.value;
if(value.length < props.minimum){
    setError("er du dum?")
    
}
else{
    setError(false)
}

if(value.length >=props.minimum){
setError("alt for stort")
}

    }
    return(
        <>
        <input ref={inputElement} onInput={inputHandler}type="password" {...props} />
       {error && <p>{error}</p>}
</>
    )
}