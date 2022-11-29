import React, { useEffect } from 'react'
import axios from 'axios';

const GithubAPI = () =>{
    
    useEffect(() =>{
        async function getGithubRepos(){
        const response = await axios.get(`https://api.github.com/users/DayoTitiloye-code`)
        console.log(response)
    }
    }, [])
    
    return(
        <>
        </>
    )
}

export default GithubAPI
