import Main from './components/main/Main'
import Footer from "./components/footer/footer";

import './app.css'
import {useState} from "react";

function App() {
  return (
    <div className={"app"}>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
