import PropTypes from "prop-types";
import {AnimatePresence, motion} from "framer-motion";
import {useEffect} from "react";

const AnimationPresence = ({children, date}) => {
  useEffect(() => {
    console.log('Nova instância criada!')
  }, []);

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={date ? date.getTime().toString() : ""}
        initial={{opacity: 0, y: 25}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: 0}}
        transition={{duration: 0.25, ease: "easeInOut"}}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

AnimationPresence.propTypes = {
  children: PropTypes.node,
  date: PropTypes.instanceOf(Date).isRequired,
}

export default AnimationPresence;