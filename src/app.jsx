import Container from './components/container/Container'
import Footer from "./components/footer/footer";

import './app.css'
import {useState} from "react";

function App() {
  return (
    <div className={"app"}>
      <Container/>
      <Footer/>
    </div>
  )
}

export default App
