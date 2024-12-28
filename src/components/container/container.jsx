import ClipContainer from "../clipContainer/clipContainer";

import './container.css'

const Container = () => {
  return (
    <main className="container">
      <h1 className={"none"}>ESCOLHA UM CLIPE</h1>
      <div className={"container-clips"}>
        <ClipContainer/>
        <ClipContainer/>
      </div>
    </main>
  )
}

export default Container