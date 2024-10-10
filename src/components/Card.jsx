import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
    <div id='card' className={props.cardBg}>
        <h3 id='card-title'>{props.title}</h3>
        <p id='card-subtitle'>{props.subtitle}</p>
        <Link to={props.path} id='card-btn' className={props.btnClr}>{props.btn}</Link>
    </div>
  )
}

export default Card