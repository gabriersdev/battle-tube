import PropTypes from "prop-types";
import './button.css'

const Button = ({children, classname, onclick}) => {
  return (
    <button style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center'}} className={`button ${classname}`} onClick={onclick}>{children}</button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  classname: PropTypes.string,
  onclick: PropTypes.func.isRequired,
}

export default Button;