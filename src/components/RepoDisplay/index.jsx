import React from 'react'

const RepoDisplay = ({ data }) =>{
    return(
        <>
            <h1>{data.name}</h1>
            <em>{data.owner.login}</em>
            <p>{data.description}</p>
            <p>Code can be seen at: {data.html_url}</p>
        </>
    )
}

export default RepoDisplay
