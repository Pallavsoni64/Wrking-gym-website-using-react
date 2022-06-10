import React from 'react'
// import card from './img/about.jpg'

const Card = (props) => {
  return (
    <div className="card">
    <h2>{props.heading}</h2>
    <img src={props.image} alt="" />
    <p>{props.para} </p>
</div>
  )
}

export default Card
