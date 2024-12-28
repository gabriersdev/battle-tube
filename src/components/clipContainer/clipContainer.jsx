import ChooseButton from "../chooseButton/chooseButton";
import Clip from "../clip/clip";
import './clipContainer.css'

const ClipContainer = () => {
  return (
    <div className="clip-container">
      <Clip data={{title: 'XXXXX', username: 'XXXX', id: '#'}}/>
    </div>
  )
}

export default ClipContainer