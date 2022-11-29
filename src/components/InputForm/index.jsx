import React from 'react'

const InputForm = () =>{
    return(
        <form>
            <label htmlFor="name"></label>
            <input type="text" placeholder='Your Github username here...' id="name" />
            <input type="submit" value="Search"/>
        </form>
    )
}

export default InputForm;
