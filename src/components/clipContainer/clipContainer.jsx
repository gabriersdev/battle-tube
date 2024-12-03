import ChooseButton from "../chooseButton/chooseButton";
import Clip from "../clip/clip";

const ClipContainer = () => {
  return (
    <div className="clip-container">
      <Clip data={{title: 'XXXXX', username: 'XXXX', url: '#'}}/>
      <ChooseButton/>
    </div>
  )
}

export default ClipContainer