import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {motion, AnimatePresence} from "framer-motion";
import ClipContainer from "../clipContainer/clipContainer";
import ChosenClip from "../chosenClip/chosenClip";
import initialClips from "../../data/clips";
import './selection.css'

const Selection = ({functions}) => {
  const {setRoundPage, setTotalRoundPages, setSelectionPage, setTotalSelectionPages, pushDataExport} = functions;

  const [clips, setClips] = useState(initialClips); // Lista de clipes na rodada atual
  const [currentPairIndex, setCurrentPairIndex] = useState(0); // Par atual sendo exibido
  const [round, setRound] = useState(1); // Número da rodada
  const [winners, setWinners] = useState([]); // Vencedores da rodada atual

  useEffect(() => {
    setRoundPage(round);
    setTotalRoundPages(Math.log2(initialClips.length));
    setSelectionPage(currentPairIndex + 1);
    setTotalSelectionPages(clips.length / 2);
  }, [round, currentPairIndex, clips, setRoundPage, setTotalRoundPages, setSelectionPage, setTotalSelectionPages]);

  const handleSelection = (winnerIndex) => {
    // Adicionar o vencedor ao array de vencedores
    const winner = clips[currentPairIndex * 2 + winnerIndex];
    setWinners((prev) => [...prev, winner]);
    pushDataExport(`Seleção: ${currentPairIndex + 1}/${clips.length / 2} - Rodada: ${round}/${Math.log2(initialClips.length)} - ${winner.title} - ${winner.creator_name}`);

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
          initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -50 }}
             transition={{ duration: 0.5, ease: "easeOut" }}
          className={'selection'}
        >
          <ClipContainer data={getClipData(0)} handleSelection={handleSelection} index={0}/>
          <div className={'selection-versus'}>
            <img src={'versus-img.png'} alt={'VS.'} className={'selection-versus-img'}/>
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