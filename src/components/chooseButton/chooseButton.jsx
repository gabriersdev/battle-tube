import PropTypes from "prop-types";
import './chooseButton.css';
import {useEffect} from "react";
import Button from "../button/button.jsx";

const ChooseButton = ({index, handleSelection, restart, click}) => {
  useEffect(() => {
    if (click) {
      handleSelection(index)
    }
  }, [click, handleSelection, index]);

  const handleClick = (e) => {
    e.preventDefault()
    handleSelection(index)
  }

  if (!restart) {
    return (
      <Button onclick={handleClick}>ESCOLHER</Button>
    );
  }

  return (
    <Button onclick={handleClick} classname={'restart'}>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
             className="bi bi-arrow-left"
             viewBox="0 0 16 16">
          <path fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
          </svg>
      </span>
      <span>RECOMEÇAR</span>
    </Button>
  )
    ;
}

ChooseButton.propTypes = {
  index: PropTypes.number.isRequired,
  handleSelection: PropTypes.func.isRequired,
  restart: PropTypes.bool,
  click: PropTypes.bool
}

export default ChooseButton;