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

  const dialog = useRef(null);

  return (
    <dialog className={"modal-dialog-analytics"} ref={dialog}>
      <hgroup style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem'}}>
        <h2 style={{textWrap: 'balance'}}>Estatísticas de Clipes do Canal</h2>
        <button className={'btn-close-modal'} style={{margin: 0, padding: '0.25rem 0.5rem', border: '1px solid #C6ADFF50', borderRadius: '5px'}} onClick={(e) => e.target.closest('dialog').close()}>X</button>
      </hgroup>
      <section style={{textAlign: 'left'}}>
        <div className={'modal-group'}>
          <h3 className={'modal-group-title'}>0S MESES QUE TIVERAM MAIS CLIPES</h3>
          <ol className={'modal-group-list'}>
            {
              monthMoreClips.map((month, i) => {
                return (
                  <li key={i}>
                    <b className="text-emphasis">{month[0] || '...'}</b>
                    <b>,{" "}</b>
                    <b className="text-emphasis">{month[1].toLocaleString('pt-br') || 'VÁRIOS'}</b>
                    <span>{" "}CLIPES</span>
                  </li>
                )
              })
            }
          </ol>
          <p className={'modal-group-add-info'} style={{display: 'flex', flexDirection: 'column'}}>
            <span>TOTALIZANDO</span>
            <span><b className="text-emphasis">{totalClips.toLocaleString('pt-br') || '...'} CLIPES</b></span>
            <span>FEITOS NO ANO.</span>
          </p>
        </div>

        <div className={'modal-group'}>
          <h3 className={'modal-group-title'}>0S {topClippers.length} MAIORES CLIPPERS</h3>
          <ol className={'modal-group-list'}>
            {
              topClippers.map((clipper, i) => {
                return (
                  <li key={i} style={{marginBottom: `${i + 1 === topClippers.length ? '0' : '0.5rem'}`}}>
                    <b className="text-emphasis">{clipper[0] || '...'}</b><br/>
                    <b className="text-emphasis">{clipper[1].toLocaleString('pt-br') || 'VÁRIOS'}</b>
                    <span>{" "}CLIPES</span>
                  </li>
                )
              })
            }
          </ol>
        </div>

        <div className={'modal-group'}>
          <h3 className={'modal-group-title'}>Visualizações</h3>
          <p style={{display: 'flex', flexDirection: 'column'}}>
            <span>TODOS OS CLIPES FEITOS EM</span>
            <b className={"text-emphasis"}>{currentYear}</b>
            <span>TIVERAM JUNTOS</span>
            <b className={"text-emphasis"}>{totalViews.toLocaleString('pt-br')}</b>
            <span>VISUALIZAÇÕES.</span>
          </p>
        </div>

        <div className={'modal-group'}>
          <p style={{display: 'flex', flexDirection: 'column'}}>
            <span>OS {topClips.length} CLIPES MAIS VISTOS</span>
            <span>FEITOS NO ANO DE</span>
            <b className={"text-emphasis"}>{currentYear}</b>
          </p>
          <ol className={'modal-group-list'} style={{marginTop: '1rem'}}>
            {
              topClips.map((clip, i) => {
                return (
                  <li key={i}>
                    <a href={clip.url || '#'} target={"_blank"}>
                      <b className={"text-emphasis"}>{clip.title.length > 20 ? (clip.title.slice(0, 20) + '...') : clip.title || 'Título não retornado'}</b>
                      <span>,{" "}</span>
                      <span><b className={"text-emphasis"}>{clip.view_count.toLocaleString('pt-br') || 'VÁRIAS'}</b> VISUALIZAÇÕES</span>
                    </a>
                  </li>
                )
              })
            }
          </ol>
        </div>

        <div className={'modal-group'}>
          <p style={{color: '#FFFFFF50', textAlign: 'center', textWrap: 'balance'}}>
            Dados obtidos entre entre os dias
            {" "}{`0${new Date(scrappingInit).getDate()}`.slice(-2)} e {new Date(scrappingFinish).toLocaleString('pt-BR').split(' ')[0]}{" "}
            utilizando a API da Twitch.
            {/*Confira mais detalhes em <a style={{fontWeight: 'bold'}} href={"https://battle-tube.vercel.app/data"} target={"_blank"}>link.com.</a>*/}
          </p>
        </div>
      </section>
      <button className={'btn-close-modal'} onClick={(e) => e.target.closest('dialog').close()}>X FECHAR</button>
    </dialog>
  )
}

export default Dialog;