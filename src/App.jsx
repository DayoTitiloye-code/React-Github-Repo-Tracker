import React from 'react'
import { Routes, Route } from "react-router-dom"
import { useState } from 'react'

import './App.css'
import Home from './Pages/Home'
import Repos from './Pages/Repos'
import Repo from './Pages/Repo'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="repos" element={<Repos/>}>
        <Route path=":repo" element={<Repo/>}></Route>
      </Route>
    </Routes>

    
  )
}

export default App
