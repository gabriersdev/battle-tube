import Selection from "../selection/selection";
import PropTypes from "prop-types";
import './main.css'

const Main = ({functions}) => {
  return (
    <main className="container-main">
      <h1 className={"none"}>ESCOLHA UM CLIPE</h1>
      <div>
        <Selection functions={functions}/>
      </div>
    </main>
  )
}

Main.propTypes = {
  functions: PropTypes.object.isRequired
}

export default Main