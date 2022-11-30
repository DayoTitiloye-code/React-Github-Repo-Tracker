import React, {useState} from 'react'

const InputForm = ({ setSearchValue }) =>{
    const[textInput, setTextInput] = useState('')

    function handleChange(e){
        setTextInput(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        setSearchValue(textInput)
        setTextInput('')
    }

    return(
        <div id='form'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Enter Here:</label>
            <input type="text" placeholder='Your Github username here...' id="name" value={textInput} 
            onChange={handleChange}/>
            <input type="submit" value="Search" id="button"/>
        </form>
        </div>
    )
}

export default InputForm;
