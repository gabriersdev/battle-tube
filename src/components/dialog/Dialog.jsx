import {useRef} from "react";
import data from '../../data/scrapping.js';

import './dialog.css'

const Dialog = () => {
  let {currentYear, totalClips, monthMoreClips, topClippers, totalViews, topClips, scrappingInit, scrappingFinish} = {
    ...data,
    monthMoreClips: data.monthMoreClips.toSorted((a, b) => a[1] < b[1]),
    topClippers: data.topClippers.sort((a, b) => a[1] < b[1]),
    topClips: data.topClips.sort((a, b) => a[1] < b[1])
  };

  const dialog = useRef(null)

  return (
    <dialog className={"modal-dialog-analytics"} ref={dialog} style={{textTransform: 'uppercase'}}>
      <h2>Estatísticas de Clipes do Canal</h2>
      <div style={{textAlign: 'left'}}>
        <div className={'modal-group'}>
          <h3 className={'modal-group-title'}>CLIPES EM NÚMEROS</h3>
          <span>0S MESES QUE TIVERAM MAIS CLIPES:</span>
          <ol className={'modal-group-list'}>
            {
              monthMoreClips.map((month, i) => {
                return (
                  <li key={i}><b>{month[0] || '...'}, {month[1].toLocaleString('pt-br') || 'VÁRIOS'}</b> CLIPES</li>)
              })
            }
          </ol>
          <span
            className={'modal-group-add-info'}>{totalClips.toLocaleString('pt-br') || '...'} CLIPES FEITOS NO ANO</span>
        </div>

        <div className={'modal-group'}>
          <h3 className={'modal-group-title'}>CLIPPERS</h3>
          <span>0S MAIORES CLIPPERS:</span>
          <ol className={'modal-group-list'}>
            {
              topClippers.map((clipper, i) => {
                return (
                  <li key={i}><b>{clipper[0] || '...'}, {clipper[1].toLocaleString('pt-br') || 'VÁRIOS'}</b> CLIPES</li>
                )
              })
            }
          </ol>
        </div>

        <div className={'modal-group'}>
          <h3 className={'modal-group-title'}>Visualizações</h3>
          <p>TODOS OS <b>{totalClips.toLocaleString('pt-br') || 'MUITOS'}</b> CLIPES FEITOS EM {currentYear}, SOMARAM,
            JUNTOS <b>{totalViews.toLocaleString('pt-br')}</b> VISUALIZAÇÕES</p>
        </div>

        <div className={'modal-group'}>
          <span>OS CLIPES MAIS VISTOS, FEITOS EM {currentYear}:</span>
          <ol className={'modal-group-list'}>
            {
              topClips.map((clip, i) => {
                return (
                  <li key={i}>
                    <a href={clip.url || '#'} target={"_blank"}><b>{clip.title || 'Título não retornado'}, {clip.view_count.toLocaleString('pt-br') || 'VÁRIAS'}</b> VISUALIZAÇÕES</a>
                  </li>
                )
              })
            }
          </ol>
        </div>

        <div className={'modal-group'}>
          <p style={{color: '#FFFFFF50'}}>
            Dados obtidos entre entre os
            dias {`0${new Date(scrappingInit).getDate()}`.slice(-2)} e {new Date(scrappingFinish).toLocaleString('pt-BR').split(' ')[0]} utilizando
            a API da Twitch. Confira mais detalhes em <a style={{fontWeight: 'bold'}}
                                                         href={"https://battle-tube.vercel.app/data"}
                                                         target={"_blank"}>link.com.</a>
          </p>
        </div>
      </div>
      <button className={'btn-close-modal'} onClick={(e) => e.target.closest('dialog').close()}>X FECHAR</button>
    </dialog>
  )
}

export default Dialog;