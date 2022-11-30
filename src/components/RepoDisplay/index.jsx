import React from 'react'

const RepoDisplay = ({ data }) =>{
    return(
        
        <div className='repodisp'>
            <h1>{data.name}</h1>
            <em>{data.owner.login}</em>
            <p>{data.description}</p>
            <p>Code can be seen at: {data.html_url}</p>
        </div>
        
    )
}

export default RepoDisplay
