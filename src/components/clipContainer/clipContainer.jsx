import PropTypes from "prop-types";
import Clip from "../clip/clip";
import './clipContainer.css'

const ClipContainer = ({data, index, handleSelection, click}) => {
  return (
    <div className="clip-container">
      <Clip data={data} index={index} handleSelection={handleSelection} click={click}/>
    </div>
  )
}

ClipContainer.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handleSelection: PropTypes.func.isRequired,
  click: PropTypes.bool
}

export default ClipContainer