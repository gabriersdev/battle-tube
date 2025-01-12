const ApurationInfo = () => {
  const countClipsYear = 5067;
  const selectionYear = 2024

  return (
    <div style={{textAlign: 'center', display: 'flex', gap: '0.5rem', flexDirection: 'column'}}>
      <div data-aos="fade-up" data-aos-delay={500} data-aos-duration={1500}>
        <p>FORAM <span className={'neon-text'}>{countClipsYear.toLocaleString('pt-br')}</span> CLIPES FEITOS
          EM {selectionYear}</p>
      </div>
      <div data-aos="fade-up" data-aos-delay={1500} data-aos-duration={1000}>
        <p>SELECIONAMOS AQUI APENAS OS <span className={'neon-text'}>64 MELHORES</span></p>
      </div>
      <div data-aos="fade-up" data-aos-delay={2500} data-aos-duration={1500}>
        <p>E VOCÊ TEM A MISSÃO DE ESCOLHER O MELHOR</p>
      </div>
    </div>
  )
}

export default ApurationInfo;