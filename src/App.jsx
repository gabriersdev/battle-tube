import {useEffect, useRef, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import AOS from 'aos';

import Main from './components/main/Main.jsx'
import Footer from "./components/footer/Footer.jsx";
import LoadingPage from "./components/loadingPage/LoadingPage.jsx";
import Welcome from "./components/welcome/Welcome.jsx";

import 'aos/dist/aos.css';
import './app.css'

function App() {
  const [roundPage, setRoundPage] = useState(1)
  const [totalRoundPages, setTotalRoundPages] = useState(6)
  const [selectionPage, setSelectionPage] = useState(1)
  const [totalSelectionPages, setTotalSelectionPages] = useState(32)
  const [dataExport, setDataExport] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [clickInStarted, setClickInStarted] = useState(false)

  const dialog = useRef(null)

  const pushDataExport = (data) => {
    setDataExport([...dataExport, data])
  }

  useEffect(() => {
    AOS.init();
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

  // setInterval(() => {
  //   if (dialog.current) {
  //     dialog.current.showModal()
  //   }
  // }, 1000)

  if (isLoading) {
    return (
      <div className={"app"}>
        <LoadingPage/>
      </div>
    )
  } else if (!clickInStarted) {
    return (
      <div className={"app"}>
        <dialog id={"modal-dialog-analytics"}
          style={{
            padding: '1rem',
            border: '1px solid #C6ADFF50',
            width: 'min(calc(100% - 2rem), 600px)',
            margin: '1.5rem auto 0 auto',
            textAlign: 'center',
            boxSizing: 'border-box',
            outline: 'none',
            backgroundColor: '#121212',
            color: '#F6F6F6',
            borderRadius: '5px'
          }}
          ref={dialog}
        >
          <h2 style={{marginBottom: '1rem'}}>Estatísticas de Clipes do Canal</h2>
          <div style={{textAlign: 'left'}}>
            <div style={{marginBottom: '1rem'}}>
              <h3 style={{
                textTransform: 'uppercase',
                color: 'purple',
                fontWeight: 'bold',
                marginBottom: '0.5rem'
              }}>CLIPES EM NÚMEROS</h3>
              0S MESES QUE TIVERAM MAIS CLIPES:
              <ol>
                <li>JANEIRO, 87 CLIPES</li>
                <li>JULHO, 50 CLIPES</li>
                <li>JUNHO, 20 CLIPES</li>
              </ol>

              5.067 CLIPES FEITOS NO ANO
            </div>

            <div style={{marginBottom: '1rem'}}>
              <h3 style={{
                textTransform: 'uppercase',
                color: 'purple',
                fontWeight: 'bold',
                marginBottom: '0.5rem'
              }}>CLIPPERS</h3>
              0S MAIORES CLIPPERS:
              <ol>
                <li>DRAUDINHO, 87 CLIPES</li>
                <li>ROBERTINHO, 50 CLIPES</li>
                <li>CLEBER, 20 CLIPES</li>
              </ol>
            </div>

            <div style={{marginBottom: '1rem'}}>
              <h3 style={{
                textTransform: 'uppercase',
                color: 'purple',
                fontWeight: 'bold',
                marginBottom: '0.5rem'
              }}>Visualizações</h3>
              <p>TODOS OS CLIPES FEITOS EM 2024, SOMARAM, JUNTOS 1.000.000 DE VISUALIZAÇÕES</p>
            </div>

            <div style={{marginBottom: '1rem'}}>
              OS CLIPES DE 2024 MAIS VISTOS:
              <ol>
                <li>CLIPÃO, 500.000 VISUALIZAÇÕES</li>
                <li>CLIPINHO, 250.000 VISUALIZAÇÕES</li>
                <li>CLIPIN, 100.000 VISUALIZAÇÕES</li>
              </ol>
            </div>

            <div style={{marginBottom: '1rem'}}>
              Dados obtidos entre entre os dias 01 e 02/01/2025 utilizando a API da Twitch. Confira mais detalhes em <a href={"#"}>link.com</a>.
            </div>
          </div>
          <button style={{color: "purple"}} onClick={(e) => e.target.closest('dialog').close()}>X FECHAR</button>
        </dialog>
        <Welcome handleClickStart={setClickInStarted}/>
        <AnimatePresence mode="wait">
          <motion.div
            key={0}
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -50}}
            transition={{duration: 0.5, ease: "easeOut"}}
            style={{
              padding: '1rem',
              border: '1px solid #C6ADFF50',
              width: 'min(calc(100% - 2rem), 500px)',
              margin: '1.5rem auto 0 auto',
              textAlign: 'center',
              boxSizing: 'border-box'
            }}
          >
            Ao prosseguir, você concorda com o armazenamento de alguns dados no navegador para aprimorar sua experiência, realizar análises de perfomance, corrigir erros e identificar bugs.
          </motion.div>
        </AnimatePresence>
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
