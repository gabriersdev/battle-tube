import {useRef, useState} from "react";
import PropTypes from "prop-types";
import ChooseButton from "../chooseButton/chooseButton";
import IframeClip from "../iframeClip/iframeClip";
import './clip.css';

const Clip = ({data, index, handleSelection}) => {
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
    <div className="clip-info">
      <h2 className="clip-title" ref={title} style={{maxWidth: maxWidth}} title={data.title}>{data.title}</h2>
      <div className="clip-username">{data.username}</div>
      <div>
        <IframeClip refIframe={iframe} className={'clip'} id={data.id}/>
        <ChooseButton index={index} handleSelection={handleSelection}/>
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
  handleSelection: PropTypes.func.isRequired
}

export default Clip;