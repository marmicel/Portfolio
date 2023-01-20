import React from "react"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import Qa from "./pages/Qa"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/Qa" element={<Qa />} />
        </Routes>
      </div>

      <Navbar></Navbar>
    </>
  )
}

export default App
