import './chooseButton.css';

const ChooseButton = () => {
  const handleClick = (e) => {
    e.preventDefault()
    console.log('You clicked the button!');
  }

  return (
    <button type={"button"} className="choose-button" onClick={handleClick}>ESCOLHER ESTE</button>
  );
}

export default ChooseButton;