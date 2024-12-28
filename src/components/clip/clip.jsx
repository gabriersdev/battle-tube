import PropTypes from "prop-types";
import './clip.css';
import ChooseButton from "../chooseButton/chooseButton";

const Clip = ({data}) => {
  return (
    <div className="clip-info">
      <h2 className="clip-title">TITULO DO CLIPE <br/> PODE TER 2 LINHAS</h2>
      <div className="clip-username">USERNAME</div>
      <div>
        <iframe
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