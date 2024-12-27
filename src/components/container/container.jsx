import Footer from "../footer/footer";
import ClipContainer from "../clipContainer/clipContainer";

import './container.css'

const Container = () => {
  return (
    <div className="container">
      <h1 className={"none"}>ESCOLHA UM CLIPE</h1>
      <div className={"container-clips"}>
        <ClipContainer/>
        <ClipContainer/>
      </div>
      <Footer/>
    </div>
  )
}

export default Container