import './chooseButton.css';
import {useState} from "react";

const ChooseButton = () => {
  const [selected, setSelected] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleClick = (e) => {
    e.preventDefault()
    console.log('You clicked the button!')
    setSelected(true)
    setDisabled(true)

    // Simular um tempo de espera para a seleção
    setTimeout(() => {
      setSelected(false)
      setDisabled(false)
    }, 2000)
  }

  return (
    <button type={"button"} className="choose-button" disabled={disabled} onClick={handleClick}>
      {selected ? 'AGUARDE...' : 'ESCOLHER ESTE'}
    </button>
  );
}

export default ChooseButton;