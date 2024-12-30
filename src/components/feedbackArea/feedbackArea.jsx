import PropTypes from "prop-types";
import './feedbackArea.css';

const FeedbackArea = ({message}) => {
  return (
    <div className={'feedback-area message'}>{message}</div>
  )
}

FeedbackArea.propTypes = {
  message: PropTypes.string.isRequired
}

export default FeedbackArea