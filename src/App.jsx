import { useState } from 'react'
import './App.css'
import InputForm from './components/InputForm'
import GithubAPI from './components/GithubAPI'

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <InputForm/>
      <GithubAPI/>
    </div>
  )
}

export default App
