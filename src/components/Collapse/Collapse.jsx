import  { useState } from "react"
import Arrow from "../../assets/arrow.png"
import "./collapse.css"

function Collapse( {title, text}) {

  const [open, setOpen]= useState(false)

 return (
  <div className="collapse" id={`collapse-${title}`}>
  <div className="header-collapse">
      <div className="title-collapse">{title}</div>
      <span className={`arrow-collapse ${open}`} onClick={() => setOpen(!open)}>
          <img src={Arrow} alt="Afficher le contenu"/>
      </span>
  </div>
  {
      /* Si le collapse est à TRUE alors il affichera le contenu */
      open && <div className="text-collapse">{text}</div>
  }
</div>
 )
}

export default Collapse