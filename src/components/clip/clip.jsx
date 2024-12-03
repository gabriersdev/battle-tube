import './clip.css';
import PropTypes from "prop-types";

const Clip = ({data}) => {
  return (
    <div className="clip-info">
      <div className="clip-title">
        <h2>TITULO DO CLIPE</h2>
        <span>PODE TER 2 LINHAS</span>
      </div>
      <div className="clip">
        {/*<iframe src="#" title="Clip" />*/}
        <img src="#" alt="Thumb of the clip"/>
      </div>
      <div className="clip-username">USERNAME</div>
    </div>
  )
}

Clip.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    username: PropTypes.string,
    url: PropTypes.string,
  })
}

export default Clip;