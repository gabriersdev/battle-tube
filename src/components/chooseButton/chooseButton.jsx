import PropTypes from "prop-types";
import './chooseButton.css';
import Button from "../button/button.jsx";

const ChooseButton = ({index, handleSelection}) => {
  const handleClick = (e) => {
    e.preventDefault()
    handleSelection(index)
  }

  return (
    <Button onclick={handleClick}>ESCOLHER</Button>
  );
}

ChooseButton.propTypes = {
  index: PropTypes.number.isRequired,
  handleSelection: PropTypes.func.isRequired,
}

export default ChooseButton;