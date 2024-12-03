# Ferramenta de Torneio com Vídeos do YouTube

Crie uma ferramenta web onde os usuários podem criar torneios para escolher entre vídeos do YouTube. O torneio deve ser em formato de eliminação, com os vídeos competindo entre si até chegar a um vencedor.

## Funcionalidades

### 1. Criação de Torneio:
- O usuário pode criar um torneio inserindo **links de vídeos do YouTube** (até 32 vídeos).
- O sistema deve organizar automaticamente os vídeos em **rodadas eliminatórias** (oitavas, quartas, semifinal e final).

### 2. Votação:
- Em cada rodada, o usuário escolhe entre **dois vídeos**.
- O vídeo vencedor avança para a próxima fase e o vídeo perdedor é eliminado.

### 3. Exibição do Torneio:
- Mostrar os vídeos com **título** e **miniatura**.
- O torneio é atualizado automaticamente conforme os vídeos avançam ou são eliminados.

### 4. Final e Resultado:
- Após o torneio, o **vídeo vencedor** é exibido.
- O criador do torneio pode **compartilhar o resultado** do torneio.

### 5. Design Simples e Responsivo:
- A interface deve ser **simples** e fácil de usar, **otimizada para dispositivos móveis** e **desktop**.

## Tecnologias Sugeridas

- **Frontend**: React ou similar para construir a interface.
- **Backend**: Node.js ou similar para gerenciar a lógica do torneio.
- **API do YouTube**: Usar a API do YouTube para obter automaticamente detalhes dos vídeos (como miniaturas e títulos).

---

A ferramenta deve ser intuitiva e proporcionar uma boa experiência ao usuário, permitindo a criação rápida de torneios e interação fácil nas votações.
