import React from "react";
import { useParams } from "react-router-dom";
import InputForm from '../../components/InputForm'

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to Github Tracker</h1>
            <InputForm/>
        </div>
    )
}

export default Home;