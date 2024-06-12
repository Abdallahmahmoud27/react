import React from 'react'
import {Products} from '../../ProductsData'

export const ProductsCard = (Props) => {
  return (
    <>
    <div className="card">
  <img src={Props.data.imgSrc} className="card-img-top w-25" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{Props.data.title}</h5>
    <p className="card-text">{Props.data.desc}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>



</div>
    
    </> )
}
