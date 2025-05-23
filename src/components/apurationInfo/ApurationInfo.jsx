import data from '../../data/scrapping.js';
import {useEffect, useState} from "react";
import {motion, AnimatePresence} from 'framer-motion'

const countClipsYear = data.totalClips || 'MUITOS';
const selectionYear = 2024

const pharses = [
  <p key={1}>FORAM <span className="neon-text">{countClipsYear.toLocaleString('pt-br')}</span> CLIPES FEITOS EM {selectionYear}</p>,
  <p key={3}>SELECIONAMOS AQUI APENAS OS <span className="neon-text">64 MELHORES</span></p>,
  <p key={2}>E VOCÊ TEM <span className="neon-text">A MISSÃO</span> DE ESCOLHER <span className="neon-text">O MELHOR</span></p>,
]

const ApurationInfo = () => {
  const [showeds, setShoweds] = useState([])
  
  useEffect(() => {
    setShoweds([])
    
    pharses.forEach((_, index) => {
      setTimeout(() => {
        setShoweds(prev => [...prev, !prev.includes(index) ? index : null])
      }, 1500 * index)
    })
  }, [])
  
  return (
    <div style={{textAlign: 'center', display: 'flex', gap: '0.25rem', flexDirection: 'column', paddingBottom: '1rem'}}>
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
    </div>
  )
}

export default ApurationInfo;