import './dialog.css'

import {useRef} from "react";
import PropTypes from "prop-types";

const Dialog = ({children}) => {
  const dialog = useRef(null);

  return (
    <dialog className={"modal-dialog-analytics"} ref={dialog}>
      <hgroup
        style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem'}}>
        <h2 style={{textWrap: 'balance'}}>Estatísticas de Clipes do Canal</h2>
        <button className={'btn-close-modal'}
                style={{margin: 0, padding: '0.25rem 0.5rem', border: '1px solid #C6ADFF50', borderRadius: '5px'}}
                onClick={(e) => e.target.closest('dialog').close()}>X
        </button>
      </hgroup>
      <div className="modal-content">
        {children}
      </div>
      <button className={'btn-close-modal'} onClick={(e) => e.target.closest('dialog').close()}>X FECHAR</button>
    </dialog>
  )
}

Dialog.propTypes = {
  children: PropTypes.node,
}

export default Dialog;