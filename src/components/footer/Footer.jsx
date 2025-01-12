import PropTypes from "prop-types";
import './footer.css'

const Footer = ({variables}) => {
  const [roundPage, totalRoundPages, selectionPage, totalSelectionPages, dataExport] = variables

  const exportData = () => {
    const json = JSON.stringify(dataExport)
    const blob = new Blob([json], {type: 'application/json'})
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'battle-tube-application-data.json'
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
        <button onClick={() => exportData()} title={"Exportar Logs"}  className={"footer-btn-export"}>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#C6ADFF">
              <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/>
            </svg>
          </span>
        </button>
        <button data-action={"clear-and-reload"} title={"Recomeçar"} onClick={() => {
          if (confirm('Tem certeza que deseja reiniciar? Todas as escolhas feitas até aqui serão perdidas para sempre.')) {
            if (typeof localStorage !== 'undefined') {
              const allStorage = Object.assign({}, localStorage)
              localStorage.clear()
              console.log('localStorage cleared', allStorage)
              if (allStorage.logs && JSON.parse(allStorage.logs)) localStorage.setItem('logs', allStorage.logs)
            }
            window.location.reload()
          }
        }} className={"footer-btn-clear"}>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"
                 fill="#C6ADFF" style={{rotate: '-90deg'}}>
              <path
                d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"/>
            </svg>
          </span>
        </button>
      </div>
      <div className={"footer-right"}>
        <div>
          <p>RODADA {formatNumber(roundPage)}/{formatNumber(totalRoundPages)} </p>
        </div>
        <div style={{color: '#C6ADFF'}}>
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