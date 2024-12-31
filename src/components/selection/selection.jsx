import ClipContainer from "../clipContainer/clipContainer";
import './selection.css'
import {useEffect, useState} from "react";

import initialClips from "../../data/clips";

const Selection = () => {
  const [clips, setClips] = useState(initialClips); // Lista de clipes na rodada atual
  const [currentPairIndex, setCurrentPairIndex] = useState(0); // Par atual sendo exibido
  const [round, setRound] = useState(1); // Número da rodada
  const [winners, setWinners] = useState([]); // Vencedores da rodada atual

  useEffect(() => {
    console.log(`Rodada ${round} Grupo ${currentPairIndex + 1} de ${clips.length / 2}`)
  }, [winners])

  const handleSelection = (winnerIndex) => {
      // Adicionar o vencedor ao array de vencedores
      const winner = clips[currentPairIndex * 2 + winnerIndex];
      setWinners((prev) => [...prev, winner]);

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
    alert(`O melhor clipe é: ${clips[0]}`)
  }

  // Obter os dois clipes do par atual
  const currentPair = [
    clips[currentPairIndex * 2],
    clips[currentPairIndex * 2 + 1],
  ];

  const getClipData = (index) => {
    return {
      title: currentPair[index].title,
      username: currentPair[index].creator_name,
      id: currentPair[index].id,
    };
  }

  return (
    <section className={'selection'}>
      <ClipContainer data={getClipData(0)} handleSelection={handleSelection} index={0}/>
      <div className={'selection-versus'}>
        <img src={'versus-img.png'} alt={'VS.'} className={'selection-versus-img'}/>
      </div>
      <ClipContainer data={getClipData(1)} handleSelection={handleSelection} index={1}/>
    </section>
  )
}

export default Selection