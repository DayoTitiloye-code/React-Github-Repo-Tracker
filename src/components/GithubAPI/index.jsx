import React, { useEffect } from 'react'
import axios from 'axios';

const GithubAPI = ({searchValue}) =>{
    
    useEffect(() =>{
        async function getGithubRepos(){
        const response = await axios.get(`https://api.github.com/users/${ searchValue }`)
        console.log(response.data)
        }
        getGithubRepos()

    }, [searchValue])
    
    return(
        <>
        </>
    )
}

export default GithubAPI
