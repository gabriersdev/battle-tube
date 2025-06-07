import data from '../../data/scrapping.js';
import {useEffect, useState} from "react";
import {motion, AnimatePresence} from 'framer-motion'

const countClipsYear = data.totalClips || 'MUITOS';
const selectionYear = 2024

const pharses = [
  <p key={1}>Foram <span className="neon-text">{countClipsYear.toLocaleString('pt-br')}</span> clipes feitos em {selectionYear}</p>,
  <p key={3}>Selecionamos aqui apenas os <span className="neon-text">64 melhores</span></p>,
  <p key={2}>E você tem <span className="neon-text">a missão</span> de escolher <span className="neon-text">o melhor</span></p>,
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