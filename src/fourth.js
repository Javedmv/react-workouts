import {useState} from "react";

function Form(){
    const [text,setText] = useState('');
    function handleChange(e){
        setText(e.target.value);
    }

    return (
        <>
            <p>Name:</p>
            <input type="text" placeholder="Enter your name" style={{marginLeft:'10px', height:'25px'}} onChange={handleChange} value={text}></input>
            <button type="submit" style={{height:'30px'}} onClick={()=> console.log(text)}>Submit</button>
        </>
    )
}

export default Form;