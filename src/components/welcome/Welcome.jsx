import PropTypes from "prop-types";
import Button from "../button/Button.jsx";
import './welcome.css';
import {AnimatePresence, motion} from "framer-motion";

const Welcome = ({handleClickStart}) => {
  const existsSaveInLocalStorage = () => {
    const clips = JSON.parse(localStorage.getItem('clips'));
    const currentPairIndex = JSON.parse(localStorage.getItem('currentPairIndex'));
    const round = JSON.parse(localStorage.getItem('round'));
    const winners = JSON.parse(localStorage.getItem('winners'));

    return (clips && currentPairIndex !== null && round !== null && winners);
  }

  return (
    <AnimatePresence mode="wait">
      <motion.section
        key={0}
        initial={{opacity: 0, y: 50}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: -50}}
        transition={{duration: 0.5, ease: "easeOut"}}
        className={'welcome'}
      >
        <div className={'welcome-content'}>
          <h1 className={'welcome-title'}>
            ESCOLHA O MELHOR CLIPE DO CANAL ESKIMOZIN
          </h1>
          <Button classname={'start row-reverse'} onclick={() => {
            handleClickStart(true)
          }}>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi bi-arrow-right"
                 viewBox="0 0 16 16">
              <path fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
            </svg>
          </span>
          <span>
            {existsSaveInLocalStorage() ? 'CONTINUAR' : 'COMEÇAR'}
          </span>
          </Button>
        </div>
      </motion.section>
    </AnimatePresence>
  )
}

Welcome.propTypes = {
  handleClickStart: PropTypes.func.isRequired
}

export default Welcome;