import Selection from "../selection/selection";
import './main.css'

const Main = () => {
  return (
    <main className="container-main">
      <h1 className={"none"}>ESCOLHA UM CLIPE</h1>
      <div>
        <Selection/>
      </div>
    </main>
  )
}

export default Main