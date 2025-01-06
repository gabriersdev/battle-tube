import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

import Main from './components/main/Main.jsx'
import Footer from "./components/footer/Footer.jsx";
import LoadingPage from "./components/loadingPage/LoadingPage.jsx";
import Welcome from "./components/welcome/Welcome.jsx";

import './app.css'

function App() {
  const [roundPage, setRoundPage] = useState(1)
  const [totalRoundPages, setTotalRoundPages] = useState(6)
  const [selectionPage, setSelectionPage] = useState(1)
  const [totalSelectionPages, setTotalSelectionPages] = useState(32)
  const [dataExport, setDataExport] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [clickInStarted, setClickInStarted] = useState(false)

  const pushDataExport = (data) => {
    setDataExport([...dataExport, data])
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, localStorage && localStorage.getItem('battle-tube-app') ? 0 : 2000)

    if (typeof localStorage !== 'undefined') localStorage.setItem('battle-tube-app', JSON.stringify({id: new Date().getTime() * (Math.random() * 10)}))
  }, []);

  useEffect(() => {
    document.querySelectorAll('a').forEach(link => {
      if (link.getAttribute('rel') === 'noopener noreferrer') link.setAttribute('rel', 'noopener noreferrer')
    })
  });

  if (isLoading) {
    return (
      <div className={"app"}>
        <LoadingPage/>
      </div>
    )
  } else if (!clickInStarted) {
    return (
      <div className={"app"}>
        <Welcome handleClickStart={setClickInStarted}/>
      </div>
    )
  } else if (clickInStarted) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={0}
          initial={{opacity: 0, y: 50}}
          animate={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: -50}}
          transition={{duration: 0.5, ease: "easeOut"}}
          className={'app'}
        >
          <Main
            functions={{setRoundPage, setTotalRoundPages, setSelectionPage, setTotalSelectionPages, pushDataExport}}/>
          <Footer variables={[roundPage, totalRoundPages, selectionPage, totalSelectionPages, dataExport]}/>
        </motion.div>
      </AnimatePresence>
    )
  }
}

export default App
