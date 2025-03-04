import Button from "../components/button/Button.jsx";

export default function ButtonCreateIssue() {
  return (
    <Button onclick={() => {
      window.open('https://github.com/eskimozin/battle-tube/issues/new', '_blank', 'noopener,noreferrer')
    }} classname={'link-external no-margin'}>
      <span>INFORMAR UM PROBLEMA</span>
      <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center'}}>
        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#C6ADFF"
             style={{paddingTop: 0, margin: 0, paddingLeft: '0.35rem'}}>
          <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/>
        </svg>
      </span>
    </Button>
  )
}