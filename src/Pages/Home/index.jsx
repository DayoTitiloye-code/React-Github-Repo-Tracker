import React, { useState } from "react";
import { useParams } from "react-router-dom";
import InputForm from '../../components/InputForm'
import GithubAPI from '../../components/GithubAPI'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
    const[searchValue, setSearchValue] = useState('')
    return (
        <div className="home">
            <div id="header">
                <h1>Welcome to Github Tracker</h1>
                <div id="icon">
                    <FontAwesomeIcon icon={faGithub} />
                </div>
            </div>
            <InputForm setSearchValue={setSearchValue}/>
            <GithubAPI searchValue={searchValue}/>
        </div>
    )
}

export default Home;
