import Footer from "../footer/footer";
import ClipContainer from "../clipContainer/clipContainer";

import './container.css'

const Container = () => {
  return (
    <div className="container">
      <h1 className={"none"}>ESCOLHA SEU CLIPE</h1>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <ClipContainer/>
        <ClipContainer/>
      </div>
      <Footer/>
    </div>
  )
}

export default Container