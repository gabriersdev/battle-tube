import {useRef, useState} from "react";
import PropTypes from "prop-types";
import ChooseButton from "../chooseButton/ChooseButton.jsx";
import IframeClip from "../iframeClip/IframeClip.jsx";
import './clip.css';

const Clip = ({data, index, handleSelection, click}) => {
  // use ref para manipular o iframe
  const iframe = useRef(null);
  const title = useRef(null)
  const [maxWidth, setMaxWidth] = useState('initial');

  useState(() => {
    // Quando o componente for montado, adicionar um event listener para o resize que deve atualizar o maxWidth do título para que nunca tenha um texto que ocupe mais de 100% do iframe, quebrando o layout
    window.addEventListener('resize', () => {
      if (iframe.current) {
        // Obter o width do iframe
        const width = iframe.current.offsetWidth;
        if (title) setMaxWidth(`${width}px`);
      }
    })

  }, [])

  return (
    <div className="clip">
      <h2 className="clip-title unsecure-text" ref={title} style={{maxWidth: maxWidth}} title={data.title}>{data.title}</h2>
      <div className="clip-username unsecure-text neon-text">{data.username}</div>
      <div>
        <IframeClip refIframe={iframe} className={'clip-iframe'} id={data.id}/>
        <ChooseButton index={index} handleSelection={handleSelection} click={click}/>
      </div>
    </div>
  )
}

Clip.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    username: PropTypes.string,
    id: PropTypes.string,
  }),
  index: PropTypes.number.isRequired,
  handleSelection: PropTypes.func.isRequired,
  click: PropTypes.bool
}

export default Clip;