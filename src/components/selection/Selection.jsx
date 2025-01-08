import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {motion, AnimatePresence} from "framer-motion";
import ClipContainer from "../clipContainer/ClipContainer.jsx";
import ChosenClip from "../chosenClip/ChosenClip.jsx";
import clipsData from "../../data/clips";
import './selection.css'
import Util from "../../util/Util.js";

const initialClips = clipsData.map(clip => {
  return {...clip, title: clip.title.replaceAll('"', '').trim()}
});

const Selection = ({functions}) => {
  const {setRoundPage, setTotalRoundPages, setSelectionPage, setTotalSelectionPages, pushDataExport} = functions;

  const [clips, setClips] = useState(initialClips); // Lista de clipes na rodada atual
  const [currentPairIndex, setCurrentPairIndex] = useState(0); // Par atual sendo exibido
  const [round, setRound] = useState(1); // Número da rodada
  const [winners, setWinners] = useState([]); // Vencedores da rodada atual
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    if (initialClips === undefined || initialClips.length === 0 || !Array.isArray(initialClips) || initialClips.length % 2 !== 0 || initialClips.length !== 64) {
      console.error('Erro: A lista de clipes não é válida!', initialClips, typeof initialClips);
      return (
        <div className={'selection selection-error'}>
          <h2 className={'selection-error-title'}>Erro: A lista de clipes não é válida!</h2>
        </div>
      )
    }

    // Obter os dados do localStorage, se existirem
    if (typeof localStorage !== 'undefined') {
      const clips = JSON.parse(localStorage.getItem('clips'));
      const currentPairIndex = JSON.parse(localStorage.getItem('currentPairIndex'));
      const round = JSON.parse(localStorage.getItem('round'));
      const winners = JSON.parse(localStorage.getItem('winners'));
      const logs = JSON.parse(localStorage.getItem('logs'));

      if (logs && logs.length > 0 && Array.isArray(logs)) {
        try {
          setLogs(logs);
        } catch (e) {
          setLogs([]);
          console.error('Erro ao carregar os logs do localStorage:', e)
        }
      } else {
        setLogs([])
      }

      if (clips && clips.length > 0 && Array.isArray(clips) && Util.includesObjects(clips, initialClips)) {
        try {
          setClips(clips);
        } catch (e) {
          console.error('Erro ao carregar os clips do localStorage:', e)
        }
      }

      if (currentPairIndex !== null && round !== null && winners) {
        try {
          setCurrentPairIndex(currentPairIndex);
          setRound(round);
          setWinners(winners);
        } catch (e) {
          localStorage.removeItem('clips');
          localStorage.removeItem('currentPairIndex');
          localStorage.removeItem('round');
          localStorage.removeItem('winners');
          console.error('Erro ao carregar os dados do localStorage:', e);
        }
      }
    }
  }, [])

  useEffect(() => {
    // Atualizar os dados do projeto, no footer
    setRoundPage(round);
    setTotalRoundPages(Math.log2(initialClips.length));
    setSelectionPage(currentPairIndex + 1);
    setTotalSelectionPages(clips.length / 2);

    // TODO - fazer isso de forma mais eficiente
    const btnClearReload = document.querySelector(['[data-action="clear-and-reload"]'])
    if (btnClearReload && round === 1 && currentPairIndex === 0) {
      btnClearReload.style.display = 'none';
    } else if (btnClearReload) {
      btnClearReload.style.display = 'flex';
    }

  }, [round, currentPairIndex, clips, setRoundPage, setTotalRoundPages, setSelectionPage, setTotalSelectionPages]);

  const handleSelection = (winnerIndex) => {
    // Adicionar o vencedor ao array de vencedores
    const winner = clips[currentPairIndex * 2 + winnerIndex];
    setWinners((prev) => [...prev, winner]);

    const data = {
      datetime: new Date().toISOString(),
      SEL: `${currentPairIndex + 1}/${clips.length / 2}`,
      ROD: `${round}/${Math.log2(initialClips.length)}`,
      title: winner.title,
      username: winner.creator_name,
      id: winner.id,
    }

    // Atualizar os dados do projeto, para exportação
    pushDataExport(data);

    // Atualizar os logs
    setLogs((prev) => [...prev, {...data, context: 'DEBUG'}]);

    // Verificar se foi o último par da rodada
    if (currentPairIndex === Math.floor(clips.length / 2) - 1) {
      // Atualizar os clipes para a próxima rodada
      setClips(winners.concat(winner)); // Adicionar o último vencedor
      setCurrentPairIndex(0); // Resetar o índice dos pares
      setWinners([]); // Resetar os vencedores
      setRound(round + 1); // Avançar para a próxima rodada
    } else {
      // Avançar para o próximo par
      setCurrentPairIndex(currentPairIndex + 1);
    }

    // Persistir os dados no localStorage
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('clips', JSON.stringify(clips));
      localStorage.setItem('currentPairIndex', JSON.stringify(currentPairIndex));
      localStorage.setItem('round', JSON.stringify(round));
      localStorage.setItem('winners', JSON.stringify(winners));
      localStorage.setItem('logs', JSON.stringify(logs));
    }
  };

  // Verificar se restou apenas um clipe
  if (clips.length === 1) {
    const clipData = {...clips[0], username: clips[0].creator_name};
    return (
      // Se for o caso, exibir o clipe escolhido
      <section className={'selection'}>
        <ChosenClip data={clipData}/>
      </section>
    )
  }

  // Obter os dois clipes do par atual
  const currentPair = [
    clips[currentPairIndex * 2],
    clips[currentPairIndex * 2 + 1],
  ];

  const getClipData = (index) => {
    return {
      title: currentPair[index] ? currentPair[index].title : 'Sem título',
      username: currentPair[index] ? currentPair[index].creator_name : 'Sem nome',
      id: currentPair[index] ? currentPair[index].id : '#',
    };
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentPairIndex}
        initial={{opacity: 0, y: 50}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: -50}}
        transition={{duration: 0.1, ease: "easeOut"}}
        className={'selection'}
      >
        <ClipContainer data={getClipData(0)} handleSelection={handleSelection} index={0}/>
        <div className={'selection-versus'}>
          <img src={'/images/versus-img.png'} alt={'VS.'} className={'selection-versus-img'} loading={"lazy"}/>
        </div>
        <ClipContainer data={getClipData(1)} handleSelection={handleSelection} index={1}/>
      </motion.div>
    </AnimatePresence>
  )
}

Selection.propTypes = {
  functions: PropTypes.object.isRequired
}

export default Selection