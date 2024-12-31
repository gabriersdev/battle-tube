import {useState} from "react";
import PropTypes from "prop-types";
import './chooseButton.css';

const ChooseButton = ({index, handleSelection}) => {
  const [selected, setSelected] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleClick = (e) => {
    e.preventDefault()
    handleSelection(index)
    setSelected(true)
    setDisabled(true)

    // Simular um tempo de espera para a seleção
    setTimeout(() => {
      setSelected(false)
      setDisabled(false)
    }, 1000)
  }

  return (
    <button type={"button"} className="choose-button" disabled={disabled} onClick={handleClick}>
      {selected ? 'ESCOLHIDO!' : 'ESCOLHER ESTE'}
    </button>
  );
}

ChooseButton.propTypes = {
  index: PropTypes.number.isRequired,
  handleSelection: PropTypes.func.isRequired
}

export default ChooseButton;