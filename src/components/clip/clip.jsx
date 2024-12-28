import PropTypes from "prop-types";
import ChooseButton from "../chooseButton/chooseButton";
import './clip.css';
import {useRef, useState} from "react";

const Clip = ({data}) => {
  // use ref (Useref) para manipular o iframe
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
      <h2 className="clip-title" ref={title} style={{maxWidth: maxWidth}} title={'Título do Clipe'}>TITULO DO CLIPE</h2>
      <div className="clip-username">USERNAME</div>
      <div>
        <iframe
          ref={iframe}
          className={'clip'}
          src="https://clips.twitch.tv/embed?clip=CoweringColdBaconPipeHype-m6MOE2Woe70ddxw9&parent=localhost"
          allowFullScreen>
        </iframe>
        <ChooseButton/>
      </div>
    </div>
  )
}

Clip.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    username: PropTypes.string,
    id: PropTypes.string,
  })
}

export default Clip;