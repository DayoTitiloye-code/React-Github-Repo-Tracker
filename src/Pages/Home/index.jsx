import React, { useState } from "react";
import { useParams } from "react-router-dom";
import InputForm from '../../components/InputForm'
import GithubAPI from '../../components/GithubAPI'

const Home = () => {
    const[searchValue, setSearchValue] = useState('')
    return (
        <div className="home">
            <h1>Welcome to Github Tracker</h1>
            <InputForm setSearchValue={setSearchValue}/>
            <GithubAPI searchValue={searchValue}/>
        </div>
    )
}

export default Home;
