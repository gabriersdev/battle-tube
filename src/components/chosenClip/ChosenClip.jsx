import {useContext, useEffect} from "react";
import PropTypes from "prop-types";
import IframeClip from "../iframeClip/IframeClip.jsx";
import {AnimatePresence, motion} from "framer-motion";
import './chosenClip.css';
import '../clip/clip.css';
import Button from "../button/Button.jsx";
import Confetti from "../confetti/Confetti.jsx";
import {Theme} from "../main/Main.jsx";

const ChosenClip = ({data}) => {
  const {dialog} = useContext(Theme)

  useEffect(() => {
    // TODO - ocultar de forma mais eficiente
    document.querySelector('footer').style.display = 'none';
  }, [])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={0}
        initial={{opacity: 0, y: 50}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: -50}}
        transition={{duration: 0.5, ease: "easeOut"}}
        className={'chosen-clip'}
      >
        <div className={'chosen-clip-content'}>
          <h2 className={'chosen-title'}>
            <span>O melhor clipe escolhido por você</span>
          </h2>
          <div className={'chosen-clip-info'}>
            <p className={'chosen-paragraph'}>
              <span>CLIPADO POR</span>&nbsp;
              <span
                className={'chosen-username unsecure-text neon-text'}>{data.username || 'Username não retornado'}</span>
            </p>
            <p className={'chosen-paragraph unsecure-text'}>
              <span>“{data.title ? data.title.trim() : 'Título não retornado'}”</span>
            </p>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
            <Button onclick={() => {
              dialog.current.showModal()
            }} classname={'link-external no-margin'}>
              <span>OUTRAS ESTATÍSTICAS</span>
              <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center'}}>
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"
                     fill="#C6ADFF"
                     style={{paddingTop: 0, margin: 0, paddingLeft: '0.35rem'}}>
                  <path
                    d="M160-160v-320h160v320H160Zm240 0v-640h160v640H400Zm240 0v-440h160v440H640Z"/>
                </svg>
              </span>
            </Button>
            <Button onclick={() => {
              if (typeof localStorage !== 'undefined') {
                const allStorage = Object.assign({}, localStorage)
                localStorage.clear()
                console.log('localStorage cleared', allStorage)
                if (allStorage.logs && JSON.parse(allStorage.logs)) localStorage.setItem('logs', allStorage.logs)
              }
              window.location.reload()
            }} classname={'restart no-margin'}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor"
                   className="bi bi-arrow-left"
                   viewBox="0 0 16 16">
                <path fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                </svg>
            </span>
              <span>RECOMEÇAR</span>
            </Button>
            <Button onclick={() => {
              window.open('https://github.com/eskimozin/battle-tube/issues/new', '_blank', 'noopener,noreferrer')
            }} classname={'link-external no-margin'}>
              <span>INFORMAR UM PROBLEMA</span>
              <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center'}}>
              <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"
                   fill="#C6ADFF"
                   style={{paddingTop: 0, margin: 0, paddingLeft: '0.35rem'}}>
               <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/>
              </svg>
            </span>
            </Button>
          </div>
          <div className={'chosen-clip-info'}>
            <p className={'chosen-paragraph'}>
              <span>Feito com</span>&nbsp;
              <span>❤️</span>&nbsp;
              <span>pelo Gabriel</span>
            </p>
          </div>
        </div>
        <div className={'chosen-clip-video'}>
          <IframeClip className={'clip-iframe chosen'} id={data.id}/>
        </div>
        <Confetti/>
      </motion.div>
    </AnimatePresence>
  )
}

ChosenClip.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired
}

export default ChosenClip;