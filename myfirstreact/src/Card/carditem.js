import React from "react";
import './carditem.css'
const Card=(props)=>{
return(
    <div className="card">
       {props.children}

    </div>
)
}
export default Card;