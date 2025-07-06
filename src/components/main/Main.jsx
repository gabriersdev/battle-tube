import './main.css'

import {createContext, useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";

import Selection from "../selection/Selection.jsx";
import StatisticDialog from "../statisticDialog/statisticDialog.jsx";
import {AnimatePresence, motion} from "framer-motion";

const Theme = createContext({})

// const Main = ({functions}) => {
//   const dialog = useRef(null)
//   useEffect(() => {
//     document.querySelectorAll('a').forEach(link => link.setAttribute('rel', 'noopener noreferrer'));
//   }, [])
//
//   return (
//     <Theme.Provider value={{dialog}}>
//       <StatisticDialog/>
//       <main className="container-main">
//         <h1 className={"none"}>ESCOLHA UM CLIPE</h1>
//         <div>
//           <Selection functions={functions}/>
//         </div>
//       </main>
//     </Theme.Provider>
//   )
// }


const Main = ({functions}) => {
  const [showeds, setShoweds] = useState([]);
  
  const pharses = [
    <span key={1}>DAQUI A POUCO VOCÊ VAI ESCOLHER</span>,
    <span key={2} className={"neon-text"}> QUAL É O MELHOR CLIPE DE 202X</span>,
    <span key={3}>MAS ANTES...</span>,
    <span key={4} className={"neon-text"}>UM RECADO DOS ESPECTADORES</span>,
  ]
  
  useEffect(() => {
    setShoweds([]);
    
    pharses.forEach((_, index) => {
      setTimeout(() => {
        setShoweds(prev => [...prev, !prev.includes(index) ? index : null]);
      }, 1500 * index);
    })
  }, [])
  
  return (
    <>
      <StatisticDialog/>
      <style jsx>{`
        .comemoration-component {
          text-align: center;
        }
      `}</style>
      
      <main className="container-main">
        <div className={"comemoration-component"}>
          <h1>
            <AnimatePresence>
              {showeds.map((i) => (
                <motion.div
                  key={i}
                  initial={{opacity: 0, y: 10}}
                  animate={{opacity: 1, y: 0}}
                  exit={{opacity: 0}}
                  transition={{duration: 0.5}}
                >
                  {i || i === 0 ? pharses[i] : null}
                </motion.div>
              ))}
            </AnimatePresence>
          </h1>
        </div>
      </main>
    </>
  )
}

Main.propTypes = {
  functions: PropTypes.object.isRequired
}

export {Main, Theme}