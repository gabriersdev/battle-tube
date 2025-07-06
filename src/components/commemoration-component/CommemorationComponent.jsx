import "./commemorationComponent.css";
import {AnimatePresence, motion} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import Button from "../button/Button.jsx";

export default function CommemorationComponent() {
  // Estado para os índices dos elementos visíveis
  const [visibleTitleIndexes, setVisibleTitleIndexes] = useState([]);
  const [visibleOtherIndexes, setVisibleOtherIndexes] = useState([]);
  const frameVideo = useRef(null);
  
  // Elementos do título
  const titleElements = [
    <span key={1}>DAQUI A POUCO VOCÊ VAI ESCOLHER</span>,
    <span key={2} className={"neon-text"}> QUAL É O MELHOR CLIPE DE 202X</span>,
    <span key={3}>MAS ANTES...</span>,
    <span key={4} className={"neon-text"}>UM RECADO DOS ESKIMOLOVERS</span>,
  ];
  
  // Outros elementos
  const otherElements = [
    <div key={6} id={"frame-container"} style={{marginTop: "2rem", marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "1rem"}}>
      <div className={"ex"}>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/XTntNdhtwKo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </div>,
    <div key={7} className={"btn-container"}>
      <Button onclick={() => {}}>
        Continuar a escolher os clipes
      </Button>
    </div>
  ];
  
  // Função para exibir os elementos do título em sequência
  function showTitleElements() {
    titleElements.forEach((_, index) => {
      setTimeout(() => {
        // Adiciona o índice ao estado se ele ainda não estiver lá
        setVisibleTitleIndexes(prev => [...prev, index]);
      }, 1500 * index);
    });
  }
  
  // Função para exibir os outros elementos em sequência
  function showOtherElements() {
    otherElements.forEach((_, index) => {
      setTimeout(() => {
        setVisibleOtherIndexes(prev => [...prev, index]);
      }, 1500 * index);
    });
  }
  
  useEffect(() => {
    setVisibleTitleIndexes([]);
    setVisibleOtherIndexes([]);
    showTitleElements();
    let timeout1, timeout2 = [null, null];
    
    // Inicia a exibição dos outros elementos após os títulos terminarem
    timeout1 = setTimeout(() => {
      showOtherElements();
      timeout2 = setTimeout(() => {
        window.scrollTo({behavior: 'smooth', top: frameVideo.current?.querySelector("#frame-container")?.offsetTop});
      }, 500)
    }, titleElements.length * 1500);
    
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    }
  }, []);
  
  useEffect(() => {
    const parentElement = frameVideo.current;
    if (!parentElement) return; // Garante que o elemento pai exista
    
    // Função que será chamada quando uma mutação (mudança) ocorrer
    const callback = (mutationsList, observer) => {
      for (const mutation of mutationsList) {
        // Verificamos se nós (nodes) foram adicionados
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          // Procuramos nosso elemento alvo entre os nós adicionados
          const targetElement = parentElement.querySelector('#frame-container');
          
          if (targetElement) {
            // Scrolla até o elemento
            window.scrollTo({behavior: 'smooth', top: targetElement.offsetTop});
            
            // (Opcional, mas recomendado) Para de observar após encontrar o elemento
            // para evitar trabalho desnecessário.
            observer.disconnect();
          }
        }
      }
    };
    
    // 2. Cria uma instância do observer com a nossa função de callback
    const observer = new MutationObserver(callback);
    
    // 3. Configura o observer para observar o elemento pai
    // 'childList: true' significa que ele deve reagir à adição/remoção de filhos
    const config = {childList: true, subtree: true};
    observer.observe(document?.body, config);
    
    // 4. Função de limpeza: essencial parar de observar quando o componente for desmontado
    // para evitar vazamentos de memória (memory leaks).
    return () => {
      console.log("Desconectando o observer...");
      observer.disconnect();
    };
    
  }, []);
  
  return (
    <div className={"commemoration-component"}>
      <h1>
        <AnimatePresence>
          {visibleTitleIndexes?.filter((v, i, self) => self.indexOf(v) === i)?.map((itemIndex) => (
            <motion.div
              // Use a key estável e única para o item
              key={itemIndex}
              initial={{opacity: 0, y: 10}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0}}
              transition={{duration: 0.5}}
            >
              {titleElements[itemIndex]}
            </motion.div>
          ))}
        </AnimatePresence>
      </h1>
      
      <div>
        <AnimatePresence>
          {visibleOtherIndexes?.filter((v, i, self) => self.indexOf(v) === i)?.map((itemIndex) => (
            <motion.div
              ref={frameVideo}
              key={itemIndex}
              initial={{opacity: 0, y: 10}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0}}
              transition={{duration: 0.5}}
            >
              {otherElements[itemIndex]}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}