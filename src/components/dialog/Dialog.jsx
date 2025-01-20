import {useRef} from "react";
import './dialog.css'

const Dialog = () => {
  const dialog = useRef(null)

  return (
    <dialog className={"modal-dialog-analytics"} ref={dialog}>
      <h2>Estatísticas de Clipes do Canal</h2>
      <div style={{textAlign: 'left'}}>
        <div className={'modal-group'}>
          <h3 className={'modal-group-title'}>CLIPES EM NÚMEROS</h3>
          <span>0S MESES QUE TIVERAM MAIS CLIPES:</span>
          <ol className={'modal-group-list'}>
            <li>JANEIRO, 87 CLIPES</li>
            <li>JULHO, 50 CLIPES</li>
            <li>JUNHO, 20 CLIPES</li>
          </ol>
          <span className={'modal-group-add-info'}>5.067 CLIPES FEITOS NO ANO</span>
        </div>

        <div className={'modal-group'}>
          <h3 className={'modal-group-title'}>CLIPPERS</h3>
          <span>0S MAIORES CLIPPERS:</span>
          <ol className={'modal-group-list'}>
            <li>DRAUDINHO, 87 CLIPES</li>
            <li>ROBERTINHO, 50 CLIPES</li>
            <li>CLEBER, 20 CLIPES</li>
          </ol>
        </div>

        <div className={'modal-group'}>
          <h3 className={'modal-group-title'}>Visualizações</h3>
          <p>TODOS OS CLIPES FEITOS EM 2024, SOMARAM, JUNTOS 1.000.000 DE VISUALIZAÇÕES</p>
        </div>

        <div className={'modal-group'}>
          <span>OS CLIPES DE 2024 MAIS VISTOS:</span>
          <ol className={'modal-group-list'}>
            <li>CLIPÃO, 500.000 VISUALIZAÇÕES</li>
            <li>CLIPINHO, 250.000 VISUALIZAÇÕES</li>
            <li>CLIPIN, 100.000 VISUALIZAÇÕES</li>
          </ol>
        </div>

        <div className={'modal-group'}>
          <p>
            Dados obtidos entre entre os dias 01 e 02/01/2025 utilizando a API da Twitch. Confira mais detalhes em
            &nbsp;<a href={"#"}>link.com</a>.
          </p>
        </div>
      </div>
      <button className={'btn-close-modal'} onClick={(e) => e.target.closest('dialog').close()}>X FECHAR</button>
    </dialog>
  )
}

export default Dialog;