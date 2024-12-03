import {useState} from "react";

const Footer = () => {
  const [roundPage, setRoundPage] = useState(1)
  const [totalRoundPages, setTotalRoundPages] = useState(6)
  const [selectionPage, setSelectionPage] = useState(1)
  const [totalSelectionPages, setTotalSelectionPages] = useState(63)

  const handlerExport = () => {
    console.log('Exportar')
  }

  return (
    <footer className="footer">
      <div>
        <button onClick={handlerExport}>EXPORTAR</button>
      </div>
      <div>
        <p>RODADA {roundPage}/{totalRoundPages} </p>
      </div>
      <div style={{color: '#6D28D9'}}>
        <p>SELEÇÃO {selectionPage}/{totalSelectionPages}</p>
      </div>
    </footer>
  )
}

export default Footer