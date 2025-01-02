import PropTypes from "prop-types";

const IframeClip = ({refIframe, className, id}) => {
  return (
    <iframe
      ref={refIframe}
      className={className}
      // src={`https://clips.twitch.tv/embed?clip=${id}&parent=localhost`}
      allowFullScreen>
    </iframe>
  )
}

IframeClip.propTypes = {
  refIframe: PropTypes.object,
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default IframeClip;