import Clip from "../clip/clip";
import PropTypes from "prop-types";
import './clipContainer.css'

const ClipContainer = ({data, index, handleSelection}) => {
  return (
    <div className="clip-container">
      <Clip data={data} index={index} handleSelection={handleSelection}/>
    </div>
  )
}

ClipContainer.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handleSelection: PropTypes.func.isRequired
}

export default ClipContainer