import { useState } from "react";

const CheerForm = (props) => {
    const [input, setInput] = useState("");

    const submit = (event) => {
        event.preventDefault();
        props.onSubmit(input);
    };

    return (
        <form onSubmit={submit}>
            <label> What word do you want to cheer for?</label>
            <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value.toUpperCase())} />  
            
            <input type="submit" value="Submit" />
        </form>
    );
};

export default CheerForm;
