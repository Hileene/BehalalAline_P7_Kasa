import  { useState } from "react"
import Arrow from "../../assets/arrow.png"
import ArrowOpen from "../../assets/arrow-open.png"
import "./collapse.css"

function Collapse( {title, text}) {

  const [open, setOpen]= useState(false)

 return (
  <div className="collapse">
  <div className="header-collapse">
      <div className="title-collapse">{title}</div>
      <span className= "arrow-collapse"  onClick={() => setOpen(!open)}>
        {open  ? <img src={ArrowOpen} alt="Afficher le contenu"/> : <img src={Arrow} alt=" Cacher le contenu"/>}  
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