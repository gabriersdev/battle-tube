import {useState} from "react";
import './footer.css'

const Footer = () => {
  const [roundPage, setRoundPage] = useState(1)
  const [totalRoundPages, setTotalRoundPages] = useState(6)
  const [selectionPage, setSelectionPage] = useState(1)
  const [totalSelectionPages, setTotalSelectionPages] = useState(63)

  const handlerExport = () => {
    console.log('Exportar')
  }

  const formatNumber = (number) => {
    return (`0${number}`).slice(-2)
  }

  return (
    <footer className="footer">
      <div className={"footer-left"}>
        <button onClick={handlerExport} style={{color: '#C6ADFF', display: 'inline-flex', alignItems: 'center', flexDirection: 'row-reverse', gap: '0.125rem'}}>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#C6ADFF" style={{padding: 0, margin: 0}}>
              <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/>
            </svg>
          </span>
          <span>EXPORTAR</span>
        </button>
      </div>
      <div className={" footer-right"}>
        <div>
          <p>RODADA {formatNumber(roundPage)}/{formatNumber(totalRoundPages)} </p>
        </div>
        <div style={{color: '#6D28D9'}}>
          <p>SELEÇÃO {formatNumber(selectionPage)}/{formatNumber(totalSelectionPages)}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer