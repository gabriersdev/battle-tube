import {createContext, useEffect, useRef} from "react";
import Selection from "../selection/Selection.jsx";
import PropTypes from "prop-types";
import './main.css'
import Dialog from "../dialog/Dialog.jsx";

const Theme = createContext({})

const Main = ({functions}) => {
  const dialog = useRef(null)
  useEffect(() => {
    document.querySelectorAll('a').forEach(link => link.setAttribute('rel', 'noopener noreferrer'));
  }, [])

  return (
    <Theme.Provider value={{dialog}}>
      <Dialog/>
      <main className="container-main">
        <h1 className={"none"}>ESCOLHA UM CLIPE</h1>
        <div>
          <Selection functions={functions}/>
        </div>
      </main>
    </Theme.Provider>
  )
}

Main.propTypes = {
  functions: PropTypes.object.isRequired
}

export {Main, Theme}