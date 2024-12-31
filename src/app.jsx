import Main from './components/main/Main'
import Footer from "./components/footer/footer";

import './app.css'
import {useState} from "react";

function App() {
  const [roundPage, setRoundPage] = useState(1)
  const [totalRoundPages, setTotalRoundPages] = useState(6)
  const [selectionPage, setSelectionPage] = useState(1)
  const [totalSelectionPages, setTotalSelectionPages] = useState(32)
  const [dataExport, setDataExport] = useState([])

  const pushDataExport = (data) => {
    setDataExport([...dataExport, data])
  }

  return (
    <div className={"app"}>
      <Main functions={{setRoundPage, setTotalRoundPages, setSelectionPage, setTotalSelectionPages, pushDataExport}}/>
      <Footer variables={[roundPage, totalRoundPages, selectionPage, totalSelectionPages, dataExport]}/>
    </div>
  )
}

export default App
