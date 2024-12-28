import ClipContainer from "../clipContainer/clipContainer";
import './selection.css'

const Selection = () => {
  return (
    <section className={'selection'}>
      <ClipContainer/>
      <div className={'selection-versus'}>
        <img src={'versus-img.png'} alt={'VS.'} className={'selection-versus-img'}/>
      </div>
      <ClipContainer/>
    </section>
  )
}

export default Selection