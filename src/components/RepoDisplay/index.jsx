import React from 'react'

const RepoDisplay = ({ data }) =>{
    function toRepo(){
        window.location.href = data.html_url
    }

    return(
        <div className='repodisp'>
            <h1>{data.name}</h1>
            <em>{data.owner.login}</em>
            <p>{data.description}</p>
            <a onClick={toRepo} target="_blank" rel="noopener noreferrer">{data.html_url}</a>
            <p>Main Language Used: {data.language}</p>
        </div>
    )
}

export default RepoDisplay
