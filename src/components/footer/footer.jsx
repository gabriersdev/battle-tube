import PropTypes from "prop-types";
import './footer.css'

const Footer = ({variables}) => {
  const [roundPage, totalRoundPages, selectionPage, totalSelectionPages, dataExport] = variables

  const handlerExport = () => {
    const json = JSON.stringify(dataExport)
    const blob = new Blob([json], {type: 'application/json'})
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'data.json'
    document.body.appendChild(a)
    a.click()
    a.remove()
  }

  const formatNumber = (number) => {
    return (`0${number}`).slice(-2)
  }

  return (
    <footer className="footer">
      <div className={"footer-left"}>
        <button onClick={handlerExport} className={"footer-btn-export"}>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#C6ADFF" style={{paddingTop: '0.3rem', margin: 0}}>
              <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/>
            </svg>
          </span>
          <span>EXPORTAR</span>
        </button>
      </div>
      <div className={"footer-right"}>
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

Footer.propTypes = {
  variables: PropTypes.array.isRequired
}

export default Footer