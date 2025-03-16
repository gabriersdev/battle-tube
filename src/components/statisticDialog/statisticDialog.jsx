import Dialog from "../dialog/Dialog.jsx";
import data from "../../data/scrapping.js";
import Util from "../../util/Util.js";
import Button from "../button/Button.jsx";
import {useEffect, useState} from "react";
import AnimationPresence from "../animate/AnimationPresence.jsx";

const StatisticDialog = () => {
  let {currentYear, totalClips, monthMoreClips, topClippers, totalViews, topClips, scrappingInit, scrappingFinish} = {
    ...data,
    monthMoreClips: data.monthMoreClips.toSorted((a, b) => a[1] < b[1]),
    topClippers: data.topClippers.toSorted((a, b) => a[1] < b[1]),
    topClips: data.topClips.toSorted((a, b) => a[1] < b[1])
  };

  const [index, setIndex] = useState(0);
  const [groups] = useState([
    (
      <div key={"#1"} className={'modal-group'}>
        <h3 className={'modal-group-title'}>0S MESES QUE TIVERAM MAIS CLIPES</h3>
        <ol className={'modal-group-list'}>
          {monthMoreClips.map((month, i) => {
            return (<li key={i}>
              <b className="text-emphasis">{month[0] || '...'}</b>
              <b>,{" "}</b>
              <b className="text-emphasis">{month[1].toLocaleString('pt-br') || 'VÁRIOS'}</b>
              <span>{" "}CLIPES</span>
            </li>)
          })}
        </ol>
        <p className={'modal-group-add-info'} style={{display: 'flex', flexDirection: 'column'}}>
          <span>TOTALIZANDO</span>
          <span><b className="text-emphasis">{totalClips.toLocaleString('pt-br') || '...'} CLIPES</b></span>
          <span>FEITOS NO ANO.</span>
        </p>
      </div>
    ),
    (
      <div key={"#2"} className={'modal-group'}>
        <h3 className={'modal-group-title'}>0S {topClippers.length} MAIORES CLIPPERS</h3>
        <ol className={'modal-group-list'}>
          {topClippers.map((clipper, i) => {
            return (<li key={i} style={{marginBottom: `${i + 1 === topClippers.length ? '0' : '0.5rem'}`}}>
              <b className="text-emphasis">{clipper[0] || '...'}</b><br/>
              <b className="text-emphasis">{clipper[1].toLocaleString('pt-br') || 'VÁRIOS'}</b>
              <span>{" "}CLIPES</span>
            </li>)
          })}
        </ol>
      </div>
    ),
    (
      <div key={"#3"} className={'modal-group'}>
        <h3 className={'modal-group-title'}>Visualizações</h3>
        <p style={{display: 'flex', flexDirection: 'column'}}>
          <span>TODOS OS CLIPES FEITOS EM</span>
          <b className={"text-emphasis"}>{currentYear}</b>
          <span>TIVERAM JUNTOS</span>
          <b className={"text-emphasis"}>{totalViews.toLocaleString('pt-br')}</b>
          <span>VISUALIZAÇÕES.</span>
        </p>
      </div>
    ),
    (
      <div key={"#4"} className={'modal-group'}>
        <p style={{display: 'flex', flexDirection: 'column'}}>
          <span>OS {topClips.length} CLIPES MAIS VISTOS</span>
          <span>FEITOS NO ANO DE</span>
          <b className={"text-emphasis"}>{currentYear}</b>
        </p>
        <ol className={'modal-group-list'} style={{marginTop: '1rem'}}>
          {topClips.map((clip, i) => {
            return (<li key={i}>
              <a href={clip.url || '#'} target={"_blank"}>
                <b className={"text-emphasis"}
                   title={Util.capitalizeText(clip.title || "Título não retornado")}>{clip.title.length > 20 ? (clip.title.slice(0, 20) + '...') : clip.title || 'Título não retornado'}</b>
                <span>,{" "}</span>
                <span><b className={"text-emphasis"}>{clip.view_count.toLocaleString('pt-br') || 'VÁRIAS'}</b> VISUALIZAÇÕES</span>
              </a>
            </li>)
          })}
        </ol>
      </div>
    )
  ]);
  const [show, setShow] = useState((
    <AnimationPresence date={new Date()}>
      {groups[index]}
    </AnimationPresence>
  ));

  useEffect(() => {
    setShow((
      <AnimationPresence date={new Date()}>
        {groups[index]}
      </AnimationPresence>
    ))
  }, [groups, index, setIndex])

  return (
    <Dialog>
      <section style={{textAlign: 'left', flexGrow: 2}}>
        {show}
      </section>
      <section>
        <div style={{display: 'flex', justifyContent: 'space-between', gap: '0.5rem', flexWrap: 'wrap'}}>
          <Button classname={'icon no-margin'} onclick={() => {
            setIndex(index - 1 >= 0 ? index - 1 : index);
          }}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor"
                   className="bi bi-arrow-left"
                   viewBox="0 0 16 16">
                <path fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
              </svg>
            </span>
            <span>Anterior</span>
          </Button>
          <Button classname={'icon no-margin'} onclick={() => {
            setIndex(index + 1 <= groups.length - 1 ? index + 1 : index);11
          }}>
            <span>Próximo</span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor"
                   className="bi bi-arrow-right"
                   viewBox="0 0 16 16">
                <path fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
              </svg>
            </span>
          </Button>
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
    </Dialog>
  )
}

export default StatisticDialog;