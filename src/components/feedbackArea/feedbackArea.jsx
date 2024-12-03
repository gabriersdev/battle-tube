import PropTypes from "prop-types";

const FeedbackArea = ({message}) => {
  return (
    <div>{message}</div>
  )
}

FeedbackArea.propTypes = {
  message: PropTypes.string.isRequired
}

export default FeedbackArea