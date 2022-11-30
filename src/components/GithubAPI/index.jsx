import React, { useEffect, useState } from 'react'
import axios from 'axios';
import RepoDisplay from '../RepoDisplay'

const GithubAPI = ({searchValue}) =>{
    
    const[githubData, setGithubData] = useState([])

    useEffect(() =>{
        async function getGithubRepos(){
        const response = await axios.get(`https://api.github.com/users/${searchValue}/repos`)
        console.log(response.data)

        setGithubData(response.data)
        }
        getGithubRepos()

    }, [searchValue])
    
    const reposArray = githubData.map((r, index) => {
        return <RepoDisplay key={index} data={r}/>
    })
    
    return(
        <div id="repos">
        {reposArray}
        </div>
    )
}

export default GithubAPI
